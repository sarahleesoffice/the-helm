
/**
 * Get analyst earnings per share (EPS) estimates for a company.
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
   * Time period: annual or quarterly (default: annual)
   */
  period?: "annual" | "quarterly";
}


export async function getAnalystEstimates(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_analyst_estimates", params);
}
