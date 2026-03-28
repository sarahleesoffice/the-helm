
/**
 * Get the current/latest cryptocurrency price snapshot. Returns price, day change.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The crypto ticker symbol (e.g., BTC-USD, ETH-USD)
   */
  ticker: string;
}


export async function getCurrentCryptoPrice(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_current_crypto_price", params);
}
