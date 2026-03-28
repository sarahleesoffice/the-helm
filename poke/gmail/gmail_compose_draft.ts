
/**
 * Compose a new Gmail draft. Works for new emails, replies, or forwards. Returns a Gmail draft ID for use with gmail_send_draft or gmail_update_draft. Recipient requirements: For NEW EMAILS and FORWARDS, recipients must always be provided. For REPLIES, recipients are optional - if not provided, the system will automatically reply-to-all. Mimics the user's writing style. For forwards, instructions should generally be left empty unless the user explicitly wants to add text. Note: The returned body contains only the new content being composed.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The To field. Required for new emails and forwards. Optional for replies (defaults to reply-to-all if empty).
   */
  mainRecipients: string[];
  /**
   * The CC field. Optional for all email types.
   */
  ccRecipients: string[];
  /**
   * The BCC field. Optional for all email types.
   */
  bccRecipients: string[];
  /**
   * The user's email address to send from. Only used for new emails. Forwards and replies use the original email's address.
   */
  userEmailAddressToSendFrom: string;
  /**
   * Array of media IDs to attach to the email.
   */
  mediaIds?: string[];
  /**
   * Content for the email body based on user instructions. Leave empty if the user doesn't provide any content.
   */
  instructions?: string;
  /**
   * If this is a reply, the Gmail message ID of the original email being replied to.
   */
  emailIdToReplyTo?: string;
  /**
   * If this is a forward, the Gmail message ID of the original email being forwarded.
   */
  emailIdToForward?: string;
}


export async function gmailComposeDraft(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "gmail_compose_draft", params);
}
