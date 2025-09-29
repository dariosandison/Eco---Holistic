// pages/guides/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import SEO from '../../components/SEO';
import { serializeMdx, jsonSafeMeta } from '../../lib/mdx';
import Callout from '../../components/Callout';
import CompareInline from '../../components/CompareInline';

const ROOT = process.cwd();

function fileFor(dir, slug) {
  const base = path.join(ROOT, 'content', dir, slug);
  if (fs.existsSync(`${base}.mdx`)) return `${base}.mdx`;
  if (fs.existsSync(`${base}.md`)) return `${base}.md`;
  return null;
}

function listSlugs(dir) {
  const full = path.join(ROOT, 'content', dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => f.replace(/\.(md|mdx)$/,''));
}

function toArr(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v;
  if (typeof v === 'string') return v.split('|').join(',').split(',').map(s => s.trim()).filter(Boolean);
  return [];
}

function readDoc(pathish) {
  if (!pathish) return null;
  let type = '', slug = '';
  if (pathish.includes('/')) {
    const [t, ...rest] = pathish.split('/');
    type = t; slug = rest.join('/');
  } else slug = pathish;

  const dirs = type ? [type] : ['guides','reviews','blog'];
  for (const d of dirs) {
    const f = fileFor(d, slug);
    if (f) {
      const raw = fs.readFileSync(f, 'utf8');
      const { data } = matter(raw);
      return {
        type: d,
        slug,
        title: data?.title || slug.replace(/-/g,' '),
        description: data?.description || ''
      };
    }
  }
  return null;
}

functio
