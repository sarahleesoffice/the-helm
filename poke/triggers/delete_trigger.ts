
/**
 * Delete the trigger with the given id.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  trigger_id: string;
}


export async function deleteTrigger(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "delete_trigger", params);
}
