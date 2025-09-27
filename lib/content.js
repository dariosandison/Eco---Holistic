// lib/content.js
// Unified content loader for Guides and Blog.
// - Parses front matter with gray-matter
// - Converts Markdown to HTML with remark + remark-html
// - Hardens outbound links (nofollow, noopener, noreferrer)
// - Auto-appends Amazon ?tag= if NEXT_PUBLIC_AMAZON_TAG is set

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const ROOT = process.cwd();

function abs(rel) {
  return path.join(ROOT, rel);
}

function listMd(absDir) {
  if (!fs.existsSync(absDir)) return [];
  return fs.readdirSync(absDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
}

function readMd(absDir, slug) {
  const cand = [
    path.join(absDir, `${slug}.md`),
    path.join(absDir, `${slug}.mdx`),
    path.join(absDir, slug),
  ];
  const found = cand.find((p) => fs.existsSync(p));
  return found ? fs.readFileSync(found, 'utf8') : null;
}

// ---- Link hygiene ----
function hardenLinks(htmlStr) {
  return htmlStr.replace(
    /<a\s+([^>]*?)href="([^"]+)"([^>]*)>/gi,
    (m, pre, href, post) => {
      let newHref = href;
      const tag = process.env.NEXT_PUBLIC_AMAZON_TAG;
      if (tag && /amazon\./i.test(href) && !/[?&]tag=/.test(href)) {
        const sep = href.includes('?') ? '&' : '?';
        newHref = `${href}${sep}tag=${encodeURIComponent(tag)}`;
      }
      const hasRel = /\brel=/.test(pre + post);
      const hasTarget = /\btarget=/.test(pre + post);
      const relStr = hasRel ? '' : ' rel="nofollow noopener noreferrer"';
      const tgtStr = hasTarget ? '' : ' target="_blank"';
      return `<a ${pre}href="${newHref}"${post}${relStr}${tgtStr}>`;
    }
  );
}

async function
