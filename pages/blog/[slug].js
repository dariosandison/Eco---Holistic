import Head from 'next/head';
// pages/blog/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx, jsonSafeMeta } from '../../lib/mdx';
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
  const meta = jsonSafeMeta(data || {});
  const mdxSource = await serializeMdx(content);

  const title = meta.title || params.slug.replace(/-/g,' ');
  const description = meta.description || '';
  const url = `https://www.wild-and-well.store/blog/${params.slug}`;
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
  return (<>
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": meta?.title || "Wild & Well Article",
              "description": meta?.description || undefined,
              "datePublished": meta?.date || undefined,
              "dateModified": meta?.updated || meta?.date || undefined,
              "author": [{"@type":"Person","name":"Wild & Well Editorial Team"}],
              "publisher": {"@type":"Organization","name":"Wild & Well"}
            }) }}
          />
          {Array.isArray(meta?.faqs) && meta.faqs.length ? (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": meta.faqs.map(q => ({
                  "@type": "Question",
                  "name": q.question,
                  "acceptedAnswer": {"@type":"Answer","text": q.answer}
                }))
              }) }}
            />
          ) : null}
        </Head>
        <>
        <Head>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": (post?.title || title) ?? "Wild & Well Article",
            "description": (post?.description || description) ?? undefined,
            "datePublished": post?.date || null,
            "dateModified": post?.updated || post?.date || null,
            "author": [{"@type":"Person","name":"Wild & Well Editorial Team"}],
            "publisher": {"@type":"Organization","name":"Wild & Well"}
          }) }} />
        </Head>
        
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">{meta.title || slug.replace(/-/g,' ')}</h1>
          <p className="post-meta">
            {meta.date ? <>Published {new Date(meta.date).toLocaleDateString()}</> : null}
            {meta.date && updated ? <> · </> : null}
            {updated ? <>Updated {new Date(updated).toLocaleDateString()}</> : null}
            {meta.tags ? <> · {Array.isArray(meta.tags) ? meta.tags.join(', ') : meta.tags}</> : null}
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
