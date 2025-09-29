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

export async function getStaticPaths() {
  const slugs = readSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content, data } = loadReview(slug);

  const mdxSource = await serialize(preprocessMdx(content), {
    mdxOptions: { format: 'mdx' },
    parseFrontmatter: false,
  });

  // Product fields for JSON-LD (all optional, sanitized)
  const product = {
    name: cleanText(data.product?.name || data.title || data.seo?.title || null, null),
    image:
      cleanText(
        data.product?.image || data.image || (Array.isArray(data.images) ? data.images[0] : null),
        null
      ) || undefined,
    description: cleanText(data.product?.description || data.description || data.seo?.description || null, null) || undefined,
    brand: cleanText(data.product?.brand || null, null) || undefined,
    sku: cleanText(data.product?.sku || null, null) || undefined,
    gtin: cleanText(data.product?.gtin || null, null) || undefined,
    url: cleanText(data.product?.url || data.ctaHref || null, null) || undefined,
    price: data.product?.price ?? undefined,
    priceCurrency: cleanText(data.product?.priceCurrency || null, null) || undefined,
    aggregateRating: data.product?.aggregateRating
      ? {
          ratingValue: data.product.aggregateRating.ratingValue ?? undefined,
          ratingCount: data.product.aggregateRating.ratingCount ?? undefined,
        }
      : undefined,
    offers: Array.isArray(data.product?.offers) ? data.product.offers : undefined,
  };

  const seo = {
    title: cleanText(data.seo?.title || data.title || '', ''),
    description: cleanText(data.seo?.description || data.description || null, null),
    image:
      cleanText(
        data.seo?.image || data.image || (Array.isArray(data.images) ? data.images[0] : null),
        null
      ) || null,
    url: `/reviews/${slug}`,
  };

  const meta = {
    title: cleanText(data.title || data.seo?.title || '', ''),
    description: cleanText(data.description || data.seo?.description || null, null),
    image:
      cleanText(
        data.image || (Array.isArray(data.images) ? data.images[0] : null),
        null
      ) || null,
    brand: cleanText(data.brand || product.brand || null, null),
    price: data.price ?? product.price ?? null,
    priceCurrency: cleanText(data.priceCurrency || product.priceCurrency || null, null),
    ctaLabel: cleanText(data.ctaLabel || 'Check price', 'Check price'),
    ctaHref: cleanText(data.ctaHref || product.url || null, null),
    slug,
  };

  return {
    props: {
      slug,
      mdxSource,
      meta,
      seo,
      // Only pass product if it has a name (prevents empty JSON-LD)
      product: product.name ? product : null,
    },
  };
}

export default function ReviewPage({ slug, mdxSource, meta, seo, product }) {
  return (
    <>
      <SEO
        title={seo.title || meta.title}
        description={seo.description || undefined}
        image={seo.image || undefined}
        url={seo.url}
        product={product || undefined}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Reviews', item: '/reviews' },
          { name: meta.title || 'Review', item: `/reviews/${slug}` },
        ]}
      />
      <main style={{ padding: '48px 20px', maxWidth: 820, margin: '0 auto' }}>
        <p style={{ marginBottom: 12 }}>
          <Link href="/reviews">← All Reviews</Link>
        </p>
        <h1 style={{ fontSize: 34, lineHeight: 1.2, fontWeight: 800 }}>{meta.title}</h1>
        {meta.description ? (
          <p style={{ marginTop: 8, opacity: 0.85, fontSize: 18 }}>{meta.description}</p>
        ) : null}

        {meta.ctaHref ? (
          <p style={{ marginTop: 16 }}>
            <a
              href={meta.ctaHref}
              target="_blank"
              rel="nofollow sponsored noopener"
              style={{
                display: 'inline-block',
                padding: '10px 14px',
                borderRadius: 10,
                border: '1px solid rgba(0,0,0,0.1)',
                textDecoration: 'none',
              }}
            >
              {meta.ctaLabel}
            </a>
          </p>
        ) : null}

        <article style={{ marginTop: 28 }}>
          <MDXRemote {...mdxSource} components={{}} />
        </article>
      </main>
    </>
  );
}
