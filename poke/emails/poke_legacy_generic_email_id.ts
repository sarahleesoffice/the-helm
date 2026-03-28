
/**
 * Converts a legacy Poke UUID email ID to a direct Gmail or Outlook link. Use this when you have a Poke UUID email ID and need to give the user a clickable link to view the email in their email client.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The Poke UUID email ID to resolve
   */
  email_id: string;
}


export async function pokeLegacyGenericEmailId(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "poke_legacy_generic_email_id", params);
}
