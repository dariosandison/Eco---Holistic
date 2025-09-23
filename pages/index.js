// /pages/index.js
import Link from "next/link";
import SEO from "../components/SEO";
import { getAllGuidesMeta } from "../src/lib/guides";
import { getAllPostsMeta } from "../src/lib/blog";

export async function getStaticProps() {
  const guides = getAllGuidesMeta().sort((a,b)=> (a.updated < b.updated ? 1 : -1)).slice(0,6);
  const posts = getAllPostsMeta().sort((a,b)=> (a.updated < b.updated ? 1 : -1)).slice(0,3);
  return { props: { guides, posts } };
}

export default function Home({ guides, posts }) {
  return (
    <>
      <SEO
        title="Feel better. Live cleaner."
        description="Actionable guides, low-tox picks, and no-BS wellness tips."
        path="/"
      />
      <div className="container">
        <section className="hero">
          <h1>Feel better. Live cleaner.</h1>
          <p>Practical guides, curated picks, and simple habits that actually help.</p>
          <div style={{marginTop:16}}>
            <Link href="/guides" className="btn">Browse Guides</Link>
          </div>
        </section>

        <section className="section">
          <h2 style={{margin:"0 0 12px", color:"var(--brand-dark)"}}>Featured Guides</h2>
          <div className="cards">
            {guides.map(g => (
              <article className="card" key={g.slug}>
                <h3>
                  <Link href={`/guides/${g.slug}`}>{g.title}</Link>
                </h3>
                <p className="muted" style={{margin:"0 0 12px"}}>{g.excerpt}</p>
                <Link href={`/guides/${g.slug}`}>Read guide →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 style={{margin:"0 0 12px", color:"var(--brand-dark)"}}>Latest from the Blog</h2>
          <div className="cards">
            {posts.map(p => (
              <article className="card" key={p.slug}>
                <h3>
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className="muted" style={{margin:"0 0 12px"}}>{p.excerpt}</p>
                <Link href={`/blog/${p.slug}`}>Read post →</Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
