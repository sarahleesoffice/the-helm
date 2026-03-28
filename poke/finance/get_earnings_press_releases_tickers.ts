
/**
 * Get the list of supported tickers for earnings press releases. Use this to check if a ticker has press release data available before querying.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {}


export async function getEarningsPressReleasesTickers(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_earnings_press_releases_tickers", params);
}
