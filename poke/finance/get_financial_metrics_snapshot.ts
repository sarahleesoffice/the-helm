
/**
 * Get the latest financial metrics snapshot for a company. Quick access to current valuation and ratios.
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


export async function getFinancialMetricsSnapshot(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_financial_metrics_snapshot", params);
}
