// /pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  // Theme tokens (olive)
  const palette = {
    brand: "#6b8e23",
    brandDark: "#556b2f",
    text: "#0f1a10",
    muted: "#4b5563",
    bg: "#fafaf7",
    card: "#ffffff",
    border: "#e5eadf",
  };

  // helpers using CSS variables so future restyles are easy
  const btnPrimary = {
    display: "inline-block",
    background: "var(--brand)",
    color: "#ffffff",
    padding: "10px 16px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 600,
  };

  const btnGhost = {
    display: "inline-block",
    background: "transparent",
    color: "var(--brand)",
    padding: "10px 16px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 600,
    border: "1px solid var(--brand)",
  };

  const card = {
    border: "1px solid var(--border)",
    borderRadius: "16px",
    padding: "18px",
    background: "var(--card)",
  };

  return (
    <>
      <Head>
        <title>Wild &amp; Well — Feel better. Live cleaner.</title>
        <meta
          name="description"
          content="Actionable, low-BS guides on wellness and low-tox living. Start with our beginner-friendly checklists and trusted recommendations."
        />
      </Head>

      {/* Scoped theme vars so we don't need global CSS right now */}
      <div
        style={{
          // CSS variables
          ["--brand"]: palette.brand,
          ["--brand-dark"]: palette.brandDark,
          ["--text"]: palette.text,
          ["--muted"]: palette.muted,
          ["--bg"]: palette.bg,
          ["--card"]: palette.card,
          ["--border"]: palette.border,

          // page chrome
          minHeight: "100vh",
          background: "var(--bg)",
          color: "var(--text)",
        }}
      >
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
                color: "var(--brand-dark)",
                textDecoration: "none",
              }}
            >
              Wild &amp; Well
            </a>

            <nav style={{ display: "flex", gap: 16 }}>
              {[
                ["Guides", "/guides"],
                ["Blog", "/blog"],
                ["Recommended", "/recommended"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  style={{ color: "var(--text)", textDecoration: "none" }}
                >
                  {label}
                </Link>
              ))}
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
                color: "var(--brand-dark)",
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
                color: "var(--muted)",
              }}
            >
              Actionable, low-BS guides on wellness and low-tox living. Start with
              simple, sustainable changes—and products we actually use.
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
              <h3 style={{ margin: "0 0 8px", fontSize: 18, color: "var(--brand-dark)" }}>
                Starter Guides
              </h3>
              <p style={{ margin: "0 0 12px", color: "var(--muted)" }}>
                Beginner-friendly checklists to clean up your home, sleep better, and reduce toxins.
              </p>
              <Link
                href="/guides"
                style={{ color: "var(--brand)", textDecoration: "none", fontWeight: 600 }}
              >
                Browse Guides →
              </Link>
            </article>

            <article style={card}>
              <h3 style={{ margin: "0 0 8px", fontSize: 18, color: "var(--brand-dark)" }}>
                Product Recommendations
              </h3>
              <p style={{ margin: "0 0 12px", color: "var(--muted)" }}>
                Curated essentials we’ve vetted for quality, safety, and value.
              </p>
              <Link
                href="/recommended"
                style={{ color: "var(--brand)", textDecoration: "none", fontWeight: 600 }}
              >
                See Picks →
              </Link>
            </article>

            <article style={card}>
              <h3 style={{ margin: "0 0 8px", fontSize: 18, color: "var(--brand-dark)" }}>
                Latest Articles
              </h3>
              <p style={{ margin: "0 0 12px", color: "var(--muted)" }}>
                Practical tips, habits, and how-tos to feel better—without the overwhelm.
              </p>
              <Link
                href="/blog"
                style={{ color: "var(--brand)", textDecoration: "none", fontWeight: 600 }}
              >
                Read the Blog →
              </Link>
            </article>
          </section>

          {/* Footer */}
          <footer
            style={{
              marginTop: 48,
              padding: "18px 0 8px",
              borderTop: "1px solid var(--border)",
              color: "var(--muted)",
              fontSize: 14,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <span>© {new Date().getFullYear()} Wild &amp; Well</span>
              <div style={{ display: "flex", gap: 16 }}>
                <Link href="/privacy" style={{ color: "var(--muted)", textDecoration: "none" }}>
                  Privacy
                </Link>
                <Link href="/terms" style={{ color: "var(--muted)", textDecoration: "none" }}>
                  Terms
                </Link>
                <Link href="/disclosure" style={{ color: "var(--muted)", textDecoration: "none" }}>
                  Disclosure
                </Link>
                <Link href="/cookies" style={{ color: "var(--muted)", textDecoration: "none" }}>
                  Cookies
                </Link>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
