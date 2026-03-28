
/**
 * Add or remove categories/flags from an Outlook email. Supports built-in flags (STARRED/FLAGGED, READ, UNREAD, IMPORTANT) and custom categories. Use outlook_trash to trash and outlook_archive to archive instead.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The Outlook message ID of the email
   */
  email_id: string;
  labels: string[];
  /**
   * Whether to add or remove the labels
   */
  action?: "add" | "remove";
}


export async function outlookLabel(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "outlook_label", params);
}
