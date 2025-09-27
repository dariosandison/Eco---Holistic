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
    <main style={{ maxWidth: 840, margin: '40px auto', padding: 20 }}>
      <h1>Guides</h1>
      {guides.length === 0 ? (
        <p>No guides published yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, marginTop: 24 }}>
          {guides.map((g) => (
            <li key={g.slug} style={{ padding: '16px 0', borderBottom: '1px solid #eee' }}>
              <h3 style={{ margin: '0 0 6px' }}>
                <Link href={`/guides/${g.slug}`} style={{ textDecoration: 'none' }}>
                  {g.title || g.slug}
                </Link>
              </h3>
              {g.date && (
                <small style={{ color: '#888' }}>
                  {new Date(g.date).toLocaleDateString()}
                </small>
              )}
              {g.excerpt && <p style={{ marginTop: 8 }}>{g.excerpt}</p>}
              <div>
                <Link href={`/guides/${g.slug}`}>Read guide →</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
