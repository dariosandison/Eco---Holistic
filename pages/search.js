// pages/search.js
import Head from "next/head";
import { useMemo, useState } from "react";

export default function Search() {
  const canonical = "https://www.wild-and-well.store/search";
  const [q, setQ] = useState("");

  // 🔎 Index of key pages — add new entries as your site grows
  const index = useMemo(
    () => [
      {
        title: "Home",
        url: "/",
        blurb: "Latest posts, guides and eco-wellness picks.",
        tags: ["home", "wild and well", "eco", "holistic"],
      },
      {
        title: "Recommended Products",
        url: "/recommended",
        blurb: "Curated eco-friendly and holistic items.",
        tags: ["products", "shopping", "amazon", "picks"],
      },
      {
        title: "About",
        url: "/about",
        blurb: "What we do and how we choose products.",
        tags: ["about", "mission", "eeat"],
      },
      {
        title: "Affiliate Disclosure",
        url: "/disclosure",
        blurb: "How affiliate links support the site.",
        tags: ["disclosure", "affiliate", "amazon"],
      },
      {
        title: "Privacy Policy",
        url: "/privacy",
        blurb: "Data, analytics, and your choices.",
        tags: ["privacy", "gdpr", "analytics"],
      },
      {
        title: "Cookies Policy",
        url: "/cookies",
        blurb: "What cookies we use and how to control them.",
        tags: ["cookies", "ga4"],
      },
      // 👉 Add your guide pages here as you publish them:
      // { title: "Low-Waste Shower Kit", url: "/guides/low-waste-shower-kit", blurb: "Simple, sustainable bathroom swaps.", tags: ["bathroom", "low waste", "plastic free"] },
      // { title: "Water Filters", url: "/guides/water-filters", blurb: "Cleaner drinking water at home.", tags: ["kitchen", "filters"] },
      // { title: "Safer Cleaning", url: "/guides/safer-cleaning", blurb: "Less-harsh cleaning products that work.", tags: ["cleaning", "low-tox"] },
      // { title: "Minimal-Ingredient Cereals", url: "/guides/minimal-ingredient-cereals", blurb: "Low-ingredient breakfast options.", tags: ["food", "pantry"] },
    ],
    []
  );

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return index;
    const words = needle.split(/\s+/);
    return index.filter((item) => {
      const hay = `${item.title} ${item.blurb} ${item.tags.join(" ")}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }, [q, index]);

  return (
    <>
      <Head>
        <title>Search • Wild & Well</title>
        <meta
          name="description"
          content="Search Wild & Well posts and guides."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Search • Wild & Well" />
        <meta property="og:description" content="Find posts, guides, and product picks." />
        <meta property="og:url" content={canonical} />
      </Head>

      <main className="container page">
        <h1>Search</h1>
        <div className="bar">
          <input
            type="search"
            placeholder="Try: water filter, low-waste, diffuser…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search Wild & Well"
          />
        </div>

        <ul className="results">
          {results.length === 0 && <li className="empty">No results yet. Try a different query.</li>}
          {results.map((r) => (
            <li key={r.url} className="hit">
              <a href={r.url}>
                <h3>{r.title}</h3>
                <p>{r.blurb}</p>
                <span className="url">{r.url}</span>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <style jsx>{`
        .page { margin: 2.5rem auto; }
        .bar { margin: 12px 0 16px; }
        input[type="search"]{
          width: 100%;
          font-size: 1rem;
          padding: 12px 14px;
          border: 1px solid var(--border);
          border-radius: 12px;
          outline: none;
        }
        .results { list-style: none; padding: 0; margin: 10px 0 0; }
        .hit {
          border: 1px solid var(--border);
          border-radius: 12px;
          margin: 10px 0;
          background: #fff;
        }
        .hit a { display: block; padding: 14px; color: inherit; text-decoration: none; }
        .hit a:hover h3 { text-decoration: underline; }
        h3 { margin: 0 0 6px; font-size: 1.05rem; }
        p { margin: 0 0 8px; color: var(--muted); }
        .url { font-size: .85rem; color: #6b7280; }
        .empty { color: #6b7280; margin-top: 10px; }
      `}</style>
    </>
  );
}
