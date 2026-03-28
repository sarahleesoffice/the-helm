
/**
 * Send a Gmail draft by its Gmail draft ID. The draft must have been shown to the user via display_draft first.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The Gmail draft ID to send (from gmail_compose_draft)
   */
  draftId: string;
}


export async function gmailSendDraft(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "gmail_send_draft", params);
}
