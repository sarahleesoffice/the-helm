
/**
 * Delete a saved location. Use list_saved_locations first to get the location ID.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The ID of the location to delete
   */
  location_id: string;
}


export async function deleteLocation(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "delete_location", params);
}
