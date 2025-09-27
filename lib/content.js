// lib/content.js
// Server-only content utilities (Node 'fs' allowed here).
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const CONTENT_ROOT = process.cwd();

function absDir(rel) { return path.join(CONTENT_ROOT, rel); }
function listMd(abs) {
  if (!fs.existsSync(abs)) return [];
  return fs.readdirSync(abs).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
}
function readMd(abs, slug) {
  const tries = [ `${slug}.md`, `${slug}.mdx`, slug ];
  const found = tries.map(f => path.join(abs, f)).find(p => fs.existsSync(p));
  return found ? fs.readFileSync(found, 'utf8') : null;
}

function fixLinks(htmlStr) {
  return htmlStr.replace(/<a\s+([^>]*?)href="([^"]+)"([^>]*)>/gi, (m, pre, href, post) => {
    let out = href;
    const tag = process.env.NEXT_PUBLIC_AMAZON_TAG;
    if (tag && /amazon\./i.test(href) && !/[?&]tag=/.test(href)) {
      out = `${href}${href.includes('?') ? '&' : '?'}tag=${encodeURIComponent(tag)}`;
    }
    const hasRel = /\brel=/.test(pre + post);
    const hasTgt = /\btarget=/.test(pre + post);
    const rel = hasRel ? '' : ' rel="nofollow noopener noreferrer"';
    const tgt = hasTgt ? '' : ' target="_blank"';
    return `<a ${pre}href="${out}"${post}${rel}${tgt}>`;
  });
}

async function mdToHtml(md) {
  const processed = await remark().use(html, { sanitize: false }).process(md);
  return fixLinks(String(processed));
}

export function getAllDocs({ dir, fields = [] }) {
  const dirAbs = absDir(dir);
  const files = listMd(dirAbs);
  const items = files.map(file => {
    const slug = file.replace(/\.mdx?$/i, '');
    const raw = fs.readFileSync(path.join(dirAbs, file), 'utf8');
    const { data, content } = matter(raw);
    const obj = { slug };
    fields.forEach(f => { if (f !== 'slug' && f in data) obj[f] = data[f]; });
    if (fields.includes('excerpt') && !obj.excerpt) {
      const first = content.split('\n').find(l => l.trim());
      obj.excerpt = first ? first.replace(/^#+\s*/, '').slice(0, 180) : '';
    }
    return obj;
  });
  items.sort((a,b) => (new Date(b.date||0))- (new Date(a.date||0)));
  return items;
}

export function getAllSlugs({ dir }) {
  return listMd(absDir(dir)).map(f => f.replace(/\.mdx?$/i, ''));
}

export function getDocBySlug({ dir, slug, fields = [] }) {
  const raw = readMd(absDir(dir), slug);
  if (!raw) return null;
  const { data, content } = matter(raw);
  const out = { slug };
  fields.forEach(f => { if (f in data) out[f] = data[f]; });
  out.content = content;
  return out;
}

export async function getDocWithHtml({ dir, slug, fields = [] }) {
  const base = getDocBySlug({ dir, slug, fields });
  if (!base) return null;
  const contentHtml = await mdToHtml(base.content || '');
  return { ...base, contentHtml };
}
