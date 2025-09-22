// pages/guides/index.js
import Link from "next/link";
import { getAllGuidesMeta } from "@/src/lib/guides";
import SEO from "@/components/SEO";

export default function GuidesIndex({ items }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guides",
    hasPart: items.map((g) => ({
      "@type": "Article",
      headline: g.title,
      url: `https://www.ecoandholistic.com/guides/${g.slug}`,
      datePublished: g.date || undefined,
    })),
  };

  return (
    <>
      <SEO
        title="Guides"
        description="Actionable guides for a cleaner, healthier life."
        canonical="https://www.ecoandholistic.com/guides"
        jsonLd={jsonLd}
      />
      <main className="container mx-auto px-4 max-w-3xl py-8">
        <h1 className="text-3xl font-semibold mb-6">Guides</h1>
        <ul className="space-y-6">
          {items.map((g) => (
            <li key={g.slug} className="border-b pb-6">
              <Link href={`/guides/${g.slug}`} className="text-xl font-medium">
                {g.title}
              </Link>
              {g.description && (
                <p className="mt-2 text-neutral-600">{g.description}</p>
              )}
              <div className="mt-2 text-sm text-neutral-500">
                {g.date ? new Date(g.date).toLocaleDateString() : null}
                {Array.isArray(g.tags) && g.tags.length > 0 && (
                  <span> · {g.tags.join(", ")}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const items = getAllGuidesMeta();
  return { props: { items } };
}
