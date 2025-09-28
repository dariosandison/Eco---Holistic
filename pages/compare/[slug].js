// pages/compare/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx } from '../../lib/mdx';
import SEO from '../../components/SEO';
import { mdxComponents } from '../../components/MDXComponents';

function getAllSlugs() {
  const dir = path.join(process.cwd(), 'content/compare');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.mdx') || f.endsWith('.md')).map(f => f.replace(/\.(md|mdx)$/,''));
}

export async function getStaticPaths() {
  return { paths: getAllSlugs().map(slug => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const fileBase = path.join(process.cwd(), 'content/compare', params.slug);
  const file = fs.existsSync(`${fileBase}.mdx`) ? `${fileBase}.mdx` : `${fileBase}.md`;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const mdxSource = await serializeMdx(content);

  const a = data.productA || 'Product A';
  const b = data.productB || 'Product B';
  const title = `${a} vs ${b}`;
  const description = data.description || `Head-to-head comparison: ${a} vs ${b}.`;
  const url = `https://www.wild-and-well.store/compare/${params.slug}`;

  return {
    props: {
      mdxSource,
      seo: {
        title: `${title} — Wild & Well`,
        description,
        url,
        type: 'article',
        breadcrumbs: [
          { name: 'Home', item: 'https://www.wild-and-well.store/' },
          { name: 'Compare', item: 'https://www.wild-and-well.store/compare' },
          { name: title, item: url }
        ]
      },
      heading: title
    },
    revalidate: 60 * 60 * 24
  };
}

export default function ComparePage({ mdxSource, seo, heading }) {
  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">{heading}</h1>
          <MDXRemote {...mdxSource} components={mdxComponents} />
        </article>
      </div>
    </>
  );
}
