// pages/guides/index.js
import Link from 'next/link';
import { getAllDocs } from '../../lib/content';

export async function getStaticProps() {
  const guides = getAllDocs({
    dir: 'content/guides',
    fields: ['slug', 'title', 'excerpt', 'date'],
  });
  return { props: { guides } };
}

export default function GuidesIndex({ guides }) {
  return (
    <>
      <h1>Guides</h1>
      {guides.length === 0 ? (
        <p>No guides published yet.</p>
      ) : (
        <div className="grid">
          {guides.map((g) => (
            <article key={g.slug} className="card">
              <h3 style={{ margin: 0 }}>
                <Link href={`/guides/${g.slug}`}>{g.title || g.slug}</Link>
              </h3>
              {g.date && <small>{new Date(g.date).toLocaleDateString()}</small>}
              {g.excerpt && <p>{g.excerpt}</p>}
              <div style={{ marginTop: 8 }}>
                <Link href={`/guides/${g.slug}`}>Read guide →</Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
