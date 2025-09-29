// pages/reviews/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx, jsonSafeMeta } from '../../lib/mdx';
import SEO from '../../components/SEO';
import StickyCTA from '../../components/StickyCTA';
import { mdxComponents } from '../../components/MDXComponents';

const REVIEWS_DIR = path.join(process.cwd(), 'content/reviews');

function getAllReviewSlugs() {
  if (!fs.existsSync(REVIEWS_DIR)) return [];
  return fs
    .readdirSync(REVIEWS_DIR)
    .filter((f) => /\.mdx?$/i.test(f))
    .map((f) => f.replace(/\.mdx?$/i, ''));
}

function readReview(slug) {
  const mdx = path.join(REVIEWS_DIR, `${slug}.mdx`);
  const md = path.join(REVIEWS_DIR, `${slug}.md`);
  const file = fs.existsSync(mdx) ? mdx : fs.existsSync(md) ? md : null;
  if (!file) return null;
  const raw = fs.readFileSync(file, 'utf8');
  return matter(raw);
}

export async function getStaticPaths() {
  const paths = getAllReviewSlugs().map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const parsed = readReview(params.slug);
  if (!parsed) return { notFound: true };

  const { data, content } = parsed;
  const mdxSource = await serializeMdx(content);
  const meta = jsonSafeMeta(data);

  const title = meta.title || params.slug.replace(/-/g, ' ');
  const description = meta.description || '';
  const author =
    meta.author
      ? { name: meta.author, title: meta.author_title, avatar: meta.author_avatar, bio: meta.author_bio }
      : null;

  // Product schema (optional; only included if fields exist)
  const product = {
    name: meta.productName || meta.product || title,
    brand: meta.brand || undefined,
    sku: meta.sku || undefined,
    gtin: meta.gtin || meta.gtin13 || undefined,
    image: meta.image || (Array.isArray(meta.images) ? meta.images[0] : undefined),
    url: meta.productUrl || meta.ctaHref || undefined,
    price: meta.price || undefined,
    currency: meta
