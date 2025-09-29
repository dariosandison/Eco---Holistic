// pages/compare/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import SEO from '../../components/SEO';
import { serializeMdx, jsonSafeMeta } from '../../lib/mdx';
import Callout from '../../components/Callout';
import CompareInline from '../../components/CompareInline';
import CompareTable from '../../components/CompareTable';

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
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.(md|mdx)$/i,
