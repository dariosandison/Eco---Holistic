// pages/guides/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx } from '../../lib/mdx';
import SEO from '../../components/SEO';
import AuthorBox from '../../components/AuthorBox';
import { mdxComponents } from '../../components/MDXComponents';

// Find a guide file supporting both .mdx and .md
function resolveGuidePath(slug) {
  const base = path.join(process.cwd(), 'content/guides');
  const mdx = path.join(base, `${slug}.mdx`);
  const md  = path.join(base, `${slug}.md`);
  if (fs.existsSync(mdx)) return mdx;
  if (fs.existsSync(md)) return md;
  return null;
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), 'content/guides');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
  const slugs = files
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => f.replace(/\.(md|mdx)$/,''));
  const uniq = Array.from(new Set(slugs));
  return { paths: uniq.map(s => ({ params: { slug: s } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const file = resolveGuidePath(params.slug);
  if (!file) return { notFound: true };
  const raw = fs.readFileSync(file, 'utf8');
  const { data: metaRaw, content } = matter(raw);

  // Normalize front-matter types
  const normalizeList = (v) => Array.isArray(v) ? v : (typeof v === 'string' ? v.split('|').map(s=>s.trim()).filter(Boolean) : []);
  const meta = {
    ...metaRaw,
    pros: normalizeList(metaRaw.pros),
    cons: normalizeList(metaRaw.cons),
    images: normalizeList(metaRaw.images),
  };

  const mdxSource = await serializeMdx(content);

  const title = meta.title || params.slug.replace(/-/g,' ');
  const description = meta.description || '';
  const url = `https://www.wild-and-well.store/guides/${params.slug}`;
  const datePublished = meta.date || null;
  const dateModified = meta.updated || meta.date || null;
  const author = meta.author || 'Wild & Well Editorial';

  const productBlock = (meta.rating || meta.pros?.length || meta.cons?.length) ? {
    name: meta.product || title,
    brand: meta.brand || undefined,
    images: meta.images || undefined,
    reviewBody: meta.reviewBody || description || title,
    rating: meta.rating || undefined,
    pros: meta.pros || [],
    cons: meta.cons || []
  } : null;

  const breadcrumbs = [
    { name: 'Home', item: 'https://www.wild-and-well.store/' },
    { name: 'Guides', item: 'https://www.wild-and-well.store/guides' },
    { name: title, item: url }
  ];

  return {
    props: {
      slug: params.slug,
      meta,
      mdxSource,
      seo: {
        title: `${title} — Wild & Well`,
        description,
        url,
        type: 'article',
        article: { datePublished, dateModified, author },
        product: productBlock,
        breadcrumbs
      }
    }
  };
}

export default function GuidePage({ slug, meta, mdxSource, seo }) {
  const updated = meta.updated || meta.date;
  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">{meta.title || slug.replace(/-/g,' ')}</h1>
          <p className="post-meta">
            {meta.date ? <>Published {new Date(meta.date).toLocaleDateString()}</> : null}
            {meta.date && updated ? <> · </> : null}
            {updated ? <>Updated {new Date(updated).toLocaleDateString()}</> : null}
          </p>

          {/* Inline disclosure component is available to MDX too */}
          <MDXRemote {...mdxSource} components={mdxComponents} />

          <AuthorBox
            name={meta.author || "Wild & Well Editorial"}
            title={meta.author_title || "Editor"}
            avatar={meta.author_avatar || "/avatar.png"}
            updated={updated}
            bio={meta.author_bio || "We test low-tox products and publish honest, evidence-informed picks."}
          />
        </article>
      </div>
    </>
  );
}
