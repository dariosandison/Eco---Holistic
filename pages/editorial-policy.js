// pages/editorial-policy.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx } from '../lib/mdx';
import SEO from '../components/SEO';
import { mdxComponents } from '../components/MDXComponents';

export async function getStaticProps() {
  const file = path.join(process.cwd(), 'content/pages', 'editorial-policy.mdx');
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const mdxSource = await serializeMdx(content);

  const title = data.title || 'Editorial Policy';
  const description = data.description || 'How we choose, test, and recommend products.';

  return {
    props: {
      mdxSource,
      seo: {
        title: `${title} — Wild & Well`,
        description,
        url: 'https://www.wild-and-well.store/editorial-policy',
        type: 'website',
        breadcrumbs: [
          { name: 'Home', item: 'https://www.wild-and-well.store/' },
          { name: 'Editorial Policy', item: 'https://www.wild-and-well.store/editorial-policy' }
        ]
      }
    },
    revalidate: 60 * 60 * 24
  };
}

export default function EditorialPolicyPage({ mdxSource, seo }) {
  return (
    <>
      <SEO {...seo} />
      <div className="container" style={{ marginTop: 22 }}>
        <article className="post">
          <MDXRemote {...mdxSource} components={mdxComponents} />
        </article>
      </div>
    </>
  );
}
