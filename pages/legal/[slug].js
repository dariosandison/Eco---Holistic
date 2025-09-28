// pages/legal/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx } from '../../lib/mdx';
import SEO from '../../components/SEO';
import { mdxComponents } from '../../components/MDXComponents';

const LEGAL_SLUGS = ['affiliate-disclosure','product-disclosure','cookies','disclaimer','privacy'];

export async function getStaticPaths() {
  return { paths: LEGAL_SLUGS.map(s => ({ params: { slug: s } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const file = path.join(process.cwd(), 'content/legal', `${params.slug}.mdx`);
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const mdxSource = await serializeMdx(content);

  const title = data.title || 'Legal';
  const description = data.description || '';
  const url = `https://www.wild-and-well.store/legal/${params.slug}`;

  return {
    props: {
      slug: params.slug,
      mdxSource,
      seo: {
        title: `${title} — Wild & Well`,
        description,
        url,
        type: 'website',
        breadcrumbs: [
          { name: 'Home', item: 'https://www.wild-and-well.store/' },
          { name: 'Legal', item: 'https://www.wild-and-well.store/legal' },
          { name: title, item: url }
        ]
      }
    },
    revalidate: 60 * 60 * 24
  };
}

export default function LegalPage({ slug, mdxSource, seo }) {
  return (
    <>
      <SEO {...seo} />
      <meta name="robots" content="noindex,follow" />
      <div className="container" style={{ marginTop: 22 }}>
        <article className="post">
          <MDXRemote {...mdxSource} components={mdxComponents} />
        </article>
      </div>
    </>
  );
}
