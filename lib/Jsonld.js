export function article({ title, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title || "",
    description: description || "",
    mainEntityOfPage: url || "",
  };
}

export function breadcrumbs(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}
