// /components/SEO.js
import Head from "next/head";
import { useRouter } from "next/router";
import { SITE } from "@/src/site.config";

function jsonLdScript(obj) {
  return { __html: JSON.stringify(obj) };
}

export default function SEO({
  title,
  description,
  image,
  type = "website", // "website" | "article"
  canonicalPath,    // e.g. "/guides/water-filters"
  noIndex = false,
  publishedTime,    // ISO string for articles
  modifiedTime,     // ISO string for articles
  breadcrumbs = [], // [{name, url}]
  article = null,   // {authorName}
}) {
  const router = useRouter();
  const path = canonicalPath || (router?.asPath ? router.asPath.split("?")[0] : "/");
  const canonical = `${SITE.url}${path}`;
  const metaTitle = title ? `${title} | ${SITE.name}` : SITE.name;
  const metaDesc = description || "Practical guides to living wild & well — eco, holistic, and evidence-led.";
  const metaImg = image?.startsWith("http") ? image : `${SITE.url}${image || SITE.defaultImage || "/favicon.ico"}`;

  // Base JSON-LD: Organization + WebSite
  const orgJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo ? `${SITE.url}${SITE.logo}` : undefined,
  };

  const webSiteJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/search?q={query}`,
      "query-input": "required name=query",
    },
  };

  // Breadcrumbs JSON-LD (if provided)
  const bcrumbJson =
    breadcrumbs?.length
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: b.name,
            item: b.url,
          })),
        }
      : null;

  // Article JSON-LD (for guides)
  const articleJson =
    type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title || SITE.name,
          description: metaDesc,
          image: [metaImg],
          datePublished: publishedTime || undefined,
          dateModified: modifiedTime || publishedTime || undefined,
          author: article?.authorName ? { "@type": "Person", name: article.authorName } : undefined,
          mainEntityOfPage: canonical,
          publisher: {
            "@type": "Organization",
            name: SITE.name,
            logo: SITE.logo ? { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}` } : undefined,
          },
        }
      : null;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonical} />
        {/* Indexing */}
        <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={canonical} />
        {metaImg && <meta property="og:image" content={metaImg} />}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {SITE.twitterHandle && <meta name="twitter:site" content={SITE.twitterHandle} />}
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        {metaImg && <meta name="twitter:image" content={metaImg} />}
        {/* Article times for OG */}
        {type === "article" && publishedTime && (
          <meta property="article:published_time" content={publishedTime} />
        )}
        {type === "article" && (modifiedTime || publishedTime) && (
          <meta property="article:modified_time" content={modifiedTime || publishedTime} />
        )}
        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(orgJson)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(webSiteJson)} />
        {bcrumbJson && (
          <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(bcrumbJson)} />
        )}
        {articleJson && (
          <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(articleJson)} />
        )}
      </Head>
    </>
  );
}
