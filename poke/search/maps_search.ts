
/**
 * Search for places, locations, businesses, restaurants, and geographic queries using Google Maps. Use this for any query about nearby places, directions, addresses, or location-based searches.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The location/places search query (e.g., 'coffee shops near me', 'restaurants in San Francisco', 'nearest gas station')
   */
  query: string;
}


export async function mapsSearch(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "maps_search", params);
}
