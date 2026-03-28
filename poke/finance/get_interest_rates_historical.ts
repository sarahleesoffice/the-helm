
/**
 * Get historical interest rate data from a central bank. Use get_interest_rates_banks to get available bank codes first. Note: Returns only dates when rates changed, so short date ranges may return no data if no rate changes occurred. Use longer date ranges (e.g., multiple years) for better results.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The central bank code (e.g., FED, ECB, BOJ). Use get_interest_rates_banks to get available codes.
   */
  bank: string;
  /**
   * Start date for historical data (YYYY-MM-DD)
   */
  start_date?: string;
  /**
   * End date for historical data (YYYY-MM-DD)
   */
  end_date?: string;
}


export async function getInterestRatesHistorical(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_interest_rates_historical", params);
}
