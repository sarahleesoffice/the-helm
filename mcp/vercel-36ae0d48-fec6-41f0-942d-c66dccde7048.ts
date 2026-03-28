/**
 * MCP Integration: Vercel MCP Server
 * Server: https://mcp.vercel.com
 */
import { callFunction, type CallToolResult } from "./call-function.ts";

// --- search_vercel_documentation ---
export interface Input {
  /**
   * Topic to focus the documentation search on (e.g., 'routing', 'data-fetching').
   */
  topic: string;
  /**
   * Maximum number of tokens to include in the result. Default is 2500.
   */
  tokens?: number;
}

/** Search the Vercel documentation.
  
  Use this tool to answer any questions about Vercel’s platform, features, and best practices, including:
  - Core Concepts: Projects, Deployments, Git Integration, Preview Deployments, Environments
  - Frontend & Frameworks: Next.js, SvelteKit, Nuxt, Astro, Remix, frameworks configuration and optimization
  - APIs: REST API, Vercel SDK, Build Output API
  - Compute: Fluid Compute, Functions, Routing Middleware, Cron Jobs, OG Image Generation, Sandbox, Data Cache
  - AI: Vercel AI SDK, AI Gateway, MCP, v0
  - Performance & Delivery: Edge Network, Caching, CDN, Image Optimization, Headers, Redirects, Rewrites
  - Pricing: Plans, Spend Management, Billing
  - Security: Audit Logs, Firewall, Bot Management, BotID, OIDC, RBAC, Secure Compute, 2FA
  - Storage: Blog, Edge Config */
export async function searchVercelDocumentation(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "search_vercel_documentation", params);
}

// --- deploy_to_vercel ---
export interface Input {
  [k: string]: unknown;
}

/** Deploy the current project to Vercel */
export async function deployToVercel(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "deploy_to_vercel", params);
}

// --- list_projects ---
export interface Input {
  /**
   * The team ID to get the deployment events for. Alternatively the team slug can be used.
   * Team IDs start with "team_".
   * If you do not know the team ID or slug, it can be found through these mechanism:
   * - Read the file .vercel/project.json if it exists and extract the orgId
   * - Use the \`list_teams\` tool
   */
  teamId: string;
}

/** List all Vercel projects for a user (with a max of 50). Use this to help discover the Project ID of the project that the user is working on. */
export async function listProjects(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "list_projects", params);
}

// --- get_project ---
export interface Input {
  /**
   * The team ID to get the deployment events for. Alternatively the team slug can be used.
   * Team IDs start with "team_".
   * If you do not know the team ID or slug, it can be found through these mechanism:
   * - Read the file .vercel/project.json if it exists and extract the orgId
   * - Use the \`list_teams\` tool
   */
  teamId: string;
  /**
   * The project ID to get the deployment events for. Alternatively the project slug can be used.
   * Project IDs start with "prj_".
   * If you do not know the project ID or slug, it can be found through these mechanism:
   * - Read the file .vercel/project.json if it exists and extract the projectId
   * - Use the \`list_projects\` tool
   */
  projectId: string;
}

/** Get a specific project in Vercel */
export async function getProject(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "get_project", params);
}

// --- list_deployments ---
export interface Input {
  /**
   * Get deployments created after this timestamp.
   */
  since?: number;
  /**
   * Get deployments created before this timestamp.
   */
  until?: number;
  /**
   * The team ID to list deployments for.
   */
  teamId: string;
  /**
   * The project ID to list deployments for.
   */
  projectId: string;
}

/** List all deployments for a project */
export async function listDeployments(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "list_deployments", params);
}

// --- get_deployment ---
export interface Input {
  /**
   * The team ID to get the deployment events for. Alternatively the team slug can be used.
   * Team IDs start with "team_".
   * If you do not know the team ID or slug, it can be found through these mechanism:
   * - Read the file .vercel/project.json if it exists and extract the orgId
   * - Use the \`list_teams\` tool
   */
  teamId: string;
  /**
   * The unique identifier or hostname of the deployment.
   */
  idOrUrl: string;
}

/** Get a specific deployment by ID or URL. */
export async function getDeployment(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "get_deployment", params);
}

// --- get_deployment_build_logs ---
export interface Input {
  /**
   * Maximum number of log lines to return. Defaults is 100.
   */
  limit?: number;
  /**
   * The team ID to get the deployment events for. Alternatively the team slug can be used.
   * Team IDs start with "team_".
   * If you do not know the team ID or slug, it can be found through these mechanism:
   * - Read the file .vercel/project.json if it exists and extract the orgId
   * - Use the \`list_teams\` tool
   */
  teamId: string;
  /**
   * The unique identifier or hostname of the deployment.
   */
  idOrUrl: string;
}

