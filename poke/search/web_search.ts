
/**
 * Search the web for factual, historical, or general-knowledge information. Best for research queries, background information, "what is", "how does", and questions that don't require up-to-the-minute data. Returns ranked, extended web excerpts optimized for LLMs (uses Parallel Web Systems).

Do NOT use this for real-time or live data (current weather, live scores, breaking news, stock prices right now). Use realtime_web_search for those instead.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * Natural-language description of what the web search is trying to find. Try to make the search objective atomic, looking for a specific piece of information. May include guidance about preferred sources or freshness.
   */
  objective: string;
  /**
   * (optional) List of keyword search queries of 1-6 words, which may include search operators. The search queries should be related to the objective. Limited to 5 entries of 200 characters each.
   */
  search_queries?: string[];
  /**
   * Presets default values for different use cases. "one-shot" returns more comprehensive results and longer excerpts to answer questions from a single response, while "agentic" returns more concise, token-efficient results for use in an agentic loop. Defaults to "agentic".
   */
  mode?: "agentic" | "one-shot" | "fast";
}


export async function webSearch(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "web_search", params);
}
