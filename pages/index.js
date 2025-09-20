import Link from 'next/link';
import SEO from '../../components/SEO';
import { getAllGuides } from '../../lib/guides';

export default function Guides({ guides }) {
  return (
    <>
      <SEO title="Guides • Wild & Well" path="/guides" />
      <main className="container">
        <div className="hero">
          <span className="kicker">Guides</span>
          <h1>Eco & Holistic Living, Made Doable</h1>
          <p>Clear, practical guides—short on fluff, big on wins.</p>
        </div>

        <section className="grid-cards">
          {guides.map(g => (
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
