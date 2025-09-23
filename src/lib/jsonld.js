// src/lib/jsonld.js
const SITE_URL = "https://www.wild-and-well.store";
const SITE_NAME = "Wild & Well";

export function article({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: url,
    image: image ? [image] : [`${SITE_URL}/favicon.ico`],
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

export function breadcrumbs(list = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.item,
    })),
  };
}
