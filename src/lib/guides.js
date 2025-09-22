// /src/lib/guides.js
// Build-time utilities for guides (used by getStaticProps / getStaticPaths)

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const GUIDES_DIR = path.join(process.cwd(), 'content', 'guides');

// Small local slugifier (no external dependency)
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
  return d.toISOString(); // JSON-serializable
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

    const base = filename.replace(/\.mdx?$/i, '');
    const slug = fm.data?.slug ? slugifyLocal(fm.data.slug) : slugifyLocal(base);

    const meta = {
      slug,
      title: fm.data?.title || base,
      description: fm.data?.description || fm.data?.excerpt || '',
      date: safeDateString(fm.data?.date || fm.data?.published || fm.data?.created) || null,
      tags: Array.isArray(fm.data?.tags) ? fm.data.tags.map(String) : [],
      cover: fm.data?.cover || fm.data?.image || null,
    };

    return {
      filename,
      slug,
      meta,
      content: fm.content || '',
    };
  });
}

// ---------- Public API ----------

// HOMEPAGE & LIST PAGES (meta only)
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

// Alias that many pages import (shape flattened with slug at top-level)
export function getAllGuides(limit) {
  const items = readGuideFiles()
    .map((g) => ({
      slug: g.slug,
      title: g.meta.title,
      description: g.meta.description,
      date: g.meta.date,
      tags: g.meta.tags,
      cover: g.meta.cover,
    }))
    .sort((a, b) => {
      const ta = a.date ? Date.parse(a.date) : 0;
      const tb = b.date ? Date.parse(b.date) : 0;
      return tb - ta;
    });

  return typeof limit === 'number' ? items.slice(0, limit) : items;
}

// SINGLE GUIDE
export function getGuideBySlug(slug) {
  const list = readGuideFiles();
  let found = list.find((g) => g.slug === slug);
  if (!found) {
    found = list.find((g) => g.filename.replace(/\.mdx?$/i, '') === slug);
  }
  if (!found) return null;

  return {
    meta: found.meta, // date is a string (JSON-safe)
    content: found.content,
  };
}

// STATIC PATHS
export function getAllGuideSlugs() {
  return readGuideFiles().map((g) => g.slug);
}
