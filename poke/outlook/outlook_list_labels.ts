
/**
 * List all categories in the user's Outlook account(s).
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {}


export async function outlookListLabels(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "outlook_list_labels", params);
}
