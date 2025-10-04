import SEO from "../components/SEO";
import Image from "next/image";
// pages/index.jsx
import Link from "next/link";
import GuideCard from "../components/GuideCard";
import { getAllGuides } from "../lib/content";

export default function Home({ latest = [] }) {
  return (
    <>
      <SEO title="Wild & Well — Holistic health, natural healing & eco living" />
      {/* Hero with logo */}
      <section className="hero" style={{ marginTop: 16 }}>
        <div className="hero-inner">
          <div className="hero-logo">
            <Image
              src="/logo.svg"
              alt="Wild & Well logo"
              width={320}
              height={140}
              priority
              onError={(e) => {
                e.currentTarget.src = "/logo.png";
              }}
            />
          </div>
        </div>

        <p style={{ textAlign: "center", margin: "16px 0 0" }}>
          Actionable guides and clean product picks to help you sleep better,
          stress less, and move more.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: 16,
          }}
        >
          <Link className="btn" href="/guides">
            Explore Guides
          </Link>
          <Link className="btn" href="/deals" style={{ background: "#6f7f6e" }}>
            Today’s Deals
          </Link>
        </div>
      </section>

      {/* Latest Guides */}
      <section style={{ marginTop: 28 }}>
        <h2 style={{ color: "var(--surface)", margin: "0 0 12px" }}>
          Latest Guides
        </h2>
        <div className="grid-guides">
          {latest.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const all = getAllGuides();
  return {
    props: {
      latest: all.slice(0, 6),
    },
  };
}