/** Get the build logs of a deployment by deployment ID or URL. Can be used to investigate why a deployment failed. It can work as an infinite stream of logs or as a JSON endpoint depending on the input parameters. */
export async function getDeploymentBuildLogs(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "get_deployment_build_logs", params);
}

// --- get_runtime_logs ---
export interface Input {
  /**
   * Filter by log level(s). Can specify multiple levels.
   */
  level?: ("error" | "warning" | "info" | "fatal")[];
  /**
   * Maximum number of log entries to return. Defaults to 50, max 1000.
   */
  limit?: number;
  /**
   * Full-text search query to filter logs.
   */
  query?: string;
  /**
   * Start time - ISO format or relative time (e.g., "1h", "30m", "7d"). Defaults to 24 hours ago.
   */
  since?: string;
  /**
   * End time - ISO format or relative time. Defaults to now.
   */
  until?: string;
  /**
   * Filter by source type(s). Can specify multiple sources.
   */
  source?: ("serverless" | "edge-function" | "edge-middleware" | "static")[];
  /**
   * The team ID to get the deployment events for. Alternatively the team slug can be used.
   * Team IDs start with "team_".
   * If you do not know the team ID or slug, it can be found through these mechanism:
   * - Read the file .vercel/project.json if it exists and extract the orgId
   * - Use the \`list_teams\` tool
   */
  teamId: string;
  /**
   * The project ID to get runtime logs for.
   */
  projectId: string;
  /**
   * Filter by specific request ID.
   */
  requestId?: string;
  /**
   * Filter by HTTP status code (e.g., "500", "4xx").
   */
  statusCode?: string;
  /**
   * Filter by environment: "production" or "preview".
   */
  environment?: "production" | "preview";
  /**
   * Filter logs to a specific deployment ID or URL.
   */
  deploymentId?: string;
}

/** Get runtime logs for a project or deployment. Runtime logs show application output (console.log, errors, etc.) from serverless functions and edge functions during execution. Supports filtering by environment, log level, status code, source, time range, and full-text search. Useful for debugging runtime issues, monitoring application behavior, and investigating errors in production. */
export async function getRuntimeLogs(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "get_runtime_logs", params);
}

// --- get_access_to_vercel_url ---
export interface Input {
  /**
   * The full URL of the Vercel deployment (e.g. "https://myapp.vercel.app").
   */
  url: string;
}

/** Creates a temporary shareable link that bypasses authentication for protected Vercel deployments.

  When you encounter a Vercel deployment URL (like https://myapp-abc123.vercel.app), 
  you might receive a 403 (Forbidden) error when trying to access it. 

  This tool generates a special URL with a '_vercel_share' parameter that allows temporary access 
  without requiring login credentials. The shareable URL will expire in 23 hours.
  
  When you use the returned URL, that URL will redirect and set an auth cookie.
  If your fetch implementation does not support cookies, use the 'web_fetch_vercel_url' tool instead. */
export async function getAccessToVercelUrl(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "get_access_to_vercel_url", params);
}

// --- web_fetch_vercel_url ---
export interface Input {
  /**
   * The full URL of the Vercel deployment including the path (e.g. "https://myapp.vercel.app/my-page").
   */
  url: string;
}

/** Fetches a Vercel deployment URL and returns the response.
  This is useful if another web fetch tool returns 401 (Unauthorized) or 403 (Forbidden) for a Vercel URL.
  Supports accessing deployments protected with Vercel Authentication which the user of this MCP server has access to. */
export async function webFetchVercelUrl(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "web_fetch_vercel_url", params);
}

// --- list_teams ---
export interface Input {
  [k: string]: unknown;
}

/** List the user's teams. Use this to help discover the Team ID of the teams that the user is part of. */
export async function listTeams(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "list_teams", params);
}

// --- check_domain_availability_and_price ---
export interface Input {
  /**
   * Array of domain names to check availability for (e.g., ["example.com", "test.org"])
   *
   * @minItems 1
   * @maxItems 10
   */
  names:
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string];
}

/** Check if domain names are available for purchase and get pricing information */
export async function checkDomainAvailabilityAndPrice(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "check_domain_availability_and_price", params);
}

