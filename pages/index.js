// pages/index.js
import Link from 'next/link';
import Newsletter from '../components/Newsletter';
import { getAllDocs } from '../lib/content';

export async function getStaticProps() {
  const docs = getAllDocs({
    dir: 'content/guides',
    fields: ['slug', 'title', 'excerpt', 'date'],
  });
  return { props: { docs } };
}

export default function Home({ docs }) {
  const latest = docs.slice(0, 6);

  return (
    <>
      <section className="hero">
        <h1 style={{ margin: '0 0 6px' }}>Wild & Well</h1>
        <p style={{ margin: 0, color: 'var(--muted)' }}>
          Actionable guides and clean product picks to help you sleep better, stress less, and move more.
        </p>
        <ul style={{ marginTop: 12 }}>
          <li><Link href="/guides">Explore Guides</Link></li>
          <li><Link href="/deals">Today&apos;s Deals</Link></li>
          <li><Link href="/blog">Read the Blog</Link></li>
        </ul>
      </section>

      <Newsletter />

      <h2 className="section-title">Latest Guides</h2>
      {latest.length === 0 ? (
        <p>No guides published yet.</p>
      ) : (
        <div className="grid">
          {latest.map((post) => (
            <article key={post.slug} className="card">
              <h3 style={{ margin: 0 }}>
                <Link href={`/guides/${post.slug}`}>{post.title || post.slug}</Link>
              </h3>
              {post.date && <small>{new Date(post.date).toLocaleDateString()}</small>}
              {post.excerpt && <p>{post.excerpt}</p>}
              <div style={{ marginTop: 8 }}>
                <Link href={`/guides/${post.slug}`}>Read guide →</Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
