
/**
 * Update the filename of a media file. This changes the display name of the file but automatically preserves the original file extension. Use this when the user wants to rename an attachment or media file.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * The ID of the media file to update
   */
  mediaId: string;
  /**
   * The new filename for the media file WITHOUT the file extension (e.g., 'document', 'my-image', 'report-2024'). The original file extension will be automatically preserved and appended.
   */
  newFilename: string;
}


export async function updateMedia(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "update_media", params);
}
