// /pages/index.js
import Head from "next/head";
import Link from "next/link";

const btnPrimary = {
  display: "inline-block",
  background: "#0ea5e9",
  color: "#ffffff",
  padding: "10px 16px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 600,
};

const btnGhost = {
  display: "inline-block",
  background: "#ffffff",
  color: "#0ea5e9",
  padding: "10px 16px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 600,
  border: "1px solid #0ea5e9",
};

const card = {
  border: "1px solid #e5e7eb",
  borderRadius: "16px",
  padding: "18px",
  background: "#ffffff",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Wild &amp; Well — Feel better. Live cleaner.</title>
        <meta
          name="description"
          content="Actionable, low-BS guides on wellness and low-tox living. Start with our beginner-friendly checklists and trusted recommendations."
        />
      </Head>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "24px" }}>
        {/* Header */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 0 20px",
          }}
        >
          <a
            href="/"
            style={{
              fontWeight: 800,
              fontSize: 20,
              letterSpacing: "-0.02em",
              color: "#0f172a",
              textDecoration: "none",
            }}
          >
            Wild &amp; Well
          </a>

          <nav style={{ display: "flex", gap: 16 }}>
            <Link href="/guides" style={{ color: "#0f172a", textDecoration: "none" }}>
              Guides
            </Link>
            <Link href="/blog" style={{ color: "#0f172a", textDecoration: "none" }}>
              Blog
            </Link>
            <Link href="/recommended" style={{ color: "#0f172a", textDecoration: "none" }}>
              Recommended
            </Link>
            <Link href="/about" style={{ color: "#0f172a", textDecoration: "none" }}>
              About
            </Link>
            <Link href="/contact" style={{ color: "#0f172a", textDecoration: "none" }}>
              Contact
            </Link>
          </nav>
        </header>

        {/* Hero */}
        <section style={{ padding: "30px 0 10px" }}>
          <h1
            style={{
              fontSize: 40,
              lineHeight: 1.1,
              margin: "0 0 10px",
              letterSpacing: "-0.02em",
              color: "#0f172a",
            }}
          >
            Feel better. Live cleaner.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 720,
              margin: "0 0 18px",
              color: "#334155",
            }}
          >
            Actionable, low-BS guides on wellness and low-tox living. Start with simple,
            sustainable changes—and products we actually use.
          </p>

          <div style={{ display: "flex", gap: 12 }}>
            <Link href="/guides" style={btnPrimary}>
              Explore Guides
            </Link>
            <Link href="/recommended" style={btnGhost}>
              Our Picks
            </Link>
          </div>
        </section>

        {/* Quick cards */}
        <section
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          <article style={card}>
            <h3 style={{ margin: "0 0 8px", fontSize: 18, color: "#0f172a" }}>
              Starter Guides
            </h3>
            <p style={{ margin: "0 0 12px", color: "#475569" }}>
              Beginner-friendly checklists to clean up your home, sleep better, and reduce toxins.
            </p>
            <Link href="/guides" style={{ color: "#0ea5e9", textDecoration: "none", fontWeight: 600 }}>
              Browse Guides →
            </Link>
          </article>

          <article style={card}>
            <h3 style={{ margin: "0 0 8px", fontSize: 18, color: "#0f172a" }}>
              Product Recommendations
            </h3>
            <p style={{ margin: "0 0 12px", color: "#475569" }}>
              Curated essentials we’ve vetted for quality, safety, and value.
            </p>
            <Link href="/recommended" style={{ color: "#0ea5e9", textDecoration: "none", fontWeight: 600 }}>
              See Picks →
            </Link>
          </article>

          <article style={card}>
            <h3 style={{ margin: "0 0 8px", fontSize: 18, color: "#0f172a" }}>
              Latest Articles
            </h3>
            <p style={{ margin: "0 0 12px", color: "#475569" }}>
              Practical tips, habits, and how-tos to feel better—without the overwhelm.
            </p>
            <Link href="/blog" style={{ color: "#0ea5e9", textDecoration: "none", fontWeight: 600 }}>
              Read the Blog →
            </Link>
          </article>
        </section>

        {/* Footer */}
        <footer
          style={{
            marginTop: 48,
            padding: "18px 0 8px",
            borderTop: "1px solid #e5e7eb",
            color: "#64748b",
            fontSize: 14,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <span>© {new Date().getFullYear()} Wild &amp; Well</span>
            <div style={{ display: "flex", gap: 16 }}>
              <Link href="/privacy" style={{ color: "#64748b", textDecoration: "none" }}>
                Privacy
              </Link>
              <Link href="/terms" style={{ color: "#64748b", textDecoration: "none" }}>
                Terms
              </Link>
              <Link href="/disclosure" style={{ color: "#64748b", textDecoration: "none" }}>
                Disclosure
              </Link>
              <Link href="/cookies" style={{ color: "#64748b", textDecoration: "none" }}>
                Cookies
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