// --- list_toolbar_threads ---
export interface Input {
  /**
   * Filter by page path (e.g. /docs) or glob (e.g. /docs*)
   */
  page?: string;
  /**
   * Maximum number of results to return. Defaults to 20.
   */
  limit?: number;
  /**
   * Filter by branch name
   */
  branch?: string;
  /**
   * Pagination offset
   */
  offset?: number;
  /**
   * Search text in comments
   */
  search?: string;
  /**
   * Filter by status. Defaults to unresolved.
   */
  status?: "resolved" | "unresolved";
  /**
   * The team ID to get the deployment events for. Alternatively the team slug can be used.
   * Team IDs start with "team_".
   * If you do not know the team ID or slug, it can be found through these mechanism:
   * - Read the file .vercel/project.json if it exists and extract the orgId
   * - Use the \`list_teams\` tool
   */
  teamId: string;
  /**
   * Filter by project ID
   */
  projectId?: string;
}

/** List Vercel toolbar comment threads for a team. Returns unresolved threads by default. Use this to see feedback, comments, or discussions on deployments and previews. */
export async function listToolbarThreads(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "list_toolbar_threads", params);
}

// --- get_toolbar_thread ---
export interface Input {
  /**
   * The team ID to get the deployment events for. Alternatively the team slug can be used.
   * Team IDs start with "team_".
   * If you do not know the team ID or slug, it can be found through these mechanism:
   * - Read the file .vercel/project.json if it exists and extract the orgId
   * - Use the \`list_teams\` tool
   */
  teamId: string;
  /**
   * The thread ID to retrieve
   */
  threadId: string;
}

/** Get a specific toolbar thread by ID, including all messages and context. */
export async function getToolbarThread(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "get_toolbar_thread", params);
}

// --- change_toolbar_thread_resolve_status ---
export interface Input {
  /**
   * The team ID to get the deployment events for. Alternatively the team slug can be used.
   * Team IDs start with "team_".
   * If you do not know the team ID or slug, it can be found through these mechanism:
   * - Read the file .vercel/project.json if it exists and extract the orgId
   * - Use the \`list_teams\` tool
   */
  teamId: string;
  /**
   * Set to true to resolve the thread, false to unresolve it
   */
  resolved: boolean;
  /**
   * The thread ID to update
   */
  threadId: string;
}

/** Change the resolve status of a toolbar thread. Can be used to mark a thread as resolved or unresolve a previously resolved thread. */
export async function changeToolbarThreadResolveStatus(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "change_toolbar_thread_resolve_status", params);
}

// --- reply_to_toolbar_thread ---
export interface Input {
  /**
   * The team ID to get the deployment events for. Alternatively the team slug can be used.
   * Team IDs start with "team_".
   * If you do not know the team ID or slug, it can be found through these mechanism:
   * - Read the file .vercel/project.json if it exists and extract the orgId
   * - Use the \`list_teams\` tool
   */
  teamId: string;
  /**
   * The message content in markdown format
   */
  markdown: string;
  /**
   * The thread ID to reply to
   */
  threadId: string;
}

/** Add a reply message to an existing toolbar thread. */
export async function replyToToolbarThread(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "reply_to_toolbar_thread", params);
}

// --- edit_toolbar_message ---
export interface Input {
  /**
   * The team ID to get the deployment events for. Alternatively the team slug can be used.
   * Team IDs start with "team_".
   * If you do not know the team ID or slug, it can be found through these mechanism:
   * - Read the file .vercel/project.json if it exists and extract the orgId
   * - Use the \`list_teams\` tool
   */
  teamId: string;
  /**
   * The updated message content in markdown format
   */
  markdown: string;
  /**
   * The thread ID containing the message
   */
  threadId: string;
  /**
   * The message ID to edit
   */
  messageId: string;
}

/** Edit an existing message in a toolbar thread. */
export async function editToolbarMessage(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "edit_toolbar_message", params);
}

// --- add_toolbar_reaction ---
export interface Input {
  /**
   * The emoji to add as a reaction (e.g. 👍)
   */
  emoji: string;
  /**
   * The team ID to get the deployment events for. Alternatively the team slug can be used.
   * Team IDs start with "team_".
   * If you do not know the team ID or slug, it can be found through these mechanism:
   * - Read the file .vercel/project.json if it exists and extract the orgId
   * - Use the \`list_teams\` tool
   */
  teamId: string;
  /**
   * The thread ID containing the message
   */
  threadId: string;
  /**
   * The message ID to react to
   */
  messageId: string;
}

/** Add an emoji reaction to a message in a toolbar thread. */
export async function addToolbarReaction(params: Input): Promise<CallToolResult> {
  return await callFunction("vercel-36ae0d48-fec6-41f0-942d-c66dccde7048", "add_toolbar_reaction", params);
}