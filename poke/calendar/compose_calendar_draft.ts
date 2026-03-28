
/**
 * Compose a draft for a calendar event. This is used for both new calendar events and updates to existing calendar events. For new drafts, title, startDateTime, and endDateTime are required. For updates, if no values are provided for a title, startDateTime, endDateTime, attendees, description, or location, the existing value is used. userEmailAddressToSendFrom is required for both. This DOES NOT send the draft.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  type: "new" | "update";
  /**
   * Title of the event
   */
  title?: string;
  /**
   * The email address to create the event from.
   */
  userEmailAddressToSendFrom: string;
  /**
   * The calendar to create the event in. Defaults to 'primary' if not specified.
   */
  calendarId?: string;
  /**
   * Use ISO 8601 format. For all-day events, use date-only format (YYYY-MM-DD). For timed events, use full datetime format (YYYY-MM-DDTHH:MM:SS). Example: '2024-01-15' for all-day, '2024-01-15T14:30:00' for timed.
   */
  startDateTime?: string;
  /**
   * Use ISO 8601 format. For all-day events, use date-only format (YYYY-MM-DD). For timed events, use full datetime format (YYYY-MM-DDTHH:MM:SS). Example: '2024-01-15' for all-day, '2024-01-15T16:00:00' for timed.
   */
  endDateTime?: string;
  /**
   * The time zone for the start and end times, in IANA Time Zone Database format (e.g., 'America/New_York'). Only include if specified in the request. This will default to the user's timezone if not provided.
   */
  timezone?: string;
  /**
   * Email addresses of event attendees, excluding email address to send from. A null value is only valid for updates and represents no change to the attendees, while an empty array represents no attendees.
   */
  attendees?: string[];
  /**
   * Description of event (if applicable)
   */
  description?: string;
  /**
   * Event location (if specified)
   */
  location?: string;
  /**
   * Whether to add an online conference (e.g. Google Meet) to the event. Defaults to false if not specified.
   */
  addConference?: boolean;
  /**
   * Recurrence rules for the event in RFC 5545 RRULE format. (Examples: "RRULE:FREQ=DAILY;COUNT=10" for daily for 10 occurrences, "RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR;UNTIL=20251231T000000Z" for weekly on Mon, Wed, Fri until Dec 31, 2025). Multiple rules may be specified. Set to null when updating an event to remove recurrences. Leave undefined to make no changes to recurrence when updating an event, or when creating a one-time event. Make sure to include an UNTIL or COUNT when asked for.
   */
  recurrence?: string[] | null;
}


export async function composeCalendarDraft(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "compose_calendar_draft", params);
}
