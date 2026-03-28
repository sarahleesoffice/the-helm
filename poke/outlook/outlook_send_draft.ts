
/**
 * Send an Outlook draft by its Outlook message ID. The draft must have been shown to the user via display_draft first.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The Outlook message ID of the draft to send (from outlook_compose_draft)
   */
  draftId: string;
}


export async function outlookSendDraft(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "outlook_send_draft", params);
}
