
/**
 * LAST RESORT ONLY — Browse a website using an autonomous browser agent. This tool launches a separate browser agent that navigates and interacts with web pages on the user's behalf.

CRITICAL RESTRICTIONS — Do NOT use this tool if ANY of the following apply:
- The task involves email (use email tools like send_email, search_email, etc. instead)
- The task involves any service that has a dedicated tool or MCP integration available (e.g., calendar, contacts, spreadsheets, documents, etc.)
- The task can be accomplished with web_search, web_extract, or any other existing tool
- The user is asking to read or summarize a webpage (use web_extract instead)
- The user is asking to search for information (use web_search instead)

ONLY use this tool when:
- The user explicitly asks you to interact with a specific website (fill out a form, check into a flight, make a reservation, etc.)
- There is genuinely no other tool available that can accomplish the task
- The task requires clicking buttons, filling forms, or navigating through multi-step web flows

This tool spawns an autonomous browser agent — provide a complete, detailed prompt with all necessary context, credentials, confirmation codes, names, and instructions. The browser agent cannot ask follow-up questions, so include everything it needs upfront.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * A complete, detailed description of the browser task. Include: (1) the specific URL or website to visit, (2) step-by-step instructions for what to do, and (3) all relevant context, credentials, confirmation codes, or personal information needed to complete the task. The browser agent runs autonomously and cannot ask clarifying questions.
   */
  prompt: string;
}


export async function browseWeb(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "browse_web", params);
}
