// /pages/guides/index.js
import Link from "next/link";
import SEO from "../../components/SEO";
import { getAllGuidesMeta } from "../../src/lib/guides";

export async function getStaticProps() {
  const guides = getAllGuidesMeta();
  // sort newest first
  guides.sort((a, b) => (a.updated < b.updated ? 1 : -1));
  return { props: { guides } };
}

export default function GuidesIndex({ guides }) {
  const tokens = {
    brand: "#6b8e23",
    brandDark: "#556b2f",
    text: "#0f1a10",
    muted: "#4b5563",
    bg: "#fafaf7",
    card: "#ffffff",
    border: "#e5eadf"
  };

  return (
    <div
      style={{
        ["--brand"]: tokens.brand,
        ["--brand-dark"]: tokens.brandDark,
        ["--text"]: tokens.text,
        ["--muted"]: tokens.muted,
        ["--bg"]: tokens.bg,
        ["--card"]: tokens.card,
        ["--border"]: tokens.border,
        background: "var(--bg)",
        minHeight: "100vh",
        color: "var(--text)"
      }}
    >
      <SEO
        title="Guides"
        description="Actionable, low-BS guides to help you feel better and live cleaner."
        path="/guides"
      />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
        <h1 style={{ color: "var(--brand-dark)", letterSpacing: "-0.02em" }}>Guides</h1>

        <section
          style={{
            marginTop: 16,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16
          }}
        >
          {guides.map((g) => (
            <article
              key={g.slug}
              style={{
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 18,
                background: "var(--card)"
              }}
            >
              <h3 style={{ margin: "0 0 8px", color: "var(--brand-dark)" }}>
                <Link href={`/guides/${g.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {g.title}
                </Link>
              </h3>
              <p style={{ margin: "0 0 12px", color: "var(--muted)" }}>{g.excerpt}</p>
              <Link href={`/guides/${g.slug}`} style={{ color: "var(--brand)", fontWeight: 600, textDecoration: "none" }}>
                Read guide →
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
