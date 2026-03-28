
/**
 * Get historical cryptocurrency prices over a date range. Data from Coinbase, Kraken, Bitfinex.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The crypto ticker symbol (e.g., BTC-USD, ETH-USD)
   */
  ticker: string;
  /**
   * Time interval: minute, day, week, month, or year
   */
  interval: "minute" | "day" | "week" | "month" | "year";
  /**
   * Multiplier for the interval (e.g., 5 for every 5 minutes)
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


export async function getHistoricalCryptoPrices(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_historical_crypto_prices", params);
}
