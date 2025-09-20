import Link from 'next/link';
import SEO from '../components/SEO';
import { getAllGuides } from '../lib/guides';

export default function Home({ guides }) {
  return (
    <>
      <SEO path="/" />
      <main className="container">
        <div className="hero">
          <span className="kicker">Start here</span>
          <h1>Wild & Well</h1>
          <p>Practical guides to eco-friendly living and holistic wellness—short, clear, and actually doable.</p>
        </div>

        <h2 style={{marginTop:'1.2rem'}}>Latest Guides</h2>
        <section className="grid-cards">
          {guides.slice(0,6).map(g => (
            <article className="card" key={g.slug}>
              <div className="title" style={{marginBottom:4}}>{g.title}</div>
              <p className="muted" style={{minHeight:48}}>{g.excerpt}</p>
              <Link href={`/guides/${g.slug}`} style={{fontWeight:700,marginTop:6,display:'inline-block'}}>Read guide →</Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const guides = getAllGuides();
  return { props: { guides } };
}
