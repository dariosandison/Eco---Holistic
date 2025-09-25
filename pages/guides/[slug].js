// pages/guides/[slug].js
import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllGuidesSlugs, getGuideBySlug } from "../../lib/guides";

// Inline replacements for the missing ../../lib/jsonld import
function jsonLdArticle({ title = "", description = "", url = "" } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: url,
  };
}

function jsonLdBreadcrumbs(items = []) {
  const list = Array.isArray(items) ? items : [];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it?.name || "",
      item: it?.item || "",
    })),
  };
}

export default function GuidePage({ guide }) {
  if (!guide) return null;

  const {
    slug,
    title,
    description,
    html,
    contentHtml,
    date,
    updated,
  } = guide;

  const pageUrl = `https://www.wild-and-well.store/guides/${slug}`;
  const articleLd = jsonLdArticle({
    title: title || "Guide",
    description: description || "",
    url: pageUrl,
  });
  const crumbsLd = jsonLdBreadcrumbs([
    { name: "Home", item: "https://www.wild-and-well.store/" },
    { name: "Guides", item: "https://www.wild-and-well.store/guides" },
    { name: title || "Guide", item: pageUrl },
  ]);

  return (
    <Layout>
      <Head>
        <title>
          {title ? `${title} | Wild & Well` : "Guide | Wild & Well"}
        </title>
        {description && <meta name="description" content={description} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbsLd) }}
        />
      </Head>

      <article className="prose mx-auto px-4">
        <h1>{title || "Guide"}</h1>
        {(date || updated) && (
          <p className="text-sm text-gray-500">
            {date ? <>Published: {date}</> : null}
            {updated ? <>{date ? " • " : ""}Updated: {updated}</> : null}
          </p>
        )}
        <div dangerouslySetInnerHTML={{ __html: html || contentHtml || "" }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const slugs = await getAllGuidesSlugs();
    const arr = Array.isArray(slugs) ? slugs : [];
    return {
      paths: arr
        .map((s) => {
          const v = typeof s === "string" ? s : s?.slug || s?.params?.slug;
          return v ? { params: { slug: String(v) } } : null;
        })
        .filter(Boolean),
      fallback: false,
    };
  } catch {
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  try {
    const guide = await getGuideBySlug(params.slug);
    if (!guide) return { notFound: true };

    // Ensure everything is JSON-serializable
    const safeGuide = {
      ...guide,
      slug: guide.slug || params.slug,
      html: guide.html ?? guide.contentHtml ?? "",
      description: guide.description ?? null,
      date: guide.date ?? null,
      updated: guide.updated ?? null,
    };

    return { props: { guide: safeGuide }, revalidate: 60 };
  } catch {
    return { notFound: true };
  }
}
