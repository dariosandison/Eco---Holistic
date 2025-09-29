// pages/guides/[slug].js
// Robust guides page: safe frontmatter, no undefined in props, MDX without risky plugins.

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import SEO from '../../components/SEO';

const GUIDES_DIR = path.join(process.cwd(), 'content', 'guides');

function withoutUndefined(obj) {
  if (!obj || typeof obj !== 'object') return {};
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined) continue;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      out[k] = withoutUndefined(v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

function cleanText(v, fallback = null) {
  if (typeof v === 'string' && v.trim()) return v.trim();
  return fallback;
}

function firstDefined(...vals) {
  for (const v of vals) {
    if (v !== undefined && v !== null) return v;
  }
  return null;
}

function preprocessMdx(src) {
  // 1) Convert HTML comments to JSX comments outside code fences
  const lines = src.split('\n');
  let inFence = false;
  const out = [];
  for (const line of lines) {
    const fence = line.trim().match(/^```/);
    if (fence) inFence = !inFence;
    if (!inFence) {
      out.push(line.replace(/<!--/g, '{/*').replace(/-->/g, '*/}'));
    } else {
      out.push(line);
    }
  }
  // 2) Replace angle-bracket autolinks <https://…> → https://…
  const joined = out.join('\n').replace(/<((?:https?:\/\/|mailto:)[^>\s]+)>/g, '$1');
  return joined;
}

function readSlugs() {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}

function loadGuide(slug) {
  const mdxPath = path.join(GUIDES_DIR, `${slug}.mdx`);
  const mdPath = path.join(GUIDES_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(raw);
  return { content, data: data || {} };
}

export async function getStaticPaths() {
  const slugs = readSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content, data } = loadGuide(slug);

  // Compile MDX with minimal options (avoid plugins that inject raw HTML nodes)
  const mdxSource = await serialize(preprocessMdx(content),
