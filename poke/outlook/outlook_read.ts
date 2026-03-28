
/**
 * Read an Outlook email by its Outlook message ID. Returns the full email content including body, sender, recipients, and attachments.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The Outlook message ID to read (from outlook_search results)
   */
  email_id: string;
}


export async function outlookRead(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "outlook_read", params);
}
