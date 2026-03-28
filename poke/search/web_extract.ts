
/**
 * Fetch and extract content from specific web URLs. Use this when the user provides a URL and wants to know what's on that page, or when you need to read the contents of a specific webpage. Also useful for exploring URLs returned by a web search in greater depth (uses Parallel Web Systems).

Do NOT use web_search when the user gives you a specific URL — use this tool instead.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * List of URLs to extract content from. Must be valid HTTP/HTTPS URLs. Maximum 10 URLs per request.
   */
  urls: string[];
  /**
   * Natural-language description of what information you're looking for from the URLs.
   */
  objective?: string;
}


export async function webExtract(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "web_extract", params);
}
