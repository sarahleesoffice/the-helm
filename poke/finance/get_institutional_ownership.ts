
/**
 * Get institutional ownership data. Query by investor name to see their holdings, or by ticker to see who owns the stock.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The investment manager name (e.g., BERKSHIRE_HATHAWAY_INC)
   */
  investor?: string;
  /**
   * The stock ticker symbol to see institutional owners
   */
  ticker?: string;
  /**
   * Maximum number of holdings to return (default: 10)
   */
  limit?: number;
  /**
   * Filter for holdings reported on or after this date (YYYY-MM-DD)
   */
  report_period_gte?: string;
  /**
   * Filter for holdings reported on or before this date (YYYY-MM-DD)
   */
  report_period_lte?: string;
}


export async function getInstitutionalOwnership(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_institutional_ownership", params);
}
