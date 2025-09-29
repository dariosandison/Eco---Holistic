// pages/reviews/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx, jsonSafeMeta } from '../../lib/mdx.js';
import SEO from '../../components/SEO';
import MDXComponents, { mdxComponents } from '../../components/MDXComponents';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'reviews');

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

function pruneUndefined(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  const out = {};
  for (const k of Object.keys(obj)) {
    const v = obj[k];
    if (v === undefined) continue;
    if (Array.isArray(v)) out[k] = v.map((x) => pruneUndefined(x));
    else if (v && typeof v === 'object') out[k] = pruneUndefined(v);
    else out[k] = v;
  }
  return out;
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

  const meta = jsonSafeMeta({
    ...data,
    title: data.title || data?.seo?.title || '',
    description: data.description || data?.seo?.description || '',
    image: data.image || (Array.isArray(data.images) ? data.images[0] : undefined),
    updated: data.updated || data.lastUpdated || null,
    author: data.author || {
      name: data.authorName || '',
      title: data.authorTitle || '',
      bio: data.authorBio || ''
    },
    productName: data.productName || data.title || '',
    brand: data.brand || '',
    sku: data.sku || '',
    gtin: data.gtin || data.gtin13 || '',
    rating: data.rating != null ? Number(data.rating) : undefined,
    reviewCount: data.reviewCount != null ? Number(data.reviewCount) : undefined,
    price: data.price != null ? Number(data.price) : undefined,
    currency: data.currency || 'USD',
    availability: data.availability || undefined,
    productUrl: data.productUrl || data.ctaHref || ''
  });

  const product =
    meta.productName || meta.price || meta.rating
      ? pruneUndefined({
          name: meta.productName || meta.title,
          brand: meta.brand || undefined,
          image: meta.image || undefined,
          sku: meta.sku || undefined,
          gtin: meta.gtin || undefined,
          price: meta.price,
          currency: meta.currency,
          url: meta.productUrl || undefined,
          availability: meta.availability || undefined,
          rating: meta.rating,
          reviewCount: meta.reviewCount
        })
      : undefined;

  const seo = pruneUndefined({
    title: meta.title || null,
    description: meta.description || null,
    image: meta.image || null,
    url: `/reviews/${slug}`,
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Reviews', item: '/reviews' },
      { name: meta.title || slug, item: `/reviews/${slug}` }
    ],
    product
  });

  return {
    props: {
      slug,
      meta,
      mdxSource,
      seo
    }
  };
}

export default function ReviewPage({ slug, meta, mdxSource, seo }) {
  const author =
    typeof meta.author === 'object' && meta.author
      ? meta.author
      : { name: '', title: '', bio: '' };

  return (
    <>
      <SEO {...seo} />
      <div className="container" style={{ marginTop: 24 }}>
        <header className="hero">
          <h1 className="h1" style={{ marginBottom: 8 }}>{meta.title}</h1>
          {meta.description ? <p className="lead">{meta.description}</p> : null}
          {meta.updated ? (
            <p style={{ opacity: 0.7, marginTop: 8, fontSize: 14 }}>
              Last updated: {new Date(meta.updated).toLocaleDateString()}
            </p>
          ) : null}
        </header>

        <article className="content">
          <MDXRemote {...mdxSource} components={MDXComponents || mdxComponents} />
        </article>

        {(author?.name || author?.bio || author?.title) ? (
          <aside
            className="authorbox"
            style={{
              marginTop: 40,
              padding: 16,
              border: '1px solid rgba(0,0,0,.08)',
              borderRadius: 12,
              background: '#fafafa'
            }}
          >
            <div className="authorbox-name" style={{ fontWeight: 700 }}>
              {author?.name}
            </div>
            {author?.title ? (
              <div className="authorbox-title" style={{ opacity: 0.8 }}>
                {author.title}
              </div>
            ) : null}
            {author?.bio ? <p className="authorbox-bio" style={{ marginTop: 4 }}>{author.bio}</p> : null}
          </aside>
        ) : null}
      </div>
    </>
  );
}
