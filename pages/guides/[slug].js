// pages/guides/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx, jsonSafeMeta } from '../../lib/mdx';
import SEO from '../../components/SEO';
import { mdxComponents } from '../../components/MDXComponents';

function allGuideSlugs() {
  const dir = path.join(process.cwd(), 'content/guides');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => f.replace(/\.(md|mdx)$/,''));
}

export async function getStaticPaths() {
  return { paths: allGuideSlugs().map(slug => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const base = path.join(process.cwd(), 'content/guides', params.slug);
  const file = fs.existsSync(`${base}.mdx`) ? `${base}.mdx` : `${base}.md`;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);

  const meta = jsonSafeMeta(data || {});
  const mdxSource = await serializeMdx(content);

  const title = meta.title || params.slug.replace(/-/g,' ');
  const description = meta.description || '';
  const url = `https://www.wild-and-well.store/guides/${params.slug}`;
  const datePublished = meta.date || null;
  const dateModified = meta.updated || meta.date || null;
  const author = meta.author || 'Wild & Well Editorial';

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
        breadcrumbs: [
          { name: 'Home', item: 'https://www.wild-and-well.store/' },
          { name: 'Guides', item: 'https://www.wild-and-well.store/guides' },
          { name: title, item: url }
        ]
      }
    },
    revalidate: 60 * 60 * 12
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
          <MDXRemote {...mdxSource} components={mdxComponents} />
        </article>
      </div>
    </>
  );
}
