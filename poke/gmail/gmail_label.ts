
/**
 * Add or remove label(s) from a Gmail thread. Use gmail_list_labels to see available labels. Use gmail_trash to trash and gmail_archive to archive instead of this tool for those operations.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The Gmail message ID of an email in the thread
   */
  email_id: string;
  labels: string[];
  /**
   * Whether to add or remove the labels
   */
  action?: "add" | "remove";
}


export async function gmailLabel(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "gmail_label", params);
}
