
/**
 * Search Gmail using native Gmail search syntax. Returns email previews with Gmail message IDs.

Examples of Gmail search queries:
- "from:john@example.com" - emails from John
- "subject:invoice after:2024/01/01" - invoices after a date
- "is:unread in:inbox" - unread inbox emails
- "has:attachment from:accounting" - emails with attachments from accounting
- "in:sent to:client@example.com" - sent emails to a client

Important notes:
1. Results are limited to the specified limit (max 25).
2. All returned IDs are Gmail message IDs, not Poke UUIDs. Use these IDs with other gmail_* tools.
3. To find more results, refine your query with date filters.
4. When searching for relevant prior conversations, try "in:sent" first as the user likely interacts with important emails.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * Gmail search query using native Gmail syntax (e.g., 'from:john subject:invoice after:2024/01/01 is:unread')
   */
  query: string;
  /**
   * Maximum number of emails to return (max 25)
   */
  limit?: number;
}


export async function gmailSearch(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "gmail_search", params);
}
