
/**
 * Get historical stock prices for a company over a date range. Perfect for charting and analysis.
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
   * Time interval: minute, day, week, month, or year
   */
  interval: "minute" | "day" | "week" | "month" | "year";
  /**
   * Multiplier for the interval (e.g., 5 for every 5 days)
   */
  interval_multiplier: number;
  /**
   * Start date in YYYY-MM-DD format
   */
  start_date: string;
  /**
   * End date in YYYY-MM-DD format
   */
  end_date: string;
  /**
   * Maximum number of price records (default: 5000)
   */
  limit?: number;
}


export async function getHistoricalStockPrices(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_historical_stock_prices", params);
}
