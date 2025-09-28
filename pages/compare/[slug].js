// pages/compare/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { jsonSafeMeta } from '../../lib/mdx';

function listCompareSlugs() {
  const dir = path.join(process.cwd(), 'content/compare');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => f.replace(/\.(md|mdx)$/,''));
}

export async function getStaticPaths() {
  return {
    paths: listCompareSlugs().map(slug => ({ params: { slug } })),
    fallback: false
  };
}

function toArray(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v.filter(Boolean);
  if (typeof v === 'string') return v.split('|').map(s => s.trim()).filter(Boolean);
  return [];
}

function pick(...candidates) {
  for (const c of candidates) if (c !== undefined && c !== null && c !== '') return c;
  return undefined;
}

function normalizeProducts(meta = {}) {
  // Shape 1: meta.products = [{ name, url, image, price, rating, pros, cons }]
  if (Array.isArray(meta.products)
