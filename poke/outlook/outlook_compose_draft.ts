
/**
 * Compose a new Outlook draft. Works for new emails, replies, or forwards. Returns an Outlook message ID for use with outlook_send_draft or outlook_update_draft. Recipient requirements: For NEW EMAILS and FORWARDS, recipients must always be provided. For REPLIES, recipients are optional - if not provided, the system will automatically reply-to-all. Mimics the user's writing style.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The To field. Required for new emails and forwards. Optional for replies.
   */
  mainRecipients: string[];
  /**
   * The CC field. Optional.
   */
  ccRecipients: string[];
  /**
   * The BCC field. Optional.
   */
  bccRecipients: string[];
  /**
   * The user's email address to send from. Only used for new emails.
   */
  userEmailAddressToSendFrom: string;
  /**
   * Array of media IDs to attach.
   */
  mediaIds?: string[];
  /**
   * Content for the email body based on user instructions.
   */
  instructions?: string;
  /**
   * If this is a reply, the Outlook message ID of the original email.
   */
  emailIdToReplyTo?: string;
  /**
   * If this is a forward, the Outlook message ID of the original email.
   */
  emailIdToForward?: string;
}


export async function outlookComposeDraft(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "outlook_compose_draft", params);
}
