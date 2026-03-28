
/**
 * Delete a calendar event. Only use *after* user approval.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The ID of the calendar the event is in.
   */
  calendarId: string;
  eventId: string;
  /**
   * The user's email address to delete the event from. Should match the address used to create / update the event.
   */
  userEmailAddressToDeleteFrom: string;
}


export async function deleteCalendarEvent(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "delete_calendar_event", params);
}
