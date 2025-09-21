import Link from "next/link";
import SEO from "../components/SEO";
import { getAllGuidesMeta } from "../lib/md";

export default function Home({ guides }) {
  const topics = ["Water", "Cleaning", "Supplements", "Protein", "Sauna", "NEAT"];

  return (
    <>
      <SEO
        title="Wild & Well — Eco & Holistic Guides"
        description="Your guide to eco-living, holistic health, and mindful wellness."
        path="/"
        image="/cover.png"
        type="website"
      />

      <section className="hero">
        <div className="container">
          <h1>Wild & Well</h1>
          <p className="sub">Your guide to eco-living, holistic health, and mindful wellness.</p>
        </div>
      </section>

      <main className="container">
        {/* Topics pills */}
        <div className="tags" aria-label="Topics">
          {topics.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Latest guides */}
        <section>
          <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
            <h2 style={{margin:'6px 0'}}>Latest Guides</h2>
            <Link className="link" href="/guides/">View all</Link>
          </div>
          <div className="grid grid-3">
            {guides.slice(0,6).map(g => (
              <Link href={`/guides/${g.slug}/`} key={g.slug} className="card">
                <div className="badge" style={{marginBottom:8}}>{(g.meta.tags || [])[0] || "Guide"}</div>
                <h3 style={{margin:'6px 0'}}>{g.meta.title}</h3>
                <p style={{color:'#4b5563'}}>{g.meta.description}</p>
                <small style={{color:'#6b7280'}}>{g.meta.date} • {g.readingTime}</small>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const guides = await getAllGuidesMeta();
  return { props: { guides } };
}
