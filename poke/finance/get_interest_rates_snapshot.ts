
/**
 * Get the latest interest rates from all major central banks worldwide (Fed, ECB, BOJ, etc.).
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {}


export async function getInterestRatesSnapshot(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_interest_rates_snapshot", params);
}
