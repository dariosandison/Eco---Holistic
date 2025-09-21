import Link from "next/link";
import SEO from "../../components/SEO";
import { getAllGuidesMeta } from "../../lib/md";

export default function Guides({ guides }) {
  return (
    <>
      <SEO title="All Guides" description="Explore all Wild & Well guides." path="/guides/" />
      <main className="container" style={{padding:'18px 0 28px'}}>
        <h1 style={{marginBottom:6}}>All Guides</h1>
        <p style={{color:'#4b5563'}}>Practical, readable deep-dives with clean product picks.</p>
        <div className="grid grid-3" style={{marginTop:16}}>
          {guides.map(g => (
            <Link href={`/guides/${g.slug}/`} key={g.slug} className="card">
              <div className="badge" style={{marginBottom:8}}>{(g.meta.tags || [])[0] || "Guide"}</div>
              <h3 style={{margin:'6px 0'}}>{g.meta.title}</h3>
              <p style={{color:'#4b5563'}}>{g.meta.description}</p>
              <small style={{color:'#6b7280'}}>{g.meta.date} • {g.readingTime}</small>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const guides = await getAllGuidesMeta();
  return { props: { guides } };
}
