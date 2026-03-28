
/**
 * Create a trigger to perform an action when a certain condition is met.

# Trigger Types

The trigger can be one of five types: email automations, scheduled CRON automations, location based triggers, scheduled one-time automations, or webhook automations.

## Important rules:
- For LOCATION-based reminders, use type "location" with a condition describing when to trigger (e.g., once I'm at home, if I haven't replied to my emails remind me to do so )
- For EMAIL-based automations, use type "email" with a condition describing when to trigger (e.g., "when receiving from john@example.com"). The action may be negative (e.g., "do not notify the user..."), and negative actions typically override positive actions.
- For RECURRING reminders, use type "cron" with the condition being a cron expression (e.g., "30 23 2 9 *" for every September 2nd). IMPORTANT: Use the LOCAL time values directly - DO NOT convert to UTC. The system will automatically interpret the cron expression in the user's timezone.
- For ONE-TIME reminders, use type "datetime" with the condition being a specific date/time (e.g., "2024-09-03T23:30:00Z") with offset.

Be detailed in the trigger action. Make sure to distinguish between normal texting reminders (say "text") and email reminders (explicitly say to "email", "forward", "reply", etc).

# Examples by Type

## 1. Email Automations

Email automations trigger when specific email conditions are met. For example, if the user wants to be notified when they receive an email from a certain person, say john.doe@example.com, you can create a trigger with

{
type: "email",
condition: "when receiving from john@example.com",
action: "notify the user about this email",
repeating: true
}

You can also take actions on triggers. For example, if the user wants to forward all invoices, receipts, or bills to receipts@ramp.com, you can create a trigger with:

{
type: "email",
condition: "when receiving an invoice, receipt, or bill",
action: "forward to receipts@ramp.com",
repeating: true
}

You can also create multiple triggers for the same message. For example, if the user wants to be notified about only important food delivery emails during the hours of 8:00 AM and 5:00 PM, but also emails from their boss outside of work hours, then you can create two triggers (by calling this tool twice):

Food delivery during work hours:
{
type: "email",
condition: "when receiving a food delivery email and time is between 8:00 AM and 5:00 PM and the day is a weekday",
action: "notify the user about this email",
repeating: true
}

Boss emails outside work hours:
{
type: "email",
condition: "when receiving an email from boss@example.com AND it is outside the hours of 8:00 AM and 5:00 PM. DO NOT notify the user about emails from their boss during 8:00 AM and 5:00 PM",
action: "notify the user about this email",
repeating: true
}

You can also take more complex actions. Suppose the user anticipates a one-time email from John Doe about quarterly goals, and wants you to reply back to him with a summary from corporate. You can create a trigger for this:

{
type: "email",
condition: "when receiving an email from john.doe@example.com about quarterly goals",
action: "find the email from corporate, summarize it, and reply back to him",
repeating: false
}

## 2. Location based reminders

Location reminders trigger when a user enters or leaves a location (Home, Work, Gym..).

**IMPORTANT: Before creating a location trigger, you MUST first call list_saved_locations to get the user's saved locations and their IDs. Then pass the locationId when creating the trigger.**

Use triggerEvent to specify whether the trigger fires on "enter" (default) or "leave".

For example, if a user wants to be reminded to take out the trash whenever they get back home on sundays:
1. First call list_saved_locations to get their locations
2. Find "Home" in the list and note its ID (e.g., "abc-123")
3. Create the trigger with that locationId:

{
type: "location",
locationId: "abc-123",
triggerEvent: "enter",
condition: "When user returns home on a Sunday",
action: "remind them to take out the trash",
repeating: true
}

For triggers that fire when leaving a location, for example reminding the user to grab their keys when leaving home:

{
type: "location",
locationId: "abc-123",
triggerEvent: "leave",
condition: "When user leaves home",
action: "remind them to grab their keys",
repeating: true
}

If the user mentions a location that doesn't exist in their saved locations, tell them they need to tell you that location first before creating a location-based trigger.

## 3. Scheduled Automations (CRON)

Scheduled automations run at recurring intervals using cron expressions. For example, when a user asks to be reminded to drink water every hour, you can create a trigger with

{
type: "cron",
condition: "0 * * * *",
action: "remind John to drink water through text",
repeating: true
}

CRITICAL: When converting a specific time to a cron expression, use the LOCAL time directly. For example:

- If user in EDT says "remind me every day at 9:00 AM", use condition "0 9 * * *" (NOT "0 13 * * *")
- If user in PDT says "remind me weekdays at 6:30 PM", use condition "30 18 * * 1-5" (NOT "30 1 * * 1-5")

The system automatically interprets these times in the user's timezone. DO NOT add UTC offset to the hour value.

You can also use triggers to create more triggers for dynamic times. Suppose the user asks to be be sent a summary of their calendar every day at sunrise. First, you should figure out what the next times for sunrise and sunset are at the user's location. Then, assuming the next sunrise is at 6:30 AM, you can create a trigger that can create more triggers:

{
type: "cron",
condition: "0 0 * * *",
action: "create a one-time trigger to text the user a summary of their calendar at sunrise. create a trigger for ONLY the next sunrise.",
repeating: true
}

Then, each time the trigger fires, it should create a new trigger for the next sunrise.

Of course, if the time is between midnight and sunrise, then you should immediately create a trigger for the next sunrise as well.

## 4. Scheduled Automations (One-Time)

One-time scheduled automations run at a specific date and time.

For one-time reminders, you can create a datetime trigger. For example, if the user wants to be reminded to get their allergy shots next Tuesday at 2:00 PM and they're in PDT,

{
type: "datetime",
condition: "2024-01-16T21:00:00Z",
action: "remind the user to get their allergy shots at the doctor's office",
repeating: false
}

NOTE: Unlike cron triggers, datetime conditions MUST be in ISO 8601 format with timezone offset (like "2024-01-16T14:00:00-07:00" for 2PM PDT) or UTC (like "2024-01-16T21:00:00Z" for 2PM PDT = 9PM UTC).

If you see a message <poke sentAt={"June 1, 2025, 05:00 PM EDT"}>Set a reminder in 30 minutes to remind the user to email their boss</poke>,

{
type: "datetime",
condition: "2025-06-01T21:30:00Z",
action: "Remind the user to email their boss",
repeating: false
}

## 5. Webhook Automations

Webhook automations fire when an external service sends data to a unique URL.
The condition describes what the webhook is for (context for when it fires).
The action describes what to do with the incoming data.

{
type: "webhook",
condition: "Shopify order notifications",
action: "notify the user about the new order details",
repeating: true
}

After creating a webhook trigger, you will receive a unique webhook URL and token. Share these with the user so they can configure their external service to POST data to the webhook URL with the token in the Authorization header.

# Best Practices

- Make actions detailed and specific
- **IMPORTANT: When actions involve sending emails, forwarding, replying, or creating calendar invites to specific people, ALWAYS include their email addresses explicitly in the action field** (e.g., "forward to receipts@ramp.com" instead of just "forward to Ramp")
- Use appropriate trigger types for the use case
- Set repeating: true for recurring automations (email triggers, CRON schedules), false for one-time
- Ensure datetime conditions use ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) with offset suffix.
- You will have access to all the tools while executing the action
- IMPORTANT: Create ONE trigger per distinct task. If the user mentions multiple different tasks (e.g., "remind me to call mom AND forward receipts to Ramp"), create separate triggers for each task. Only create multiple triggers when there are genuinely different tasks, not duplicates of the same task.
 *
 * @returns CallToolResult with content array — use result.content[0].text for the text response, then JSON.parse() if it contains JSON.
 */

import { callFunction, type CallToolResult } from "../call-function.ts";

export interface Input {
  type: "email" | "cron" | "datetime" | "location" | "webhook";
  condition: string;
  /**
   * A thorough detail of what to do when this trigger is activated. IMPORTANT: When sending emails, forwarding, replying, or creating calendar invites to specific people, you MUST include their email addresses in this field (e.g., 'forward to receipts@ramp.com', 'reply to sender@example.com', 'send calendar invite to john@example.com').
   */
  action: string;
  /**
   * defaults to false, set to true for repeating automations
   */
  repeating?: boolean;
  /**
   * Required for location triggers. The ID of the saved location from list_saved_locations.
   */
  locationId?: string;
  /**
   * For location triggers: fire when user enters or leaves the location. Defaults to 'enter'.
   */
  triggerEvent?: "enter" | "leave";
}


export async function createTrigger(params: Input): Promise<CallToolResult> {
  return await callFunction("poke", "create_trigger", params);
}
