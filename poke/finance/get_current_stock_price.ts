
/**
 * Get the current/latest stock price snapshot for a company. Returns price, day change, market cap.
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


export async function getCurrentStockPrice(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_current_stock_price", params);
}
