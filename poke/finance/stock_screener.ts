
/**
 * Screen stocks by filtering on financial metrics like P/E ratio, revenue, debt, margins, and more.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * Array of filter conditions
   */
  filters: {
    /**
     * The financial metric to filter on (e.g., pe_ratio, revenue, total_debt)
     */
    field: string;
    /**
     * Comparison operator
     */
    operator: "gt" | "lt" | "gte" | "lte" | "eq" | "in";
    /**
     * Value to compare against
     */
    value: number | string[];
  }[];
  /**
   * Maximum number of results (default: 10)
   */
  limit?: number;
}


export async function stockScreener(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "stock_screener", params);
}
