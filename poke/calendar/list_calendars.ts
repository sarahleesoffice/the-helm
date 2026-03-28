
/**
 * List the user's calendars.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The user's email address to list calendars from. Must be one of the user's own email addresses.
   */
  userEmailAddressToListFrom: string;
}


export async function listCalendars(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "list_calendars", params);
}
