import SEO from "../components/SEO";
<SEO title="Deals" path="/deals" />

import Link from "next/link";
import SEO from "../components/SEO";

export default function Deals() {
  return (
    <>
      <SEO title="Deals & Picks — Wild & Well" description="Curated eco & wellness picks and roundups." />
      <main className="container">
        <h1 className="h1">Deals &amp; Picks</h1>
        <p className="muted">Quick links to our most useful buying guides.</p>
        <div className="post-grid" style={{marginTop:16}}>
          <article className="card">
            <h3 style={{margin:"0 0 8px"}}>Best Reusable Water Bottles (2025)</h3>
            <p className="muted">Leak-proof, insulated, and plastic-free picks.</p>
            <Link href="/posts/best-reusable-water-bottles-2025">Read →</Link>
          </article>
          <article className="card">
            <h3 style={{margin:"0 0 8px"}}>Best Herbal Teas for Sleep (2025)</h3>
            <p className="muted">Science-backed blends to unwind at night.</p>
            <Link href="/posts/best-herbal-teas-for-sleep-2025">Read →</Link>
          </article>
        </div>
      </main>
    </>
  );
}

