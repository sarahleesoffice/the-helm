
/**
 * Get insider trades (buys and sells) for a company by executives, directors, and other insiders.
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
   * Maximum number of trades to return (default: 10)
   */
  limit?: number;
  /**
   * Filter for trades filed on or after this date (YYYY-MM-DD)
   */
  filing_date_gte?: string;
  /**
   * Filter for trades filed on or before this date (YYYY-MM-DD)
   */
  filing_date_lte?: string;
}


export async function getInsiderTrades(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_insider_trades", params);
}
