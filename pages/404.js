// pages/404.js
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SEO from '../components/SEO';

function list(dir) {
  const full = path.join(process.cwd(), 'content', dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => {
      const slug = f.replace(/\.(md|mdx)$/,'');
      const raw = fs.readFileSync(path.join(full, f), 'utf8');
      const { data } = matter(raw);
      const updated = data?.updated || data?.date || null;
      return {
        type: dir,
        slug,
        title: data?.title || slug.replace(/-/g,' '),
        date: updated ? new Date(updated).toISOString() : null
      };
    })
    .sort((a,b) => (b.date || '').localeCompare(a.date || ''))
    .slice(0, 8);
}

export async function getStaticProps() {
  const guides = list('guides');
  const reviews = list('reviews');
  const seo = {
    title: 'Not found — Wild & Well',
    description: 'We couldn’t find that page. Try our latest guides and reviews.',
    url: 'https://www.wild-and-well.store/404',
    noindex: true
  };
  return { props: { guides, reviews, seo } };
}

export default function NotFound({ guides, reviews, seo }) {
  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">Page not found</h1>
          <p className="post-meta">Try one of these instead:</p>

          {guides.length ? (
            <>
              <h2>Latest Guides</h2>
              <ul>
                {guides.map(g => (
                  <li key={`g-${g.slug}`}>
                    <Link href={`/guides/${g.slug}`}>{g.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {reviews.length ? (
            <>
              <h2>Latest Reviews</h2>
              <ul>
                {reviews.map(r => (
                  <li key={`r-${r.slug}`}>
                    <Link href={`/reviews/${r.slug}`}>{r.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <p>Or visit the <Link href="/guides">Guides</Link>, <Link href="/reviews">Reviews</Link>, or <Link href="/hubs">Hubs</Link> page.</p>
        </article>
      </div>
    </>
  );
}
