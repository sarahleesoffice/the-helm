
/**
 * Update an existing calendar event. Requires the eventId of the event to update, a draftId containing the updated fields, and the calendar ID.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The ID of the event to update
   */
  eventId: string;
  /**
   * The ID of the calendar the event is in.
   */
  calendarId: string;
  /**
   * The ID of the calendar draft containing the updated fields.
   */
  draftId: string;
  /**
   * The user's email address to update the event from.
   */
  userEmailAddressToUpdateFrom: string;
}


export async function updateCalendarEvent(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "update_calendar_event", params);
}
