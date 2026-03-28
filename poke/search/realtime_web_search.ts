
/**
 * Search the web for real-time, live, and up-to-the-minute information. Use this for current weather, live sports scores, breaking news, today's events, and anything requiring the freshest possible data. For general research, factual, or historical queries, use web_search instead. For financial/stock market data, use the financial-search-agent. For location/places searches, use maps_search.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The search query to perform on the web
   */
  query: string;
}


export async function realtimeWebSearch(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "realtime_web_search", params);
}
