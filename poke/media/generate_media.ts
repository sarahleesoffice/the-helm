
/**
 * Generate images, pdfs, or data visualizations based on a text prompt, with optional input media for guidance or editing.

For DATA VISUALIZATION (output_format="data_visualization"):
- Generate tables or charts using matplotlib that visualize the data / information given
- Can accept input images containing data to extract and visualize (e.g., screenshots of spreadsheets, tables, existing charts)

Input: Text prompts with data context, optionally with input_media containing images/documents with data to extract
Output: Always returns an image of the rendered graph along with some description
- IMPORTANT: The query must include ALL necessary details and context - the model will NOT invent or assume any information not explicitly provide

For IMAGES (output_format="image" or omitted):
This tool can:
- Generate images from text descriptions (text-to-image)
- Edit existing images with text instructions (image+text-to-image)
- Use multiple images as reference for style transfer or composition
- IMPORTANT: NEVER TRY TO USE IMAGE TO CREATE A GRAPH. IF DATA VISUALIZATION FAILS MORE THAN ONCE, TELL THE USER THAT DATA VISUALIZATION HAS EXPERIENCED ISSUES AND PROVIDE THE DATA BACK IN TEXT FORMAT.

Input: Text prompts and optional media (images, videos, audio, PDFs, etc.) for guidance
Output: Always returns a single generated IMAGE (cannot generate other media types)
Use cases:
- Create original images from descriptions
- Edit or modify existing images
- Apply style from one image to another
- Add or remove elements from images
- Compose new images from multiple source images
IMPORTANT GUIDANCE:
- Images default to PHOTOREALISTIC style unless you explicitly request a different style (e.g., illustration, cartoon, anime, watercolor, etc.)
- For photorealistic images, include details about lighting, camera angles, and photography terms for best results
- Default aspect ratio is 3:4 (portrait), use 4:3 for landscape or specify other ratios as needed
- If user explicitly asks for "FLUX" or "BFL" model, set image_model="flux" to use FLUX 2 Max (text-to-image only, no editing)

For PDFs (output_format="pdf"):
- Generate LaTeX-compiled documents (reports, resumes, invoices, analysis, etc.)
- To edit an existing PDF, pass its media ID in input_media (fetches stored LaTeX source)
- PDF parameters: pdf_page_size, pdf_orientation
- IMPORTANT: The query must include ALL necessary details and context - the model will NOT invent or assume any information not explicitly provided

The generated media will be saved and you'll receive a `media_id` that can be used with `display_media` or other tools.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * Natural language description of the image you want to generate or how to modify the input media. Describe what you want to see in the image.
   */
  query: string;
  /**
   * 'image' (default), 'pdf' for documents, or 'data_visualization' for charts/graphs/tables.
   */
  output_format?: "image" | "pdf" | "data_visualization";
  /**
   * Optional array of media IDs for reference/editing. For images: use for editing, style transfer, or composition (max 3). For data_visualization: use images containing data to extract (spreadsheets, tables, charts). For PDFs: provide a single PDF media ID to edit its LaTeX source. Get id from <media id=...> and userId from <media userId=...> if present.
   */
  input_media?: {
    /**
     * The media ID from <media id=...>
     */
    id: string;
    /**
     * The userId from <media userId=...> if present (for group chat media)
     */
    userId?: string;
  }[];
  /**
   * IMAGE ONLY - omit for PDFs and data visualization. Aspect ratio for the generated image. Defaults to 3:4 (portrait).
   */
  aspect_ratio?: "1:1" | "2:3" | "3:2" | "3:4" | "4:3" | "4:5" | "5:4" | "9:16" | "16:9" | "21:9";
  /**
   * PDF ONLY - omit for images. Page size.
   */
  pdf_page_size?: "a4" | "letter" | "legal" | "a3" | "a5";
  /**
   * PDF ONLY - omit for images. Orientation.
   */
  pdf_orientation?: "portrait" | "landscape";
  /**
   * Descriptive filename for the generated image or PDF WITHOUT file extension (e.g., 'sunset-beach', 'my-cat-portrait', 'invoice-march-2024'). Make it concise (2-5 words), descriptive, and use hyphens between words.
   */
  output_filename?: string;
  /**
   * IMAGE ONLY - Which image generation model to use. 'default' uses Gemini (recommended). 'flux' uses FLUX 2 Max by Black Forest Labs - only use if user explicitly asks for FLUX or BFL.
   */
  image_model?: "default" | "flux";
}


export async function generateMedia(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "generate_media", params);
}
