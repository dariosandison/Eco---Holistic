// /pages/search.js
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SEO from "../components/SEO";

export default function SearchPage() {
  const [q, setQ] = useState("");
  const [index, setIndex] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((data) => mounted && (setIndex(Array.isArray(data) ? data : []), setLoaded(true)))
      .catch(() => mounted && setLoaded(true));
    return () => { mounted = false; };
  }, []);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    // simple fuzzy split-match across haystack
    const parts = term.split(/\s+/).filter(Boolean);
    return index
      .map((r) => ({ r, score: score(parts, r.haystack || "") }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 50)
      .map((x) => x.r);
  }, [q, index]);

  return (
    <>
      <SEO title="Search" description="Find guides and articles fast." path="/search" />
      <div className="container">
        <section className="hero">
          <h1>Search</h1>
          <p className="muted">Find any guide or blog post.</p>
          <div style={{ marginTop: 16 }}>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Try: water filter, cookware, sleep…"
              aria-label="Search"
              className="input"
              style={{ width: "100%", maxWidth: 560 }}
            />
          </div>
        </section>

        <section className="section">
          {!loaded ? (
            <p className="muted">Loading index…</p>
          ) : q.trim() === "" ? (
            <p className="muted">Start typing to see results.</p>
          ) : results.length === 0 ? (
            <p>No results for “{q}”.</p>
          ) : (
            <>
              <p className="muted" style={{ marginBottom: 12 }}>
                {results.length} result{results.length > 1 ? "s" : ""} for “{q}”
              </p>
              <div className="cards">
                {results.map((item) => (
                  <article className="card" key={item.url}>
                    <p className="muted" style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5 }}>
                      {item.type}
                    </p>
                    <h3 style={{ marginTop: 6 }}>
                      <Link href={item.url}>{highlight(item.title, q)}</Link>
                    </h3>
                    <p style={{ marginTop: 8 }}>{highlight(item.excerpt, q)}</p>
                    <p className="muted" style={{ marginTop: 8, fontSize: 12 }}>
                      {item.tags?.length ? item.tags.join(" • ") + " · " : ""}
                      {formatDate(item.date)}
                    </p>
                    <div style={{ marginTop: 10 }}>
                      <Link href={item.url} className="btn">Open</Link>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
}

// ---------- tiny utils ----------
function score(parts, haystack) {
  if (!haystack) return 0;
  let s = 0;
  for (const p of parts) {
    if (haystack.includes(p)) s += 1;
  }
  // boost if full phrase appears
  const phrase = parts.join(" ");
  if (phrase && haystack.includes(phrase)) s += 1.5;
  return s;
}
function highlight(text = "", q = "") {
  if (!q) return text;
  const words = q.trim().split(/\s+/).filter(Boolean).map(escapeRegExp);
  if (!words.length) return text;
  const re = new RegExp("(" + words.join("|") + ")", "ig");
  return (
    <>
      {String(text).split(re).map((chunk, i) =>
        re.test(chunk) ? <mark key={i}>{chunk}</mark> : <span key={i}>{chunk}</span>
      )}
    </>
  );
}
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function formatDate(s) {
  try {
    const d = new Date(s + "T00:00:00Z");
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return s;
  }
}
