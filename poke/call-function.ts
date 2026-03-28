import * as crypto from "crypto";

const RPC_URL = "http://127.0.0.1:7123/rpc";
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 500;

interface TextContent {
  type: "text";
  text: string;
}

interface ImageContent {
  type: "image";
  data: string;
  mimeType: string;
}

interface AudioContent {
  type: "audio";
  data: string;
  mimeType: string;
}

interface ResourceLinkContent {
  type: "resource_link";
  uri: string;
  name?: string;
  description?: string;
  mimeType?: string;
}

interface EmbeddedResourceContent {
  type: "resource";
  resource: { uri: string; mimeType?: string; text?: string; blob?: string };
}

type ContentBlock =
  | TextContent
  | ImageContent
  | AudioContent
  | ResourceLinkContent
  | EmbeddedResourceContent;

export interface CallToolResult {
  content: ContentBlock[];
  structuredContent?: Record<string, unknown>;
  isError?: boolean;
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function callFunction(
  connection: string,
  toolName: string,
  args: unknown,
): Promise<CallToolResult> {
  const id = crypto.randomUUID();
  const request = {
    jsonrpc: "2.0",
    id,
    method: "tool_call",
    params: { connection, tool: toolName, args },
  };

  let lastError: Error | undefined;
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(RPC_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
        signal: AbortSignal.timeout(130_000),
      });

      const result = await res.json();

      if (result.error) {
        throw new Error(
          `Tool ${toolName} failed: ${result.error.message || JSON.stringify(result.error)}`,
        );
      }

      return result.result as CallToolResult;
    } catch (err: any) {
      lastError = err;
      if (err?.cause?.code === "ECONNREFUSED" && attempt < MAX_RETRIES - 1) {
        await sleep(RETRY_DELAY_MS * (attempt + 1));
        continue;
      }
      throw err;
    }
  }
  throw lastError;
}
