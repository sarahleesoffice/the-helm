
/**
 * Update an existing Outlook draft. Deletes the old draft and creates a new one. Returns the new draft message ID. IMPORTANT: The newBody parameter replaces the user's message — for replies/forwards, quoted content is automatically preserved.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The Outlook message ID of the draft to update
   */
  draftId: string;
  /**
   * Updated recipients for To field
   */
  mainRecipients?: string[];
  /**
   * Updated recipients for CC field
   */
  ccRecipients?: string[];
  /**
   * Updated recipients for BCC field
   */
  bccRecipients?: string[];
  /**
   * The new subject line
   */
  newSubject?: string;
  /**
   * The new body content. For replies/forwards, include just the user's new message.
   */
  newBody: string;
  /**
   * Email address to send from
   */
  userEmailAddressToSendFrom: string;
}


export async function outlookUpdateDraft(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "outlook_update_draft", params);
}
