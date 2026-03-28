
/**
 * List the triggers currently configured for the user or groupchat.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {}


export async function listTriggers(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "list_triggers", params);
}
