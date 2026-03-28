
/**
 * Execute a calendar draft (create a calendar event). After generating a calendar draft with compose_calendar_draft, call this tool to create the event. When calling this tool, you MUST verify the output of this tool and ensure that the execution was successful.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The ID of the calendar draft to execute
   */
  draftId: string;
}


export async function executeCalendarDraft(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "execute_calendar_draft", params);
}
