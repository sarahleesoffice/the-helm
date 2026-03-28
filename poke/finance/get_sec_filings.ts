
/**
 * Get SEC filings for a company including 10-K, 10-Q, 8-K, and other regulatory documents.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The stock ticker symbol (e.g., AAPL)
   */
  ticker?: string;
  /**
   * The CIK (Central Index Key) of the company
   */
  cik?: string;
  /**
   * Filter by filing type
   */
  filing_type?: "10-K" | "10-Q" | "8-K" | "4" | "144";
}


export async function getSecFilings(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_sec_filings", params);
}
