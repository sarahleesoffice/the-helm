
/**
 * Get real-time and historical news articles for a company with sentiment analysis.
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
   * Start date for news (YYYY-MM-DD)
   */
  start_date?: string;
  /**
   * End date for news (YYYY-MM-DD)
   */
  end_date?: string;
  /**
   * Maximum number of articles (default: 100, max: 100)
   */
  limit?: number;
}


export async function getCompanyNews(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_company_news", params);
}
