
/**
 * Use this tool to find a user's contacts by name or email address.

Eligible contacts:
- Contacts saved to the user's address book.
- Contacts involved in email conversations with the user.

For example, you can search for 'John' or 'John Doe', or an email address like 'john@gmail.com'.
The search is case-insensitive and supports partial matches (similar to SQL's ILIKE operator).

The tool will return a list of contacts that match the search query, including their names and email addresses if available.

Additional notes:
1. A user may only specify a first or last name. If there's a single contact with that name, it's considered a valid match.
2. If multiple contacts match, all will be returned.
3. If NO contacts are found, consider using the search_emails tool as a fallback to find relevant email conversations.

IMPORTANT: The email of a user may not always match their name, or vice versa. Don't automatically rule out a contact just because of these kinds of mismatches.

 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The search query to find contacts. For example, a name like 'John' OR 'John Doe', or an email address like 'john@gmail.com'.
   */
  query: string;
}


export async function searchContacts(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "search_contacts", params);
}
