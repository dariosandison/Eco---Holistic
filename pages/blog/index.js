// pages/blog/index.js
import Link from 'next/link';
import Card from '../../components/Card';
import SeoHead from '../../components/SeoHead';
import { getAllDocs } from '../../lib/content';

export async function getStaticProps() {
  const posts = getAllDocs({
    dir: 'content/blog',
    fields: ['slug', 'title', 'excerpt', 'date', 'image', 'badge', 'deal', 'category'],
  });
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';

  return (
    <>
      <SeoHead
        title="Blog — Wild & Well"
        description="News, ideas, and notes on sleep, stress, movement, and low-tox living."
        url={`${SITE}/blog`}
        type="website"
      />

      <section className="hero">
        <h1
          style={{
            position: 'absolute',
            left: '-9999px',
            top: 'auto',
            width: 1,
            height: 1,
            overflow: 'hidden',
          }}
        >
          Wild & Well Blog
        </h1>

        <img
          src="/logo.svg"
          alt="Wild & Well"
          style={{
            display: 'block',
            margin: '0 auto 16px',
            width: 'auto',
            maxHeight: 'clamp(72px, 12vw, 140px)',
          }}
          onError={(e) => {
            e.currentTarget.src = '/logo-dark.svg';
            e.currentTarget.onerror = null;
          }}
        />

        <p>Latest thoughts, updates, and roundups from the Wild & Well team.</p>
        <div className="hero-links">
          <Link className="btn" href="/guides">Explore Guides</Link>
          <Link className="btn btn--ghost" href="/deals">Today&apos;s Deals</Link>
        </div>
      </section>

      <h2 className="section-title">Latest Posts</h2>
      {posts.length === 0 ? (
        <p style={{ color: '#f6f1e3' }}>No posts yet.</p>
      ) : (
        <div className="grid">
          {posts.map((p) => (
            <Card key={p.slug} {...p} />
          ))}
        </div>
      )}
    </>
  );
}
