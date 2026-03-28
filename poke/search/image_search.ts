
/**
 * Search for images on the web using Brave Image Search API. Returns image URLs converted to media IDs that can be used with other tools like display_media. Use this when the user asks for images, photos, or visual content.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The image search query (e.g., 'cute red pandas', 'sunset over mountains')
   */
  query: string;
  /**
   * Number of images to return (1-20, default 5)
   */
  count?: number;
  /**
   * Safe search filter level
   */
  safesearch?: "off" | "strict";
}


export async function imageSearch(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "image_search", params);
}
