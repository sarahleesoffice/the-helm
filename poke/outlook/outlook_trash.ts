
/**
 * Move an Outlook email to Deleted Items (trash).
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The Outlook message ID of the email to trash
   */
  email_id: string;
}


export async function outlookTrash(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "outlook_trash", params);
}
