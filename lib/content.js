// lib/content.js
// Unified content loader for Guides and Blog.
// - Parses front matter with gray-matter
// - Converts Markdown to safe HTML with remark + remark-html
// - Auto-sanitizes outbound links (nofollow, noopener, noreferrer)
// - Optionally auto-appends Amazon affiliate tag if NEXT_PUBLIC_AMAZON_TAG is set

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const CONTENT_ROOT = process.cwd();

function dirPath(rel) {
  return path.join(CONTENT_ROOT, rel);
}

function listMarkdownFiles(absDir) {
  if (!fs.existsSync(absDir)) return [];
  return fs.readdirSync(absDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
}

function readMarkdownFile(absDir, slug) {
  const tryPaths = [
    path.join(absDir, `${slug}.md`),
    path.join(absDir, `${slug}.mdx`),
    path.join(absDir, slug), // in case slug already includes extension
  ];
  const found = tryPaths.find((p) => fs.existsSync(p));
  if (!found) return null;
  return fs.readFileSync(found, 'utf8');
}

// ---- Link hygiene helpers ----
function addAffiliateAttrsToLinks(htmlStr) {
  // Ensure outbound links are safe and SEO-compliant
  return htmlStr.replace(
    /<a\s+([^>]*?)href="([^"]+)"([^>]*)>/gi,
    (m, pre, href, post) => {
      let tagHref = href;
      const tag = process.env.NEXT_PUBLIC_AMAZON_TAG;
      // Auto-append amazon tag if configured and link looks like Amazon
      if (tag && /amazon\./i.test(href) && !/[?&]tag=/.test(href)) {
        const sep = href.includes('?') ? '&' : '?';
        tagHref = `${href}${sep}tag=${encodeURIComponent(tag)}`;
      }
      // Merge/ensure rel + target attributes
      const hasRel = /\brel=/.test(pre + post);
      const hasTarget = /\btarget=/.test(pre + post);
      const relStr = hasRel ? '' : ' rel="nofollow noopener noreferrer"';
      const tgtStr = hasTarget ? '' : ' target="_blank"';
      return `<a ${pre}href="${tagHref}"${post}${relStr}${tgtStr}>`;
    }
  );
}

async function mdToHtml(markdown) {
  const processed = await remark().use(html, { sanitize: false }).process(markdown);
  // Post-process links in the generated HTML
  return addAffiliateAttrsToLinks(String(processed));
}

// ---- Public API ----
export function getAllDocs({ dir, fields = [] }) {
  const absDir = dirPath(dir);
  const files = listMarkdownFiles(absDir);

  const items = files.map((file) => {
    const slug = file.replace(/\.mdx?$/i, '');
    const raw = fs.readFileSync(path.join(absDir, file), 'utf8');
    const { data, content } = matter(raw);

    const base = { slug };
    fields.forEach((f) => {
      if (f === 'slug') return;
      if (f in data) base[f] = data[f];
    });

    // Build an excerpt if none provided
    if (fields.includes('excerpt') && !base.excerpt) {
      const firstLine = content.split('\n').find((l) => l.trim());
      base.excerpt = firstLine ? firstLine.replace(/^#+\s*/, '').slice(0, 180) : '';
    }

    return base;
  });

  // sort by date desc if present
  items.sort((a, b) => {
    const ad = a.date ? new Date(a.date).getTime() : 0;
    const bd = b.date ? new Date(b.date).getTime() : 0;
    return bd - ad;
  });

  return items;
}

export function getDocBySlug({ dir, slug, fields = [] }) {
  const absDir = dirPath(dir);
  const raw = readMarkdownFile(absDir, slug);
  if (!raw) return null;
  const { data, content } = matter(raw);

  const doc = { slug };
  fields.forEach((f) => {
    if (f in data) doc[f] = data[f];
  });

  // Keep raw content; page can render contentHtml (preferred) or fallback
  doc.content = content;
  return doc;
}

// Convenience: build one doc’s HTML at build-time
export async function getDocWithHtml({ dir, slug, fields = [] }) {
  const base = getDocBySlug({ dir, slug, fields });
  if (!base) return null;
  const contentHtml = await mdToHtml(base.content || '');
  return { ...base, contentHtml };
}

// For Next.js getStaticPaths
export function getAllSlugs({ dir }) {
  const absDir = dirPath(dir);
  return listMarkdownFiles(absDir).map((f) => f.replace(/\.mdx?$/i, ''));
}
