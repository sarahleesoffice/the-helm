
/**
 * Search for specific financial line items across multiple tickers. Find specific metrics like revenue, net_income, etc.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * Array of financial line items to search for (e.g., revenue, net_income)
   */
  line_items: string[];
  /**
   * Array of ticker symbols to search
   */
  tickers: string[];
  /**
   * Time period: annual, quarterly, or ttm
   */
  period?: "annual" | "quarterly" | "ttm";
  /**
   * Maximum number of results per ticker
   */
  limit?: number;
}


export async function searchFinancials(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "search_financials", params);
}
