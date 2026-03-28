
/**
 * Get the list of available central banks for interest rate data. Use this to get valid bank codes before querying historical interest rates.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {}


export async function getInterestRatesBanks(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_interest_rates_banks", params);
}
