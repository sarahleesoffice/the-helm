
/**
 * Load a stored image/video/audio/PDF/other media and answer a natural-language query about its contents. Use this with attachment IDs or IDs from media in the message history.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * UUID, gotten from <media id=...> tags in the message history or from [media_id: ...] tags in an email.
   */
  media_id: string;
  query: string;
}


export async function queryMedia(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "query_media", params);
}
