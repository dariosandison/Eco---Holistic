// lib/content.js
// Minimal content indexer used by /api/search and listing pages.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { jsonSafeMeta } from "./mdx.js";

const ROOT = process.cwd();

const CANDIDATE_DIRS = [
  "content",
  "content/guides",
  "content/blog",
  "content/deals",
  "guides",
  "blog",
  "deals",
  "legal",
];

const EXTENSIONS = new Set([".md", ".mdx"]);

/**
 * Recursively gather files with .md/mdx from an existing directory.
 */
function gatherFilesIfExists(absDir) {
  const results = [];
  if (!fs.existsSync(absDir)) return results;

  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(absDir, e.name);
    if (e.isDirectory()) {
      results.push(...gatherFilesIfExists(full));
    } else {
      const ext = path.extname(e.name).toLowerCase();
      if (EXTENSIONS.has(ext)) results.push(full);
    }
  }
  return results;
}

/**
 * Find all MD/MDX files under our candidate content folders.
 */
function findAllContentFiles() {
  const all = [];
  for (const rel of CANDIDATE_DIRS) {
    const abs = path.join(ROOT, rel);
    all.push(...gatherFilesIfExists(abs));
  }
  // de-duplicate (in case folders overlap)
  return Array.from(new Set(all));
}

/**
 * Convert absolute filepath to a reasonable slug:
 *  - relative to repo root
 *  - drop extension
 *  - forward slashes only
 *  - trim top-level content folder for clean routes
 */
function fileToSlug(absFile) {
  const relFromRoot = path.relative(ROOT, absFile);
  const rel = relFromRoot.replace(/\\/g, "/"); // windows-safe
  const withoutExt = rel.replace(/\.(md|mdx)$/i, "");

  const cleaned = withoutExt
    .replace(/^content\//, "")
    .replace(/^guides\//, "guides/")
    .replace(/^blog\//, "blog/")
    .replace(/^deals\//, "deals/")
    .replace(/^legal\//, "legal/");

  return cleaned;
}

/**
 * Read and parse a single MD/MDX file into { slug, section, meta, content }
 */
function readDoc(absFile) {
  const raw = fs.readFileSync(absFile, "utf8");
  const { data, content } = matter(raw);

  const slug = fileToSlug(absFile);
  const section = slug.split("/")[0] || "content";

  const meta = jsonSafeMeta(data);

  // Normalize/ensure date for sorting and Next serialization
  if (meta.date instanceof Date) {
    meta.date = meta.date.toISOString();
  }
  if (!meta.date) {
    try {
      const stat = fs.statSync(absFile);
      meta.date = new Date(stat.mtimeMs).toISOString();
    } catch {
      /* noop */
    }
  }

  if (!meta.title) {
    const base = path.basename(slug);
    meta.title = base.split("/").pop().replace(/[-_]/g, " ");
  }

  return { slug, section, meta, content };
}

/**
 * Public: get all docs, with optional { section, query } filter.
 */
export function getAllDocs(filter = {}) {
  const files = findAllContentFiles();
  let docs = files.map(readDoc);

  // filter by section
  if (filter.section) {
    const sections = Array.isArray(filter.section)
      ? filter.section
      : [filter.section];
    docs = docs.filter((d) => sections.includes(d.section));
  }

  // very light search filter
  if (filter.query) {
    const q = filter.query.toLowerCase();
    docs = docs.filter((d) => {
      const hay =
        `${d.slug} ${d.section} ${d.meta.title || ""} ${d.meta.description || ""} ${
          Array.isArray(d.meta.tags) ? d.meta.tags.join(" ") : ""
        }`.toLowerCase();
      return hay.includes(q);
    });
  }

  // newest first
  docs.sort((a, b) => {
    const da = Date.parse(a.meta.date || 0) || 0;
    const db = Date.parse(b.meta.date || 0) || 0;
    return db - da;
  });

  return docs;
}

/**
 * Convenience wrappers expected by pages:
 */
export function getAllBlog() {
  return getAllDocs({ section: "blog" });
}

export function getAllGuides() {
  return getAllDocs({ section: "guides" });
}

export function getAllDeals() {
  return getAllDocs({ section: "deals" });
}

export function getAllLegal() {
  return getAllDocs({ section: "legal" });
}
