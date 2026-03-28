
/**
 * Get earnings press releases for a company including full text of announcements.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The stock ticker symbol (e.g., AAPL)
   */
  ticker: string;
}


export async function getEarningsPressReleases(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_earnings_press_releases", params);
}
