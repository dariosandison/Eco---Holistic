// scripts/check-affiliates.mjs
// Health-check external/affiliate links (HEAD/GET) with concurrency.
import fs from 'node:fs/promises';
import path from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

const ROOT = process.cwd();
const SCAN_DIRS = ['content', 'pages', 'components'];
const CONCURRENCY = 8;
const TIMEOUT_MS = 10000;

function* walkSync(dir) {
  const entries = require('fs').readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const res = path.resolve(dir, e.name);
    if (e.isDirectory()) yield* walkSync(res);
    else yield res;
  }
}

function looksExternal(url) {
  return /^https?:\/\//i.test(url);
}

function extractLinks(text) {
  const results = new Set();

  // Markdown [text](url)
  const md = /\[[^\]]*?\]\((https?:\/\/[^)]+)\)/gi;
  for (const m of text.matchAll(md)) results.add(m[1]);

  // HTML href=""
  const href = /href=["'](https?:\/\/[^"']+)["']/gi;
  for (const m of text.matchAll(href)) results.add(m[1]);

  // Raw URLs
  const raw = /(https?:\/\/[^\s)>'"]+)/gi;
  for (const m of text.matchAll(raw)) results.add(m[1]);

  return Array.from(results);
}

async function head(url, { timeout = TIMEOUT_MS } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    // Prefer HEAD, fallback to GET if not allowed
    let res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: ctrl.signal });
    if (res.status === 405 || res.status === 403) {
      res = await fetch(url, { method: 'GET', redirect: 'follow', signal: ctrl.signal });
    }
    return { ok: res.ok, status: res.status };
  } catch (e) {
    return { ok: false, status: 0, error: String(e) };
  } finally {
    clearTimeout(t);
  }
}

async function main() {
  const files = [];
  for (const base of SCAN_DIRS) {
    const abs = path.join(ROOT, base);
    try {
      for (const f of walkSync(abs)) {
        if (/\.(md|mdx|js|jsx|ts|tsx|html|mjs)$/i.test(f)) files.push(f);
      }
    } catch {
      // ignore missing dirs
    }
  }

  const linksByFile = new Map();
  for (const f of files) {
    const txt = await fs.readFile(f, 'utf8').catch(() => '');
    const links = extractLinks(txt).filter(looksExternal);
    if (links.length) linksByFile.set(f, links);
  }

  const allLinks = [...new Set([...linksByFile.values()].flat())];

  console.log(`Scanning ${allLinks.length} unique external links…`);

  const queue = allLinks.slice();
  const results = [];
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const url = queue.shift();
      const res = await head(url);
      results.push({ url, ...res });
      // be gentle
      await delay(50);
    }
  });
  await Promise.all(workers);

  const bad = results.filter((r) => !r.ok || r.status >= 400 || r.status === 0);
  if (bad.length) {
    console.log('\n❌ Broken / suspicious links:');
    for (const r of bad) {
      console.log(`- [${r.status}] ${r.url}${r.error ? ` (${r.error})` : ''}`);
    }
  } else {
    console.log('\n✅ All external links look OK.');
  }

  // Exit non-zero if failures found (useful for CI)
  process.exit(bad.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
