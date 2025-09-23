// /pages/recommended.js
import SEO from "../components/SEO";
import AffiliateLink from "../components/AffiliateLink";
import data from "../src/data/recommended.json";

export async function getStaticProps() {
  // Ensure we only return serializable data
  return { props: { categories: data.categories } };
}

export default function Recommended({ categories }) {
  return (
    <>
      <SEO
        title="Recommended Picks"
        description="Curated low-tox, wellness, and eco-friendly products that we genuinely like."
        path="/recommended"
      />
      <div className="container">
        <section className="hero">
          <h1>Recommended</h1>
          <p className="muted">
            Hand-picked items that support healthier living. Some links are affiliate (at no extra cost).
          </p>
        </section>

        {categories.map((cat) => (
          <section className="section" key={cat.slug}>
            <h2 style={{ margin: "0 0 12px", color: "var(--brand-dark)" }}>
              {cat.title}
            </h2>
            <div className="cards">
              {cat.items.map((item) => (
                <article className="card" key={item.title + item.url}>
                  <h3 style={{ marginTop: 0 }}>
                    {item.brand ? `${item.brand} — ` : ""}
                    {item.title}
                  </h3>
                  {item.note ? (
                    <p className="muted" style={{ marginTop: 8 }}>{item.note}</p>
                  ) : null}
                  <div style={{ display: "flex", gap: 10, marginTop: 12, alignItems: "center" }}>
                    <AffiliateLink className="btn" href={item.url}>
                      View
                    </AffiliateLink>
                    {item.badge ? (
                      <span className="muted" style={{ fontSize: 13 }}>{item.badge}</span>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
