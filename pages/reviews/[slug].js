// pages/reviews/[slug].js
// Robust reviews page: safe frontmatter, optional Product JSON-LD via <SEO product={...} />

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import SEO from '../../components/SEO';

const REVIEWS_DIR = path.join(process.cwd(), 'content', 'reviews');

function readSlugs() {
  if (!fs.existsSync(REVIEWS_DIR)) return [];
  return fs
    .readdirSync(REVIEWS_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}

function loadReview(slug) {
  const mdxPath = path.join(REVIEWS_DIR, `${slug}.mdx`);
  const mdPath = path.join(REVIEWS_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(raw);
  return { content, data: data || {} };
}

function cleanText(v, fallback = null) {
  if (typeof v === 'string' && v.trim()) return v.trim();
  return fallback;
}

function preprocessMdx(src) {
  // Comments → JSX (outside fences)
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
  // Angle-bracket links
  return out.join('\n').replace(/<((?:https?:\/\/|mailto:)[^>\s]+)>/g, '$1');
}

export async function getStaticPat
