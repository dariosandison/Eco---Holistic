// pages/reviews/[slug].js
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

/**
 * Helpers
 */
const REVIEWS_DIR = path.join(process.cwd(), 'content', 'reviews');

function safeString(v) {
  return typeof v === 'string' && v.trim().length > 0 ? v.trim() : null;
}
function safeNumber(v) {
  return typeof v === 'number' && Number.isFinite(v) ? v : null;
}
function firstString(arr) {
  if (!Array.isArray(arr)) return null;
  for (const v of arr) {
    const s = safeString(v);
    if (s) return s;
  }
  return null;
}
/**
 * Recursively converts undefined → null and strips non-serializable values.
 */
function jsonSafe(value) {
  return JSON.parse(
    JSON.stringify(
      value,
      (_key, val) => (val === undefined ? null : val)
    )
  );
}

/**
 * Build SEO and Product objects from front matter, guarding undefineds.
 */
function buildSeo(front) {
  const seoTitle =
    safeString(front?.seo?.title) ||
    safeString(front?.title) ||
    null;

  const seoDesc =
    safeString(front?.seo?.description) ||
    safeString(front?.description) ||
    null;

  const seoImage =
    safeString(front?.seo?.image) ||
    safeString(front?.image) ||
    firstString(front?.images) ||
    null;

  return {
    title: seoTitle,
    description: seoDesc,
    image: seoImage,
  };
}

function buildProduct(front) {
  const name =
    safeString(front?.productName) ||
    safeString(front?.name) ||
    null;

  if (!name) return null;

  const image =
    safeString(front?.productImage) ||
    safeString(front?.image) ||
    firstString(front?.images) ||
    null;

  const url =
    safeString(front?.productUrl) ||
    safeString(front?.ctaHref) ||
    null;

  const price = safeNumber(front?.price);
  const currency = safeString(front?.currency);

  return {
    name,
    image,
    url,
    price,
    currency,
  };
}

/**
 * Page component
 */
export default function ReviewPage({ slug, mdxSource, meta, seo, product }) {
  return (
    <>
      <Head>
        <title>{seo?.title ?? meta?.title ?? 'Review'}</title>
        {seo?.description ? (
          <meta name="description" content={seo.description} />
        ) : null}
        {seo?.image ? <meta property="og:image" content={seo.image} /> : null}
      </Head>

      <main className="container mx-auto px-4 py-8 prose prose-neutral">
        <article>
          <header>
            <h1>{meta?.title ?? slug}</h1>
            {meta?.subtitle ? <p>{meta.subtitle}</p> : null}
          </header>

          {/* MDX content */}
          {mdxSource ? <MDXRemote {...mdxSource} /> : <p>No content.</p>}

          {/* Simple product info block if present */}
          {product ? (
            <section style={{ marginTop: '2rem' }}>
              <h2>Product</h2>
              <ul>
                <li><strong>Name:</strong> {product.name}</li>
                {product.url ? (
                  <li>
                    <strong>Link:</strong>{' '}
                    <a href={product.url} rel="nofollow sponsored">
                      {product.url}
                    </a>
                  </li>
                ) : null}
                {product.price != null && product.currency ? (
                  <li>
                    <strong>Price:</strong> {product.price} {product.currency}
                  </li>
                ) : null}
              </ul>
            </section>
          ) : null}
        </article>
      </main>
    </>
  );
}

/**
 * SSG
 */
export async function getStaticPaths() {
  let paths = [];
  try {
    if (fs.existsSync(REVIEWS_DIR)) {
      const files = fs.readdirSync(REVIEWS_DIR);
      paths = files
        .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
        .map((f) => ({
          params: { slug: f.replace(/\.mdx?$/, '') },
        }));
    }
  } catch {
    // noop – return empty paths
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params?.slug;

  // Try .mdx first, then .md
  const mdxPath = path.join(REVIEWS_DIR, `${slug}.mdx`);
  const mdPath = path.join(REVIEWS_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data: front, content } = matter(raw);

  // MDX compile – keep options minimal to avoid AST incompatibilities
  const mdxSource = await serialize(content || '', {
    mdxOptions: { format: 'mdx' },
  });

  // Meta/SEO/Product
  const meta = {
    ...front,
    title: safeString(front?.title) ?? null,
    description: safeString(front?.description) ?? null,
    subtitle: safeString(front?.subtitle) ?? null,
    slug,
  };

  const seo = buildSeo(front);
  const product = buildProduct(front);

  // JSON-safe props (no undefined)
  const props = jsonSafe({
    slug,
    mdxSource,
    meta,
    seo,
    product, // null if not present
  });

  return { props };
}
