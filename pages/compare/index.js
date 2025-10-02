// pages/compare/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import SEO from '../../components/SEO';

function listCompare() {
  const dir = path.join(process.cwd(), 'content/compare');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => {
      const slug = f.replace(/\.(md|mdx)$/,'');
      const raw = fs.readFileSync(path.join(dir, f), 'utf8');
      const { data } = matter(raw);
      const updated = data?.updated || data?.date || null;
      return {
        slug,
        title: data?.title || slug.replace(/-/g,' '),
        description: data?.description || '',
        date: updated ? new Date(updated).toISOString() : null
      };
    })
    .sort((a,b) => (b.date || '').localeCompare(a.date || ''));
}

export async function getStaticProps() {
  const items = listCompare();
  const seo = {
    title: 'Compare — Wild & Well',
    description: 'Head-to-head comparisons of products we recommend.',
    url: 'https://www.wild-and-well.store/compare',
    breadcrumbs: [
      { name: 'Home', item: 'https://www.wild-and-well.store/' },
      { name: 'Compare', item: 'https://www.wild-and-well.store/compare' }
    ]
  };
  return { props: { items, seo }, revalidate: 60 * 60 * 12 };
}

export default function CompareIndex({ items, seo }) {
  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">Compare</h1>
          <ul>
            {items.map(x => (
              <li key={x.slug}>
                <Link href={`/compare/${x.slug}`}>{x.title}</Link>
                {x.description ? <> — {x.description}</> : null}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}
