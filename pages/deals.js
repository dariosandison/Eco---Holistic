// /pages/deals.js
import SEO from "../components/SEO";
import AffiliateLink from "../components/AffiliateLink";
import deals from "../src/data/deals.json";

export async function getStaticProps() {
  // Return only serializable data
  return { props: { items: deals.items } };
}

export default function Deals({ items }) {
  const live = items.filter((d) => d.active !== false);

  return (
    <>
      <SEO
        title="Deals & Discounts"
        description="Latest wellness and low-tox deals we’d actually recommend."
        path="/deals"
      />
      <div className="container">
        <section className="hero">
          <h1>Deals</h1>
          <p className="muted">
            Fresh discounts on vetted products. Some links are affiliate (helps keep content free).
          </p>
        </section>

        <section className="section">
          <div className="cards">
            {live.map((d) => (
              <article className="card" key={d.title + d.url}>
                <h3 style={{ marginTop: 0 }}>
                  {d.brand ? `${d.brand} — ` : ""}{d.title}
                </h3>
                {d.note ? <p className="muted" style={{ marginTop: 8 }}>{d.note}</p> : null}
                <div style={{ display: "flex", gap: 10, marginTop: 12, alignItems: "center" }}>
                  <AffiliateLink className="btn" href={d.url}>Get deal</AffiliateLink>
                  {d.expires ? (
                    <span className="muted" style={{ fontSize: 13 }}>
                      Ends {d.expires}
                    </span>
                  ) : null}
                  {d.badge ? (
                    <span className="muted" style={{ fontSize: 13 }}>
                      {d.badge}
                    </span>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
