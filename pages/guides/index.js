// /pages/guides/index.js
import Head from "next/head";
import Link from "next/link";

export default function GuidesIndex({ guides }) {
  return (
    <>
      <Head>
        <title>Guides | Wild &amp; Well</title>
        <meta
          name="description"
          content="All Wild & Well guides on health, sustainability, and low-tox living."
        />
      </Head>

      <main className="container" style={{ maxWidth: 920, margin: "0 auto", padding: "2rem 1rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Guides</h1>
        <p style={{ marginBottom: "2rem", color: "#555" }}>
          Curated, practical guides to help you live wild &amp; well.
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1rem" }}>
          {guides.map(({ slug, meta }) => (
            <li
              key={slug}
              style={{
                border: "1px solid #e6e6e6",
                borderRadius: 12,
                padding: "1rem 1.25rem",
                background: "#fff",
              }}
            >
              <Link href={`/guides/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <h2 style={{ margin: 0, fontSize: "1.25rem" }}>{meta.title}</h2>
                <p style={{ margin: "0.5rem 0 0", color: "#666" }}>{meta.description}</p>
                {meta.date && (
                  <p style={{ margin: "0.5rem 0 0", color: "#888", fontSize: ".9rem" }}>
                    {meta.date}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // IMPORTANT: import on the server only to avoid bundling 'fs' in the client build
  const { getAllGuides } = await import("../../src/lib/guides");
  const all = await getAllGuides();

  // hide drafts from the public list
  const guides = all
    .filter((g) => !g.meta.draft)
    .sort((a, b) => String(b.meta.date || "").localeCompare(String(a.meta.date || "")));

  return { props: { guides } };
}
