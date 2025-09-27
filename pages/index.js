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
    <div>
      <h1 style={{ marginBottom: 8 }}>Wild & Well</h1>
      <p style={{ marginTop: 0, color: '#667085' }}>
        Actionable guides and clean product picks.
      </p>
      <ul style={{ marginTop: 12 }}>
        <li><Link href="/guides">Explore Guides</Link></li>
        <li><Link href="/blog">Read the Blog</Link></li>
        <li><Link href="/deals">Today&apos;s Deals</Link></li>
      </ul>

      <h2 style={{ marginTop: 24 }}>Latest Guides</h2>
      {docs.length === 0 ? (
        <p>No guides published yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {docs.map((post) => (
            <li key={post.slug} style={{ padding: '16px 0', borderBottom: '1px solid #eee' }}>
              <h3 style={{ margin: 0 }}>
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
