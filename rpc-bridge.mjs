#!/usr/bin/env node
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const PORT = 7123;
const POLL_INTERVAL_MS = 50;
const TIMEOUT_MS = 120000;
const DEBOUNCE_MS = 500;
const WORKSPACE = '/vercel/sandbox/workspace';

// --- Ignored path patterns (never persisted) ---
const IGNORED_PATTERNS = [
  /node_modules\//,
  /__pycache__\//,
  /\.pip\//,
  /venv\//,
  /\.venv\//,
  /\.cache\//,
  /\.npm\//,
  /\.bun\//,
  /package-lock\.json$/,
  /bun\.lockb$/,
  /yarn\.lock$/,
  /\.blobs\//,
];

// System paths (read-only, not watched)
const SYSTEM_PATHS = new Set(["poke","rpc-bridge.mjs","blobs.json","chat.jsonl"]);

function isIgnored(relPath) {
  if (!relPath) return true;
  return IGNORED_PATTERNS.some(p => p.test(relPath));
}

function isSystem(relPath) {
  const top = relPath.split('/')[0];
  return SYSTEM_PATHS.has(top) || SYSTEM_PATHS.has(relPath);
}

// --- RPC Server (unchanged behavior) ---
const server = http.createServer((req, res) => {
  if (req.method !== 'POST' || req.url !== '/rpc') {
    res.writeHead(404);
    res.end();
    return;
  }

  let body = '';
  req.on('data', (chunk) => { body += chunk; });
  req.on('end', () => {
    let parsed;
    try {
      parsed = JSON.parse(body);
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ jsonrpc: '2.0', error: { code: -32700, message: 'Parse error' }, id: null }));
      return;
    }

    const id = parsed.id || crypto.randomUUID();
    const responseFile = '/tmp/rpc-response-' + id;

    process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id, method: parsed.method, params: parsed.params }) + '\n');

    const startTime = Date.now();
    const poll = setInterval(() => {
      try {
        const data = fs.readFileSync(responseFile, 'utf-8');
        clearInterval(poll);
        try { fs.unlinkSync(responseFile); } catch {}
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      } catch {
        if (Date.now() - startTime > TIMEOUT_MS) {
          clearInterval(poll);
          res.writeHead(504, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ jsonrpc: '2.0', error: { code: -32000, message: 'Timeout waiting for response' }, id }));
        }
      }
    }, POLL_INTERVAL_MS);
  });
});

// --- File Watcher ---
const debounceTimers = new Map();

function emitFileEvent(event, relPath) {
  process.stdout.write(JSON.stringify({
    jsonrpc: '2.0',
    method: 'file.changed',
    params: { event, path: relPath }
  }) + '\n');
}

function watchDir(dirPath) {
  try {
    fs.watch(dirPath, { recursive: true }, (eventType, filename) => {
      if (!filename) return;
      const relPath = path.relative(WORKSPACE, path.join(dirPath, filename));

      if (isIgnored(relPath) || isSystem(relPath)) return;

      const key = relPath;
      if (debounceTimers.has(key)) {
        clearTimeout(debounceTimers.get(key));
      }
      debounceTimers.set(key, setTimeout(() => {
        debounceTimers.delete(key);
        const fullPath = path.join(WORKSPACE, relPath);
        try {
          fs.statSync(fullPath);
          emitFileEvent('modify', relPath);
        } catch {
          emitFileEvent('delete', relPath);
        }
      }, DEBOUNCE_MS));
    });
  } catch {
    // Directory may not exist yet
  }
}

// Watch writable directories
for (const dir of ['user', 'agent', 'memory']) {
  const fullDir = path.join(WORKSPACE, dir);
  fs.mkdirSync(fullDir, { recursive: true });
  watchDir(fullDir);
}

// Watch for new top-level directories (LLM-created)
fs.watch(WORKSPACE, (eventType, filename) => {
  if (!filename || isSystem(filename) || isIgnored(filename)) return;
  const fullPath = path.join(WORKSPACE, filename);
  try {
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      watchDir(fullPath);
    }
  } catch {}
});

server.listen(PORT, '127.0.0.1', () => {
  process.stdout.write(JSON.stringify({ jsonrpc: '2.0', method: 'bridge.ready' }) + '\n');
});
