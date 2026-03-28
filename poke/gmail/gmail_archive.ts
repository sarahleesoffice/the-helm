
/**
 * Archive a Gmail thread (remove from inbox).
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The Gmail message ID of an email in the thread to archive
   */
  email_id: string;
}


export async function gmailArchive(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "gmail_archive", params);
}
