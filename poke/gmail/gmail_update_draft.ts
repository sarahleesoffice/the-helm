
/**
 * Update an existing Gmail draft. Gmail does not support in-place draft updates, so this deletes the old draft and creates a new one. Returns the new draft ID. IMPORTANT: The newBody parameter will replace the user's message — for replies/forwards, quoted content is automatically preserved.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The Gmail draft ID to update
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
   * The new body content. For replies/forwards, include just the user's new message (quoted content is automatically preserved).
   */
  newBody: string;
  /**
   * Email address to send from
   */
  userEmailAddressToSendFrom: string;
}


export async function gmailUpdateDraft(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "gmail_update_draft", params);
}
