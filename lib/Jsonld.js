// lib/jsonld.js

export function article({ title = "", description = "", url = "" } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: url,
  };
}

export function breadcrumbs(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: (Array.isArray(items) ? items : []).map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it?.name || "",
      item: it?.item || "",
    })),
  };
}
