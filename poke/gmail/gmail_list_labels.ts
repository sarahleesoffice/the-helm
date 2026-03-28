
/**
 * List all labels in the user's Gmail account(s).
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {}


export async function gmailListLabels(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "gmail_list_labels", params);
}
