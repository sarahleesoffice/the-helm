
/**
 * Archive an Outlook email (move to Archive folder).
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The Outlook message ID of the email to archive
   */
  email_id: string;
}


export async function outlookArchive(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "outlook_archive", params);
}
