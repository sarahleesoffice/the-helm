
/**
 * Read a Gmail email by its Gmail message ID. Returns the full email content including body, sender, recipients, labels, and attachments.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The Gmail message ID to read (from gmail_search results)
   */
  email_id: string;
}


export async function gmailRead(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "gmail_read", params);
}
