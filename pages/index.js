// pages/index.js
import Link from 'next/link';
import { getAllDocs } from '../lib/content';

export async function getStaticProps() {
  const docs = getAllDocs({
    dir: 'content/guides',
    fields: ['slug', 'title', 'excerpt', 'date'],
  });
  return { props: { docs } };
}

export default function Home({ docs }) {
  return (
    <main style={{ maxWidth: 840, margin: '40px auto', padding: 20 }}>
      <h1 style={{ marginBottom: 8 }}>Wild and Well</h1>
      <p style={{ marginTop: 0, color: '#666' }}>
        Practical wellness guides. Explore our latest pieces below.
      </p>

      {docs.length === 0 ? (
        <p>No guides published yet. Check back soon.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, marginTop: 24 }}>
          {docs.map((post) => (
            <li key={post.slug} style={{ padding: '16px 0', borderBottom: '1px solid #eee' }}>
              <h3 style={{ margin: '0 0 6px' }}>
                <Link href={`/guides/${post.slug}`} style={{ textDecoration: 'none' }}>
                  {post.title || post.slug}
                </Link>
              </h3>
              {post.date && (
                <small style={{ color: '#888' }}>
                  {new Date(post.date).toLocaleDateString()}
                </small>
              )}
              {post.excerpt && <p style={{ marginTop: 8 }}>{post.excerpt}</p>}
              <div>
                <Link href={`/guides/${post.slug}`}>Read guide →</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
