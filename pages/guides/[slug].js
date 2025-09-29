// pages/guides/[slug].js
// Robust guides page: safe frontmatter, no undefined in props, MDX without risky plugins.

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import SEO from '../../components/SEO';

const GUIDES_DIR = path.join(process.cwd(), 'content', 'guides');

function withoutUndefined(obj) {
  if (!obj || typeof obj !== 'object') return {};
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined) continue;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      out[k] = withoutUndefined(v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

function cleanText(v, fallback = null) {
  if (typeof v === 'string' && v.trim()) return v.trim();
  return fallback;
}

function firstDefined(...vals) {
  for (const v of vals) {
    if (v !== undefined && v !== null) return v;
  }
  return null;
}

function preprocessMdx(src) {
  // 1) Convert HTML comments to JSX comments outside code fences
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
  // 2) Replace angle-bracket autolinks <https://…> → https://…
  const joined = out.join('\n').replace(/<((?:https?:\/\/|mailto:)[^>\s]+)>/g, '$1');
  return joined;
}

function readSlugs() {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}

function loadGuide(slug) {
  const mdxPath = path.join(GUIDES_DIR, `${slug}.mdx`);
  const mdPath = path.join(GUIDES_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(raw);
  return { content, data: data || {} };
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
  const { content, data } = loadGuide(slug);

  // Compile MDX with minimal options (avoid plugins that inject raw HTML nodes)
  const mdxSource = await serialize(preprocessMdx(content), {
    mdxOptions: { format: 'mdx' },
    parseFrontmatter: false,
  });

  // Build safe SEO/meta object (no undefined values)
  const seo = {
    title: cleanText(firstDefined(data.seo?.title, data.title), ''),
    description: cleanText(firstDefined(data.seo?.description, data.description), null),
    image: cleanText(firstDefined(data.seo?.image, data.image, Array.isArray(data.images) ? data.images[0] : null), null),
    url: `/guides/${slug}`,
  };

  const meta = withoutUndefined({
    ...data,
    title: cleanText(firstDefined(data.title, data.seo?.title), ''),
    description: cleanText(firstDefined(data.description, data.seo?.description), null),
    image: cleanText(firstDefined(data.image, Array.isArray(data.images) ? data.images[0] : null), null),
    slug,
  });

  return {
    props: {
      slug,
      mdxSource,
      meta,
      seo,
    },
  };
}

export default function GuidePage({ slug, mdxSource, meta, seo }) {
  return (
    <>
      <SEO
        title={seo.title || meta.title}
        description={seo.description || meta.description || undefined}
        image={seo.image || undefined}
        url={seo.url}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Guides', item: '/guides' },
          { name: meta.title || 'Guide', item: `/guides/${slug}` },
        ]}
      />
      <main style={{ padding: '48px 20px', maxWidth: 820, margin: '0 auto' }}>
        <p style={{ marginBottom: 12 }}>
          <Link href="/guides">← All Guides</Link>
        </p>
        <h1 style={{ fontSize: 34, lineHeight: 1.2, fontWeight: 800 }}>{meta.title}</h1>
        {meta.description ? (
          <p style={{ marginTop: 8, opacity: 0.85, fontSize: 18 }}>{meta.description}</p>
        ) : null}

        <article style={{ marginTop: 28 }}>
          <MDXRemote {...mdxSource} components={{}} />
        </article>
      </main>
    </>
  );
}

