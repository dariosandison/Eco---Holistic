// pages/blog/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx } from '../../lib/mdx';
import SEO from '../../components/SEO';
import AuthorBox from '../../components/AuthorBox';
import { mdxComponents } from '../../components/MDXComponents';

function resolvePostPath(slug) {
  const base = path.join(process.cwd(), 'content/blog');
  const mdx = path.join(base, `${slug}.mdx`);
  const md  = path.join(base, `${slug}.md`);
  if (fs.existsSync(mdx)) return mdx;
  if (fs.existsSync(md)) return md;
  return null;
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), 'content/blog');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
  const slugs = files.filter(f => f.endsWith('.md') || f.endsWith('.mdx')).map(f => f.replace(/\.(md|mdx)$/,''));
  return { paths: slugs.map(s => ({ params: { slug: s } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const file = resolvePostPath(params.slug);
  if (!file) return { notFound: true };
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const mdxSource = await serializeMdx(content);

  const title = data.title || params.slug.replace(/-/g,' ');
  const description = data.description || '';
  const url = `https://www.wild-and-well.store/blog/${params.slug}`;
  const datePublished = data.date || null;
  const dateModified = data.updated || data.date || null;
  const author = data.author || 'Wild & Well Editorial';

  return {
    props: {
      slug: params.slug,
      meta: data,
      mdxSource,
      seo: {
        title: `${title} — Wild & Well`,
        description,
        url,
        type: 'article',
        article: { datePublished, dateModified, author },
        breadcrumbs: [
          { name: 'Home', item: 'https://www.wild-and-well.store/' },
          { name: 'Blog', item: 'https://www.wild-and-well.store/blog' },
          { name: title, item: url }
        ]
      }
    },
    revalidate: 60 * 60 * 12
  };
}

export default function BlogPost({ slug, meta, mdxSource, seo }) {
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
            {meta.tags?.length ? <> · {Array.isArray(meta.tags) ? meta.tags.join(', ') : meta.tags}</> : null}
          </p>

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
