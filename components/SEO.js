// components/SEO.js
import Head from "next/head";
import { useRouter } from "next/router";

/**
 * Usage example in a page:
 *   <SEO title="Guides" description="Practical wellness + low-tox living." />
 *
 * For articles:
 *   <SEO
 *     title="Sleep Better Evening Routine"
 *     description="A simple routine to improve sleep quality."
 *     type="article"
 *     publishDate="2024-05-10"
 *     updatedDate="2024-06-02"
 *     image="/images/guides/sleep-hero.jpg"
 *   />
 */
export default function SEO({
  title = "Wild & Well",
  description = "Practical wellness and low-tox living guides, gear, and tips.",
  type = "website", // 'website' | 'article'
  image,
  publishDate,
  updatedDate,
  noindex = false,
  canonical, // optional override
}) {
  const router = useRouter();
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.wild-and-well.store";
  const path = router?.asPath?.split("#")[0]?.split("?")[0] || "/";
  const url = canonical || `${siteUrl}${path}`;
  const ogImage =
    image
      ? (image.startsWith("http") ? image : `${siteUrl}${image}`)
      : `${siteUrl}/og-default.jpg`; // it's ok if this file doesn't exist yet

  // Minimal JSON-LD
  const baseLd = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    headline: title,
    name: title,
    description,
    url,
  };
  if (type === "article") {
    if (publishDate) baseLd.datePublished = publishDate;
    if (updatedDate) baseLd.dateModified = updatedDate;
    baseLd.mainEntityOfPage = url;
    baseLd.image = ogImage;
    baseLd.publisher = {
      "@type": "Organization",
      name: "Wild & Well",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo-512.png`,
      },
    };
  }

  return (
    <Head>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Wild & Well" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // stringify safely so undefined fields drop out
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baseLd) }}
      />
    </Head>
  );
}
