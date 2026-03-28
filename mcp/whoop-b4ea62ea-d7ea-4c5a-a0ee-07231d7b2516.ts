/**
 * MCP Integration: whoop-mcp-server
 * Server: https://whoop-mcp-server-claude-x49e.vercel.app/mcp
 */
import { callFunction, type CallToolResult } from "./call-function.ts";

// --- whoop-get-user-profile ---
export interface Input {
  [k: string]: unknown;
}

/** Get basic user profile information (name, email) */
export async function whoopGetUserProfile(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-get-user-profile", params);
}

// --- whoop-get-user-body-measurements ---
export interface Input {
  [k: string]: unknown;
}

/** Get body measurements (height, weight, max heart rate) */
export async function whoopGetUserBodyMeasurements(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-get-user-body-measurements", params);
}

// --- whoop-get-cycle-collection ---
export interface Input {
  end?: string;
  limit?: number;
  start?: string;
  nextToken?: string;
  [k: string]: unknown;
}

/** Get all physiological cycles for a user, paginated */
export async function whoopGetCycleCollection(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-get-cycle-collection", params);
}

// --- whoop-get-cycle-by-id ---
export interface Input {
  cycleId: number;
  [k: string]: unknown;
}

/** Get a cycle by ID */
export async function whoopGetCycleById(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-get-cycle-by-id", params);
}

// --- whoop-get-sleep-for-cycle ---
export interface Input {
  cycleId: number;
  [k: string]: unknown;
}

/** Get sleep data for a specific cycle */
export async function whoopGetSleepForCycle(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-get-sleep-for-cycle", params);
}

// --- whoop-get-recovery-collection ---
export interface Input {
  end?: string;
  limit?: number;
  start?: string;
  nextToken?: string;
  [k: string]: unknown;
}

/** Get all recovery data for a user, paginated */
export async function whoopGetRecoveryCollection(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-get-recovery-collection", params);
}

// --- whoop-get-recovery-for-cycle ---
export interface Input {
  cycleId: number;
  [k: string]: unknown;
}

/** Get recovery data for a specific cycle */
export async function whoopGetRecoveryForCycle(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-get-recovery-for-cycle", params);
}

// --- whoop-get-sleep-collection ---
export interface Input {
  end?: string;
  limit?: number;
  start?: string;
  nextToken?: string;
  [k: string]: unknown;
}

/** Get all sleep records for a user, paginated */
export async function whoopGetSleepCollection(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-get-sleep-collection", params);
}

// --- whoop-get-sleep-by-id ---
export interface Input {
  sleepId: string;
  [k: string]: unknown;
}

/** Get a sleep record by ID */
export async function whoopGetSleepById(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-get-sleep-by-id", params);
}

// --- whoop-get-workout-collection ---
export interface Input {
  end?: string;
  limit?: number;
  start?: string;
  nextToken?: string;
  [k: string]: unknown;
}

/** Get all workout records for a user, paginated */
export async function whoopGetWorkoutCollection(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-get-workout-collection", params);
}

// --- whoop-get-workout-by-id ---
export interface Input {
  workoutId: string;
  [k: string]: unknown;
}

/** Get a workout record by ID */
export async function whoopGetWorkoutById(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-get-workout-by-id", params);
}

// --- whoop-get-authorization-url ---
export interface Input {
  [k: string]: unknown;
}

/** Get the OAuth authorization URL */
export async function whoopGetAuthorizationUrl(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-get-authorization-url", params);
}

// --- whoop-exchange-code-for-token ---
export interface Input {
  code: string;
  [k: string]: unknown;
}

/** Exchange authorization code for access token */
export async function whoopExchangeCodeForToken(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-exchange-code-for-token", params);
}

// --- whoop-refresh-token ---
export interface Input {
  refreshToken: string;
  [k: string]: unknown;
}

/** Refresh access token using refresh token */
export async function whoopRefreshToken(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-refresh-token", params);
}

// --- whoop-set-access-token ---
export interface Input {
  accessToken: string;
  [k: string]: unknown;
}

/** Set the access token for API calls */
export async function whoopSetAccessToken(params: Input): Promise<CallToolResult> {
  return await callFunction("whoop-b4ea62ea-d7ea-4c5a-a0ee-07231d7b2516", "whoop-set-access-token", params);
}