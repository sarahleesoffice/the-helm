
/**
 * Update a currently configured trigger.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * the id of the trigger to update
   */
  trigger_id: string;
  condition: string;
  /**
   * A thorough detail of what to do when this trigger is activated. IMPORTANT: When sending emails, forwarding, replying, or creating calendar invites to specific people, you MUST include their email addresses in this field (e.g., 'forward to receipts@ramp.com', 'reply to sender@example.com', 'send calendar invite to john@example.com').
   */
  action: string;
}


export async function updateTrigger(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "update_trigger", params);
}
