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
    avatar: data?.avatar || '',
    bio: content?.trim() || ''
  };
}

function readDocByPathish(pathish) {
  // Accept "guides/slug", "reviews/slug", "blog/slug", or just "slug" (we’ll search)
  if (!pathish) return null;
  let type = '';
  let slug = '';
  if (pathish.includes('/')) {
    const [t, ...rest] = pathish.split('/');
    type = t;
    slug = rest.join('/');
  } else {
    slug = pathish;
  }
  const candidates = type ? [type] : ['guides', 'reviews', 'blog'];
  for (const dir of candidates) {
    const f = fileFor(dir, slug);
    if (f) {
      const raw = fs.readFileSync(f, 'utf8');
      const { data } = matter(raw);
      return {
        type: dir,
        slug,
        title: data?.title || slug.replace(/-/g,' '),
        description: data?.description || ''
      };
    }
  }
  return null;
}

export async function getStaticProps({ params }) {
  const file = fileFor('reviews', params.slug);
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);

  const product = data?.product ? normalizeProduct(data.product) : null;

  const related = arr(data?.related)
    .map(readDocByPathish)
    .filter(Boolean)
    .slice(0, 8);

  const author = loadAuthor(data?.author);

  const mdxSource = await serializeMdx(content || '');
  const meta = jsonSafeMeta({
    ...data,
    product,
    related,
    author
  });

  const title = meta.title || params.slug.replace(/-/g,' ');
  const description = meta.description || (product?.name ? `Hands-on review: ${product.name}` : 'Independent review.');
  const url = `https://www.wild-and-well.store/reviews/${params.slug}`;
  const datePublished = meta.date || null;
  const dateModified  = meta.updated || meta.date || null;

  const breadcrumbs = [
    { name: 'Home', item: 'https://www.wild-and-well.store/' },
    { name: 'Reviews', item: 'https://www.wild-and-well.store/reviews' },
    { name: title, item: url }
  ];

  return {
    props: {
      slug: params.slug,
      meta,
      mdxSource,
      seo: {
        title: `${title} — Review — Wild & Well`,
        description,
        url,
        type: 'article',
        article: { datePublished, dateModified, author: meta.author?.name || meta.author || 'Wild & Well Editorial' },
        product: product ? {
          name: product.name,
          brand: product.brand,
          images: product.images,
          reviewBody: description,
          rating: product.rating,
          pros: product.pros,
          cons: product.cons
        } : undefined,
        breadcrumbs
      }
    },
    revalidate: 60 * 60 * 12
  };
}

export default function ReviewPage({ slug, meta, mdxSource, seo }) {
  const p = meta.product || null;
  const author = meta.author || null;

  const click = (label, link) => {
    try { gaEvent({ action: 'affiliate_click', category: 'affiliate', label, value: 1 }); } catch {}
  };

  return (
    <>
      <SEO {...seo} />

      <div className="container">
        <article className="post">
          <h1 className="post-title">{meta.title || slug.replace(/-/g, ' ')}</h1>
          <p className="post-meta">
            {meta.date ? <>Published {new Date(meta.date).toLocaleDateString()}</> : null}
            {meta.date && meta.updated ? <> · </> : null}
            {meta.updated ? <>Updated {new Date(meta.updated).toLocaleDateString()}</> : null}
            {author?.name ? <> · By {author.name}</> : null}
          </p>

          {/* Product summary card */}
          {p ? (
            <div className="rev-card">
              <div className="rev-head">
                <div>
                  <div className="rev-title">{p.name}</div>
                  {p.brand ? <div className="rev-sub">{p.brand}</div> : null}
                </div>
                {p.rating ? <div className="rev-badge">{Number(p.rating).toFixed(1)}★</div> : null}
              </div>
              {p.images?.[0] ? (
                <img className="rev-img" src={p.images[0]} alt={p.name} loading="lazy" />
              ) : null}
              {p.price != null ? <div className="rev-price">£{p.price}</div> : null}
              <div className="rev-actions">
                {p.link ? (
                  <a
                    className="btn btn-primary"
                    href={p.link}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    onClick={() => click(`review_cta_${p.name}`, p.link)}
                  >
                    Check price
                  </a>
                ) : null}
              </div>
              {(p.pros?.length || p.cons?.length) ? (
                <div className="cmp-procon" style={{marginTop: 12}}>
                  {p.pros?.length ? (
                    <div>
                      <div className="cmp-label good">Pros</div>
                      <ul>{p.pros.map((x,i)=><li key={i}>{x}</li>)}</ul>
                    </div>
                  ) : null}
                  {p.cons?.length ? (
                    <div>
                      <div className="cmp-label bad">Cons</div>
                      <ul>{p.cons.map((x,i)=><li key={i}>{x}</li>)}</ul>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}

          {/* Body */}
          {mdxSource ? <MDXRemote {...mdxSource} /> : null}

          {/* Related box */}
          {meta.related?.length ? (
            <div className="relbox">
              <div className="relbox-title">You might also like</div>
              <ul className="relbox-grid">
                {meta.related.map((r, i) => {
                  const href = `/${r.type}/${r.slug}`;
                  return (
                    <li key={`${r.type}-${r.slug}-${i}`}>
                      <Link href={href} className="relbox-card">
                        <span className="relbox-name">{r.title}</span>
                        {r.description ? <span className="relbox-desc">{r.description}</span> : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          {/* Author bio */}
          {author?.name || author?.bio ? (
            <div className="authorbox">
              {author?.avatar ? <img src={author.avatar} alt={author.name} className="authorbox-avatar" /> : null}
              <div>
                <div className="authorbox-name">{author?.name}</div>
                {author?.title ? <div className="authorbox-title">{author.title}</div> : null}
                {author?.bio ? <p className="authorbox-bio">{author.bio}</p> : null}
                <p><Link href={`/authors/${(author.slug || author.name || '').toLowerCase().replace(/\s+/g,'-')}`}>More from this author →</Link></p>
              </div>
            </div>
          ) : null}
        </article>
      </div>
    </>
  );
}
