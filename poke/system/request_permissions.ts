
/**
 * Request permissions or integrations from the user. Generates a magic link for OAuth/MCP authorization.

**OAuth permissions (Google/Microsoft):**
- google:email:read
- google:email:labels
- google:email:compose
- google:email:send
- google:calendar:read
- google:calendar:write
- google:contacts:read
- google:info:read
- microsoft:email:read
- microsoft:email:labels
- microsoft:email:compose
- microsoft:email:send
- microsoft:email:delete
- microsoft:calendar:read
- microsoft:calendar:write
- microsoft:contacts:read
- microsoft:contacts:write
- microsoft:info:read

**MCP connections:**
- mcp:connection:{id} - Re-authenticate existing connection by UUID
- mcp:template:{templateId} - Create from template with template's default name
- mcp:template:{templateId}:{name} - Create from template with custom name
- mcp:new:{name}:{serverUrl} - Create new connection without template

Multiple permissions can be requested - user will complete each in sequence.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * Permission identifiers
   *
   * @minItems 1
   */
  permissions: [
    (
      | (
          | "google:email:read"
          | "google:email:labels"
          | "google:email:compose"
          | "google:email:send"
          | "google:calendar:read"
          | "google:calendar:write"
          | "google:contacts:read"
          | "google:info:read"
          | "microsoft:email:read"
          | "microsoft:email:labels"
          | "microsoft:email:compose"
          | "microsoft:email:send"
          | "microsoft:email:delete"
          | "microsoft:calendar:read"
          | "microsoft:calendar:write"
          | "microsoft:contacts:read"
          | "microsoft:contacts:write"
          | "microsoft:info:read"
        )
      | string
    ),
    ...(
      | (
          | "google:email:read"
          | "google:email:labels"
          | "google:email:compose"
          | "google:email:send"
          | "google:calendar:read"
          | "google:calendar:write"
          | "google:contacts:read"
          | "google:info:read"
          | "microsoft:email:read"
          | "microsoft:email:labels"
          | "microsoft:email:compose"
          | "microsoft:email:send"
          | "microsoft:email:delete"
          | "microsoft:calendar:read"
          | "microsoft:calendar:write"
          | "microsoft:contacts:read"
          | "microsoft:contacts:write"
          | "microsoft:info:read"
        )
      | string
    )[]
  ];
  /**
   * Email address of existing connection to request extra scopes for. When set, includes existing scopes.
   */
  email?: string;
}


export async function requestPermissions(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "request_permissions", params);
}
