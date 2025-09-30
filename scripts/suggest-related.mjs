// scripts/suggest-related.mjs
// Build a minimal related-posts map by scanning MD/MDX in /content.
// Output: /data/internal-links.json (consumed by components/RelatedPosts.js)
//
// Scoring: shared tags (front matter) + title keyword overlap.
// No external deps.

import fs from 'node:fs/promises';
import fss from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT_DIRS = ['content/guides', 'content/reviews'];
const OUT_PATH = path.join(ROOT, 'data', 'internal-links.json');

function* walk(dir) {
  if (!fss.existsSync(dir)) return;
  const entries = fss.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (/\.(md|mdx)$/i.test(e.name)) yield p;
  }
}

function basicFrontMatter(txt) {
  // Extremely small YAML-ish parser for common cases
  const fm = { tags: [] };
  const m = txt.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return fm;
  const lines = m[1].split(/\r?\n/);
  let currentKey = null;
  for (const line of lines) {
    const kv = line.match(/^([a-zA-Z0-9_-]+)\s*:\s*(.*)$/);
    if (kv) {
      currentKey = kv[1].trim();
      const val = kv[2].trim();
      if (val === '' && currentKey === 'tags') {
        fm.tags = [];
      } else if (/^\[.*\]$/.test(val)) {
        fm[currentKey] = val
          .slice(1, -1)
          .split(',')
          .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
          .filter(Boolean);
      } else {
        fm[currentKey] = val.replace(/^['"]|['"]$/g, '');
      }
      continue;
    }
    const li = line.match(/^\s*-\s*(.+)$/);
    if (li && currentKey === 'tags') {
      fm.tags.push(li[1].trim().replace(/^['"]|['"]$/g, ''));
    }
  }
  return fm;
}

function extractTitle(txt) {
  // Prefer H1 after front matter
  const body = txt.replace(/^---[\s\S]*?---\s*/, '');
  const h1 = body.match(/^\s*#\s+(.+)$/m);
  return (h1 && h1[1].trim()) || null;
}

function tokenize(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w && w.length > 2 && !STOP.has(w));
}

const STOP = new Set(
  'the a an for and but are with from into onto over under above your you our their more most best guide tips how why what where when which can should could would very really just much many any all each per vs than good bad better worse new top list review'.split(
    ' '
  )
);

function jaccard(a, b) {
  const A = new Set(a);
  const B = new Set(b);
  const inter = [...A].filter((x) => B.has(x)).length;
  const uni = new Set([...A, ...B]).size || 1;
  return inter / uni;
}

function score(a, b) {
  // Weighted combo of tag overlap + title tokens overlap
  const tagScore = jaccard(a.tags || [], b.tags || []);
  const titleScore = jaccard(tokenize(a.title), tokenize(b.title));
  return tagScore * 0.7 + titleScore * 0.3;
}

function toSlug(p) {
  const base = path.basename(p).replace(/\.(md|mdx)$/i, '');
  return base;
}

async function main() {
  const docs = [];
  for (const dir of CONTENT_DIRS) {
    for (const file of walk(path.join(ROOT, dir))) {
      const txt = await fs.readFile(file, 'utf8');
      const fm = basicFrontMatter(txt);
      const title = fm.title || extractTitle(txt) || toSlug(file);
      const slug = fm.slug || toSlug(file);
      const href =
        dir.includes('reviews') ? `/reviews/${slug}` : `/guides/${slug}`;
      docs.push({ file, dir, slug, href, title, tags: fm.tags || [] });
    }
  }

  // Build related map
  const related = {};
  for (const d of docs) {
    const candidates = docs
      .filter((x) => x.slug !== d.slug)
      .map((x) => ({ ...x, _score: score(d, x) }))
      .sort((a, b) => b._score - a._score)
      .slice(0, 6)
      .filter((x) => x._score > 0);

    related[d.slug] = candidates.map((c) => ({
      slug: c.slug,
      href: c.href,
      title: c.title,
      score: Number(c._score.toFixed(4)),
    }));
  }

  // Ensure /data exists
  await fs.mkdir(path.dirname(OUT_PATH), { recursive: true });
  await fs.writeFile(OUT_PATH, JSON.stringify(related, null, 2), 'utf8');
  console.log(`✅ Wrote ${path.relative(ROOT, OUT_PATH)} with ${docs.length} entries.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
