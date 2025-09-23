// components/SEO.js
import Head from "next/head";

const SITE_NAME = "Wild & Well";
const SITE_URL = "https://www.wild-and-well.store";
const DEFAULT_DESCRIPTION =
  "Wild & Well — simple, evidence-led guides to healthy, low-tox, low-waste living.";
// Use an image you already have in /public (fallback to favicon)
const DEFAULT_IMAGE = `${SITE_URL}/favicon.ico`;

function jsonLdOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    sameAs: [
      // Add profiles later if/when you have them
      // "https://www.instagram.com/...",
      // "https://www.facebook.com/...",
      // "https://www.youtube.com/@..."
    ],
  };
}

function jsonLdWebsite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: SITE_NAME,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

function jsonLdBreadcrumb(breadcrumbs = []) {
  if (!breadcrumbs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

function jsonLdArticle(opts = {}) {
  if (!opts || !opts.isArticle) return null;
  const { title, description, url, image, datePublished, dateModified } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: url,
    image: [image || DEFAULT_IMAGE],
    datePublished: datePublished || undefined,
    dateModified: dateModified || datePublished || undefined,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.ico` },
    },
  };
}

/**
 * Usage in pages: <SEO title="..." description="..." url={`${SITE_URL}/path`} />
 * For guides/articles, also pass: isArticle, datePublished, dateModified, image, breadcrumbs
 */
export default function SEO(props) {
  const {
    title = SITE_NAME,
    description = DEFAULT_DESCRIPTION,
    url = SITE_URL,
    image = DEFAULT_IMAGE,
    noindex = false,
    breadcrumbs = [],
    isArticle = false,
    datePublished,
    dateModified,
  } = props;

  const pageTitle =
    title === SITE_NAME ? SITE_NAME : `${title} • ${SITE_NAME}`;

  const ldOrg = jsonLdOrganization();
  const ldSite = jsonLdWebsite();
  const ldCrumbs = jsonLdBreadcrumb(breadcrumbs);
  const ldArticle = jsonLdArticle({
    isArticle,
    title,
    description,
    url,
    image,
    datePublished,
    dateModified,
  });

  return (
    <Head>
      {/* Primary */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={isArticle ? "article" : "website"} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSite) }}
      />
      {ldCrumbs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldCrumbs) }}
        />
      )}
      {ldArticle && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldArticle) }}
        />
      )}
    </Head>
  );
}
