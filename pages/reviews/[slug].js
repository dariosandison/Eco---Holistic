// pages/reviews/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import SEO from '../../components/SEO';
import MDXComponents from '../../components/MDXComponents';
import { serializeMdx, jsonSafeMeta } from '../../lib/mdx';

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
    .map((f) => f.replace(/\.(md|mdx)$/i, ''));
}

export async function getStaticPaths() {
  return {
    paths: listSlugs('reviews').map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

function numOrNull(v) {
  if (v === null || v === undefined || v === '') return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function strOrNull(v) {
  if (v === null || v === undefined) return null;
  const s = String(v).trim();
  return s.length ? s : null;
}

function buildProductSEO(meta = {}) {
  // Accept either a nested `product` object in frontmatter
  // or flattened fields on meta.
  const p = meta.product || {};

  const product = {
    name: strOrNull(p.name || meta.productName || meta.title),
    brand: strOrNull(p.brand || meta.brand),
    image: strOrNull(p.image || meta.image),
    url: strOrNull(p.url || meta.url || (meta.affiliate && meta.affiliate.link)),
    sku: strOrNull(p.sku || meta.sku),
    gtin: strOrNull(p.gtin || meta.gtin),
    price: numOrNull(p.price || meta.price),
    currency: strOrNull(p.currency || meta.currency || 'GBP'),
    rating: numOrNull(p.rating || meta.rating),
    reviewCount: numOrNull(p.reviewCount || meta.reviewCount),
    availability: strOrNull(p.availability || meta.availability),
  };

  // Remove keys that are all null to avoid sending an empty product block.
  const hasAnyValue = Object.values(product).some((v) => v !== null);
  return hasAnyValue ? product : null;
}

export async function getStaticProps({ params }) {
  const file = fileFor('reviews', params.slug);
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);

  // Normalize meta (dates to ISO strings, arrays safe, etc.)
  const normalizedMeta = jsonSafeMeta({ ...data });

  // Prepare MDX
  const mdxSource = await serializeMdx(content || '');

  // Build SEO object with safe values only
  const title = normalizedMeta.title || params.slug.replace(/-/g, ' ');
  const description =
    normalizedMeta.description ||
    'Independent, hands-on product review from Wild & Well.';
  const url = `https://www.wild-and-well.store/reviews/${params.slug}`;

  const seo = {
    title: `${title} — Review — Wild & Well`,
    description,
    url,
    type: 'article',
    breadcrumbs: [
      { name: 'Home', item: 'https://www.wild-and-well.store/' },
      { name: 'Reviews', item: 'https://www.wild-and-well.store/reviews' },
      { name: title, item: url },
    ],
  };

  const productSEO = buildProductSEO(normalizedMeta);
  if (productSEO) {
    // Only attach when at least one key has a non-null value.
    seo.product = productSEO;
  }

  return {
    props: {
      slug: params.slug,
      meta: normalizedMeta,
      mdxSource,
      seo,
    },
    revalidate: 60 * 60 * 12,
  };
}

export default function ReviewPage({ slug, meta, mdxSource, seo }) {
  const published = meta.date ? new Date(meta.date).toLocaleDateString() : null;
  const updated = meta.updated ? new Date(meta.updated).toLocaleDateString() : null;

  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">{meta.title || slug.replace(/-/g, ' ')}</h1>
          {(published || updated) && (
            <p className="post-meta">
              {published ? <>Published {published}</> : null}
              {published && updated ? <> · </> : null}
              {updated ? <>Updated {updated}</> : null}
            </p>
          )}

          {meta.hero && (
            <figure style={{ margin: '16px 0' }}>
              <img src={meta.hero} alt={meta.title || 'Product image'} />
              {meta.heroCaption ? (
                <figcaption className="post-meta">{meta.heroCaption}</figcaption>
              ) : null}
            </figure>
          )}

          <MDXRemote {...mdxSource} components={MDXComponents} />

          {Array.isArray(meta.related) && meta.related.length > 0 ? (
            <div className="relbox" style={{ marginTop: 24 }}>
              <div className="relbox-title">Related</div>
              <ul className="relbox-grid">
                {meta.related.map((r, i) => (
                  <li key={`${r.type}-${r.slug}-${i}`}>
                    <Link href={`/${r.type}/${r.slug}`} className="relbox-card">
                      <span className="relbox-name">{r.title || r.slug}</span>
                      {r.description ? (
                        <span className="relbox-desc">{r.description}</span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </article>
      </div>
    </>
  );
}
