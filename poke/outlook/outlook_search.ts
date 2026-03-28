
/**
 * Search Outlook using KQL (Keyword Query Language) syntax. Returns email previews with Outlook message IDs.

Examples of KQL search queries:
- "from:john@example.com" - emails from John
- "subject:invoice" - emails with subject containing "invoice"
- "hasattachment:true" - emails with attachments
- "from:john AND subject:invoice" - combine with AND/OR
- "received>=2024-01-01" - emails received after a date

Important notes:
1. Results are limited to the specified limit (max 25).
2. All returned IDs are Outlook ImmutableIds, not Poke UUIDs. Use these IDs with other outlook_* tools.
3. When searching for relevant prior conversations, try searching sent items.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * Outlook search query using KQL syntax (e.g., 'from:john subject:invoice')
   */
  query: string;
  /**
   * Maximum number of emails to return (max 25)
   */
  limit?: number;
}


export async function outlookSearch(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "outlook_search", params);
}
