
/**
 * Query the live_data ClickHouse table using raw SQL. This table stores arbitrary JSON payloads ingested from external sources (location updates, HealthKit data, IoT sensors, etc.).

The query runs against a CTE that pre-filters to the current user's data. You do NOT need to filter by user — it is automatic. Available columns in your query:

- ingestEndpointId (String) — identifies the data source/endpoint
- payload (String) — JSON blob with the ingested data
- eventTime (DateTime64) — when the event occurred
- ingestedAt (DateTime64) — when the row was ingested

The payload column is a JSON string. Use ClickHouse JSON functions to extract fields:
- JSONExtractString(payload, 'key') → String
- JSONExtractFloat(payload, 'key') → Float64
- JSONExtractInt(payload, 'key') → Int64
- JSONExtractBool(payload, 'key') → UInt8
- JSONExtract(payload, 'key', 'type') → typed value
- JSONExtractArrayRaw(payload, 'key') → Array(String) of raw JSON elements

Max 1000 rows returned. Max 30s execution time. Read-only — no DDL/DML.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  /**
   * ClickHouse SQL query against the live_data table
   */
  sql: string;
}


export async function queryLiveData(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "query_live_data", params);
}
