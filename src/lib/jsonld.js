// Helpers to generate JSON-LD for articles and breadcrumbs

const asArray = (x) => (Array.isArray(x) ? x : x ? [x] : []);

export const breadcrumbsJsonLd = ({ baseUrl, items = [] }) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${baseUrl}${item.path || ""}`,
  })),
});

export const articleJsonLd = ({
  baseUrl = "",
  url = "",
  title = "",
  description = "",
  image,
  datePublished,
  dateModified,
  authorName = "Wild & Well",
  publisherName = "Wild & Well",
  publisherLogo, // absolute URL recommended
  keywords = [],
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url || baseUrl,
  },
  headline: title?.slice(0, 110) || "",
  description: description || "",
  image: asArray(image),
  datePublished: datePublished || undefined,
  dateModified: dateModified || datePublished || undefined,
  author: asArray(authorName).map((n) => ({ "@type": "Person", name: n })),
  publisher: {
    "@type": "Organization",
    name: publisherName,
    logo: publisherLogo
      ? { "@type": "ImageObject", url: publisherLogo }
      : undefined,
  },
  keywords: asArray(keywords).join(", "),
});

// A tiny helper if you prefer to inline safely:
export const toJson = (obj) => JSON.stringify(obj);

// Aliases some pages might import:
export const guideJsonLd = articleJsonLd;

// Default export with all helpers (covers default-import usage)
export default { articleJsonLd, breadcrumbsJsonLd, guideJsonLd, toJson };
