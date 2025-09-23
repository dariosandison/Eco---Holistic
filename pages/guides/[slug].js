// pages/guides/[slug].js
import SEO from "../../components/SEO";
import AffiliateLink from "../../components/AffiliateLink";
import { getAllGuidesSlugs, getGuideBySlug } from "../../src/lib/guides";

export default function GuidePage({ html, meta, url }) {
  const crumbs = [
    { name: "Home", item: "https://www.wild-and-well.store/" },
    { name: "Guides", item: "https://www.wild-and-well.store/guides" },
    { name: meta.title, item: url },
  ];

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        url={url}
        image={meta.image}
        isArticle
        datePublished={meta.date}
        dateModified={meta.updated}
        breadcrumbs={crumbs}
      />
      <main className="container" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem" }}>
        <h1 style={{ marginBottom: "0.5rem" }}>{meta.title}</h1>
        {meta.updated && (
          <p style={{ color: "#666", marginTop: 0 }}>
            Updated {meta.updated} {meta.date && `(original: ${meta.date})`}
          </p>
        )}
        {/* Content rendered from Markdown */}
        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {/* Example usage of AffiliateLink in content blocks (optional) */}
        <div style={{ marginTop: 32 }}>
          <AffiliateLink href="https://example.com/?affid=yourid">
            Check today’s best price
          </AffiliateLink>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllGuidesSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const guide = await getGuideBySlug(slug);
  const url = `https://www.wild-and-well.store/guides/${slug}`;
  return { props: { ...guide, url } };
}
