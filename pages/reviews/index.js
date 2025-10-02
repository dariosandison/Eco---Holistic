// pages/reviews/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import SEO from '../../components/SEO';

function listReviews() {
  const dir = path.join(process.cwd(), 'content', 'reviews');
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
  const items = listReviews();
  const itemList = items.slice(0, 25).map((x, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: x.title,
    url: `https://www.wild-and-well.store/reviews/${x.slug}`
  }));
  const seo = {
    title: 'Reviews — Wild & Well',
    description: 'Independent, ingredient-aware reviews of wellness and low-tox products.',
    url: 'https://www.wild-and-well.store/reviews',
    breadcrumbs: [
      { name: 'Home', item: 'https://www.wild-and-well.store/' },
      { name: 'Reviews', item: 'https://www.wild-and-well.store/reviews' }
    ]
  };
  return { props: { items, itemList, seo }, revalidate: 60 * 60 * 12 };
}

export default function ReviewsIndex({ items, itemList, seo }) {
  return (
    <>
      <SEO {...seo} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: itemList
        })}}
      />
      <div className="container">
        <article className="post">
          <h1 className="post-title">Reviews</h1>
          <ul>
            {items.map(x => (
              <li key={x.slug}>
                <Link href={`/reviews/${x.slug}`}>{x.title}</Link>
                {x.description ? <> — {x.description}</> : null}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}
