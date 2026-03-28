
/**
 * List upcoming calendar events for the user. By default, lists all available calendars (the user's own calendars and shared calendars they have access to) and only returns events where the user is an attendee or organizer. When you want to query all of a specific calendar's events, make sure to also set `includeEventsWithoutUser` to true.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The ID of the calendar to list events from. If not provided, searches all calendars.
   */
  calendarId?: string;
  /**
   * Start time for event search in ISO format with offset, for example "1970-01-01T00:00:00Z" (defaults to now)
   */
  timeMin?: string;
  /**
   * End time for event search in ISO format with offset, for example "1970-01-08T00:00:00Z" (defaults to 7 days from now)
   */
  timeMax?: string;
  /**
   * The user's email address to list calendar events from. Must be one of the user's own email addresses.
   */
  userEmailAddressToListFrom: string;
  /**
   * Case insensitive free text search matching all fields. For each word in the query, the event must contain that word in any field. Does not support special characters, complex AND, OR, NOT boolean logic, or regex. Leave this null to list all. For example, "office standup" matches all events with both "office" and "standup" somewhere. Typically use this if there are too many events to list.
   */
  searchQuery?: string;
  /**
   * If false (default), only returns events where the user is an attendee or organizer. Set to true when: (1) looking up another person's calendar/availability, (2) finding meeting details for events the user wasn't invited to, or (3) browsing a shared calendar's full contents.
   */
  includeEventsWithoutUser?: boolean;
}


export async function listCalendarEvents(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "list_calendar_events", params);
}
