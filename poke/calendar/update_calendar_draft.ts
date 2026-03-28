
/**
 * Update an existing calendar draft. Provide the draft ID and any fields to update. The actual calendar event is only created when the draft is executed.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The ID of the calendar draft to update
   */
  draftId: string;
  /**
   * Updated title of the event
   */
  title?: string;
  /**
   * Updated start time in ISO 8601 format. For all-day events, use date-only format (YYYY-MM-DD). For timed events, use full datetime format (YYYY-MM-DDTHH:MM:SS).
   */
  startDateTime?: string;
  /**
   * Updated end time in ISO 8601 format. For all-day events, use date-only format (YYYY-MM-DD). For timed events, use full datetime format (YYYY-MM-DDTHH:MM:SS).
   */
  endDateTime?: string;
  /**
   * Updated time zone for the start and end times, in IANA Time Zone Database format (e.g., 'America/New_York').
   */
  timezone?: string;
  /**
   * Updated email addresses of event attendees, excluding email address to send from. Will replace existing attendee list if provided.
   */
  attendees?: string[];
  /**
   * Updated description of event
   */
  description?: string;
  /**
   * Updated event location
   */
  location?: string;
  /**
   * Whether to add an online conference (e.g. Google Meet) to the event.
   */
  addConference?: boolean;
  /**
   * Updated recurrence rules for the event in RFC 5545 RRULE format. Set to null to remove recurrences.
   */
  recurrence?: string[] | null;
}


export async function updateCalendarDraft(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "update_calendar_draft", params);
}
