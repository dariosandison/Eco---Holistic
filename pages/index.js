// pages/index.js
import Link from 'next/link';
import SeoHead from '../components/SeoHead';
import { getAllDocs } from '../lib/content';

export async function getStaticProps() {
  const guides = getAllDocs({
    dir: 'content/guides',
    fields: ['title', 'excerpt', 'date', 'image']
  }).slice(0, 6); // latest 6
  return { props: { guides } };
}

export default function Home({ guides }) {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
  return (
    <>
      <SeoHead
        title="Wild & Well — Smarter Wellness Picks"
        description="No-nonsense wellness guides, clean product picks, and smart habits."
        url={SITE}
        type="website"
      />
      <header className="site-header">
        <div className="container navbar">
          <div className="logo">
            <img src="/logo.svg" alt="" />
            Wild & Well
          </div>
          <nav className="nav">
            <Link href="/guides">Guides</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h1 style={{ marginTop: 0 }}>Feel better. Buy smarter.</h1>
          <p>We test, simplify, and recommend products we actually use — with clear reasons why.</p>
          <div className="hero-links">
            <Link className="btn" href="/guides">Explore Guides</Link>
            <Link className="btn btn--ghost" href="/blog">Read the Blog</Link>
          </div>
        </section>

        <h2 className="section-title">Latest Guides</h2>
        <div className="grid">
          {guides.map((g) => (
            <article className="card" key={g.slug}>
              {g.image ? <img src={g.image} alt="" className="card-img" /> : null}
              <div className="card-body">
                <h3><Link href={`/guides/${g.slug}`}>{g.title}</Link></h3>
                <small>{g.date ? new Date(g.date).toLocaleDateString() : ''}</small>
                {g.excerpt ? <p>{g.excerpt}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
