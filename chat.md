# Chat History

The user's complete chat history is stored in `~/chat.jsonl` as newline-delimited JSON.

## Format

Each line: `{"role": "user" | "assistant", "text": "...", "sentAt": "ISO-8601"}`

## Reading with jq

```bash
# All messages
cat chat.jsonl | jq .

# Last 10 messages
tail -10 chat.jsonl | jq .

# Only user messages
cat chat.jsonl | jq 'select(.role == "user")'
```
