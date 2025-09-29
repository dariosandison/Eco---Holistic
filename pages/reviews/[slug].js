// pages/reviews/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx, jsonSafeMeta } from '../../lib/mdx';
import SEO from '../../components/SEO';
import { event as gaEvent } from '../../lib/gtag';

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

export async function getStaticPaths() {
  return {
    paths: listSlugs('reviews').map(slug => ({ params: { slug } })),
    fallback: false
  };
}

function arr(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v;
  if (typeof v === 'string') {
    return v.split('|').join(',').split(',').map(s => s.trim()).filter(Boolean);
  }
  return [];
}

function normalizeProduct(p = {}) {
  const pros = arr(p.pros);
  const cons = arr(p.cons);
  const images = Array.isArray(p.images) ? p.images : (p.image ? [p.image] : []);
  return {
    name: p.name || '',
    brand: p.brand || '',
    images,
    rating: p.rating != null ? Number(p.rating) : null,
    price: p.price != null ? Number(p.price) : null,
    link: p.link || '',
    pros,
    cons,
    sku: p.sku || '',
    gtin: p.gtin || ''
  };
}

function loadAuthor(authorSlugOrName) {
  if (!authorSlugOrName) return null;
  const guess = String(authorSlugOrName).toLowerCase().replace(/\s+/g,'-');
  const file = fileFor('authors', guess);
  if (!file) return { name: authorSlugOrName };
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug: guess,
    name: data?.name || authorSlugOrName,
    title: data?.title || data?.role || '',
    ava


