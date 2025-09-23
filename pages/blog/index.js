// /pages/blog/index.js
import Link from "next/link";
import SEO from "../../components/SEO";
import { getAllPostsMeta } from "../../src/lib/blog";

export async function getStaticProps() {
  const posts = getAllPostsMeta();
  posts.sort((a, b) => (a.updated < b.updated ? 1 : -1));
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
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
      <SEO title="Blog" description="Latest articles from Wild & Well." path="/blog" />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
        <h1 style={{ color: "var(--brand-dark)" }}>Blog</h1>
        <section
          style={{
            marginTop: 16,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16
          }}
        >
          {posts.map((p) => (
            <article
              key={p.slug}
              style={{
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 18,
                background: "var(--card)"
              }}
            >
              <h3 style={{ margin: "0 0 8px", color: "var(--brand-dark)" }}>
                <Link href={`/blog/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {p.title}
                </Link>
              </h3>
              <p style={{ margin: "0 0 12px", color: "var(--muted)" }}>{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} style={{ color: "var(--brand)", fontWeight: 600, textDecoration: "none" }}>
                Read post →
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
