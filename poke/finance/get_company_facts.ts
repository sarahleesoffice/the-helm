
/**
 * Get company facts including name, industry, sector, market cap, employees, website, and more.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The stock ticker symbol (e.g., AAPL)
   */
  ticker?: string;
  /**
   * The CIK (Central Index Key) of the company
   */
  cik?: string;
}


export async function getCompanyFacts(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "get_company_facts", params);
}
