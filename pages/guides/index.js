// /pages/guides/index.js
import Link from "next/link";
import SEO from "@/components/SEO";
import { getAllGuides, getAllGuidesMeta } from "@/src/lib/guides";

export default function GuidesIndex({ guides }) {
  const clean = (guides || [])
    .filter(g => g?.meta && g.meta.draft !== true && (g.meta.status ? g.meta.status === "published" : true))
    .filter(g => g.meta.title && g.meta.description) // hide placeholders
    .sort((a, b) => (b.meta.date || "").localeCompare(a.meta.date || ""));

  return (
    <>
      <SEO
        title="Guides"
        description="All Wild & Well guides — curated, practical, and evidence-led."
        canonicalPath="/guides"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Guides", url: "/guides" },
        ]}
      />
      <h1>Guides</h1>
      <ul>
        {clean.map(({ slug, meta }) => (
          <li key={slug} style={{ margin: "0.75rem 0" }}>
            <Link href={`/guides/${slug}`}><strong>{meta.title}</strong></Link>
            <div style={{ color: "#667085" }}>{meta.description}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  // keep both exports available for older imports in the codebase
  const guides = await getAllGuides();
  return { props: { guides } };
}
