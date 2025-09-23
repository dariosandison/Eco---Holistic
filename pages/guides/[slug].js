// /pages/guides/[slug].js
import Link from "next/link";
import SEO from "../../components/SEO";
import AffiliateLink from "../../components/AffiliateLink";
import { article, breadcrumbs } from "../../src/lib/jsonld";
import { site } from "../../src/lib/site";
import { getAllGuidesSlugs, getGuideBySlug } from "../../src/lib/guides";

export async function getStaticPaths() {
  const slugs = getAllGuidesSlugs();
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return { notFound: true };
  return { props: { guide } };
}

export default function GuidePage({ guide }) {
  const path = `/guides/${guide.slug}`;
  const jsonLd = [
    article({
      url: `${site.url}${path}`,
      title: guide.title,
      description: guide.excerpt,
      datePublished: guide.date,
      dateModified: guide.updated
    }),
    breadcrumbs([
      { name: "Home", item: `${site.url}/` },
      { name: "Guides", item: `${site.url}/guides` },
      { name: guide.title, item: `${site.url}${path}` }
    ])
  ];

  const olive = {
    brand: "#6b8e23",
    brandDark: "#556b2f",
    text: "#0f1a10",
    muted: "#4b5563",
    bg: "#fafaf7",
    card: "#ffffff",
    border: "#e5eadf"
  };

  const hasAffiliates = Array.isArray(guide.products) && guide.products.some((p) => p.affiliate);

  return (
    <div
      style={{
        ["--brand"]: olive.brand,
        ["--brand-dark"]: olive.brandDark,
        ["--text"]: olive.text,
        ["--muted"]: olive.muted,
        ["--bg"]: olive.bg,
        ["--card"]: olive.card,
        ["--border"]: olive.border,
        background: "var(--bg)",
        minHeight: "100vh",
        color: "var(--text)"
      }}
    >
      <SEO title={guide.title} description={guide.excerpt} path={path} jsonLd={jsonLd} />

      <main style={{ maxWidth: 860, margin: "0 auto", padding: 24 }}>
        <p style={{ margin: "0 0 12px" }}>
          <Link href="/guides" style={{ color: "var(--brand)" }}>
            ← Back to Guides
          </Link>
        </p>

        <h1 style={{ margin: "0 0 8px", color: "var(--brand-dark)", letterSpacing: "-0.02em" }}>{guide.title}</h1>
        <p style={{ margin: "0 0 18px", color: "var(--muted)" }}>
          <time dateTime={guide.updated}>Updated: {guide.updated}</time>
        </p>

        <article
          style={{
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 18,
            background: "var(--card)"
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: guide.contentHtml }} />
          {Array.isArray(guide.products) && guide.products.length > 0 ? (
            <>
              <h3 style={{ marginTop: 18, color: "var(--brand-dark)" }}>Products Mentioned</h3>
              <ul>
                {guide.products.map((p, i) => (
                  <li key={i} style={{ margin: "6px 0" }}>
                    {p.affiliate ? (
                      <AffiliateLink href={p.url}>{p.name} →</AffiliateLink>
                    ) : (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
                        {p.name} →
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {hasAffiliates ? (
            <p style={{ marginTop: 16, fontSize: 13, color: "var(--muted)" }}>
              Disclosure: Some links may be affiliate links. If you buy through them, we may earn a commission at no cost to you.
            </p>
          ) : null}
        </article>
      </main>
    </div>
  );
}
