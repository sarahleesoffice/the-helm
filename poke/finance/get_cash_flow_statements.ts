
/**
 * Get cash flow statements for a company. Returns operating, investing, and financing cash flows.
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
   * Time period: annual, quarterly, or ttm (trailing twelve months)
   */
  period: "annual" | "quarterly" | "ttm";
  /**
   * Maximum number of statements to return (default: 4)
   */
  limit?: number;
  /**
   * Filter for statements on or after this date (YYYY-MM-DD)
   */
  report_period_gte?: string;
  /**
   * Filter for statements on or before this date (YYYY-MM-DD)
   */
  report_period_lte?: string;
}


export async function getCashFlowStatements(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_cash_flow_statements", params);
}
