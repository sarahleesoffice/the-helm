
/**
 * Create a shareable Poke recipe link for someone else. Use this when the user wants to share Poke with a friend, family member, or colleague — with a customized experience tailored to that person.

The link lets the recipient sign up and immediately get a personalized Poke with the context and onboarding flow you define. No automations are included — just the conversational setup.

Examples: "set up Poke for my mom to help with groceries", "create a link for my coworker to manage their inbox"
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * Short name for the recipe (e.g. 'Poke for Mom')
   */
  name: string;
  /**
   * Brief description of what this recipe does
   */
  description: string;
  /**
   * Context and instructions for the recipient's Poke agent. Describe who the recipient is, what they need help with, and how Poke should behave for them. This becomes the agent's background knowledge when talking to the new user.
   */
  context: string;
}


export async function createRecipe(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "create_recipe", params);
}
