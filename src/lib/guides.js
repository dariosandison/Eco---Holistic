// /src/lib/guides.js
// Pure Node utils used at build time (getStaticProps / getStaticPaths)

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const GUIDES_DIR = path.join(process.cwd(), 'content', 'guides');

// Very small local slugifier (no external dep needed)
function slugifyLocal(str = '') {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/['"’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function safeDateString(input) {
  if (!input) return null;
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return null;
  // Return ISO date (string) for JSON-serializable props
  return d.toISOString();
}

function readGuideFiles() {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  const files = fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

  return files.map((filename) => {
    const fullPath = path.join(GUIDES_DIR, filename);
    const raw = fs.readFileSync(fullPath, 'utf8');
    const fm = matter(raw);

    // slug from frontmatter or filename
    const base = filename.replace(/\.mdx?$/i, '');
    const slug = fm.data?.slug ? slugifyLocal(fm.data.slug) : slugifyLocal(base);

    // fields (make sure everything is JSON-serializable)
    const meta = {
      slug,
      title: fm.data?.title || base,
      description: fm.data?.description || fm.data?.excerpt || '',
      date: safeDateString(fm.data?.date || fm.data?.published || fm.data?.created) || null,
      tags: Array.isArray(fm.data?.tags) ? fm.data.tags.map(String) : [],
      cover: fm.data?.cover || fm.data?.image || null,
      // keep any other small string fields if present
    };

    return {
      filename,
      slug,
      meta,
      content: fm.content || '',
    };
  });
}

// ---------- Public API (what pages import) ----------

// Used by the homepage and /guides index
export function getAllGuidesMeta(limit) {
  const items = readGuideFiles()
    .map((g) => g.meta)
    .sort((a, b) => {
      const ta = a.date ? Date.parse(a.date) : 0;
      const tb = b.date ? Date.parse(b.date) : 0;
      return tb - ta; // newest first
    });

  return typeof limit === 'number' ? items.slice(0, limit) : items;
}

// Used by [slug] page (content + meta)
export function getGuideBySlug(slug) {
  const list = readGuideFiles();
  // try exact slug match first
  let found = list.find((g) => g.slug === slug);

  // also try filename base match as fallback
  if (!found) {
    found = list.find((g) => g.filename.replace(/\.mdx?$/i, '') === slug);
  }

  if (!found) {
    return null;
  }

  // meta already JSON-serializable (date is string)
  return {
    meta: found.meta,
    content: found.content,
  };
}

// Used by getStaticPaths
export function getAllGuideSlugs() {
  return readGuideFiles().map((g) => g.slug);
}
