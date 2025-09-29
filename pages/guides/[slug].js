// pages/guides/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx, jsonSafeMeta } from '../../lib/mdx.js';
import SEO from '../../components/SEO';
import MDXComponents, { mdxComponents } from '../../components/MDXComponents';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'guides');

function listSlugs(dir = CONTENT_DIR) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}

function readBySlug(slug) {
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`);
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;
  if (!filePath) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  return { filePath, ...matter(raw) }; // => { content, data }
}

export async function getStaticPaths() {
  const slugs = listSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const file = readBySlug(slug);
  if (!file) return { notFound: true };

  const { content, data } = file;
  const mdxSource = await serializeMdx(content);

  // Normalize meta and safe-serialize for props
  const meta = jsonSafeMeta({
    ...data,
    title: data.title || (data.seo && data.seo.title) || '',
    description: data.description || (dat
