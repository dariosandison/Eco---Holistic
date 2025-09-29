// pages/guides/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx, jsonSafeMeta } from '../../lib/mdx';
import SEO from '../../components/SEO';
import StickyCTA from '../../components/StickyCTA';
import { mdxComponents } from '../../components/MDXComponents';

const GUIDES_DIR = path.join(process.cwd(), 'content/guides');

function getAllGuideSlugs() {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => /\.mdx?$/i.test(f))
    .map((f) => f.replace(/\.mdx?$/i, ''));
}

function readGuide(slug) {
  const mdx = path.join(GUIDES_DIR, `${slug}.mdx`);
  const md = path.join(GUIDES_DIR, `${slug}.md`);
  const file = fs.existsSync(mdx) ? mdx : fs.existsSync(md) ? md : null;
  if (!file) return null;
  const raw = fs.readFileSync(file, 'utf8');
  return matter(raw);
}

export async function getStaticPaths() {
  const paths = getAllGuideSlugs().map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const parsed = readGuide(params.slug);
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

  // Optional CTA fields in front-matter; if not provided, CTA won’t render
  const ctaHref = meta.ctaHref || meta.cta || null;
  const ctaLabel = meta.ctaLabel || 'View price';
  const ctaSublabel = meta.ctaSublabel || 'Top pick';

  return {
    props: {
      slug: params.slug,
      meta,
      author,
      mdxSource,
      cta: { href: ctaHref, label: ctaLabel, sublabel: ctaSublabel },
      seo: {
        title: `${title} — Wild & Well`,
        description,
        url: `https://www.wild-and-well.store/guides/${params.slug}`,
        breadcrumbs: [
          { name: 'Home', item: 'https://www.wild-and-well.store/' },
          { name: 'Guides', item: 'https://www.wild-and-well.store/guides' },
          { name: title, item: `https://www.wild-and-well.store/guides/${params.slug}` }
        ],
        type: 'article'
      }
    },
    revalidate: 60 * 60 * 24
  };
}

export default function GuidePage({ slug, meta, author, mdxSource, cta, seo }) {
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

          <MDXRemote {...mdxSource} components={mdxComponents} />

          {author?.name ? (
            <div className="authorbox" style={{ marginTop: 28 }}>
              {author?.avatar ? (
                <img src={author.avatar} alt={author.name} style={{ width: 56, height: 56, borderRadius: '50%', marginRight: 12 }} />
              ) : null}
              <div>
                <div className="authorbox-name" style={{ fontWeight: 700 }}>{author?.name}</div>
                {author?.title ? <div className="authorbox-title" style={{ opacity: 0.8 }}>{author.title}</div> : null}
                {author?.bio ? <p className="authorbox-bio" style={{ marginTop: 4 }}>{author.bio}</p> : null}
