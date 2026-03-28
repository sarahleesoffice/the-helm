
/**
 * Get segmented revenue data by product lines, business segments, and geographical regions.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The stock ticker symbol (e.g., AAPL)
   */
  ticker: string;
  /**
   * Time period: annual or quarterly
   */
  period: "annual" | "quarterly";
  /**
   * Maximum number of statements to return (default: 4)
   */
  limit?: number;
}


export async function getSegmentedRevenues(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_segmented_revenues", params);
}
