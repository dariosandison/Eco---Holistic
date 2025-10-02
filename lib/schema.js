// lib/schema.js
export function clean(obj) {
  if (obj == null) return undefined;
  if (Array.isArray(obj)) return obj.map(clean).filter((v) => v != null && (typeof v !== 'object' || Object.keys(v).length));
  if (typeof obj === 'object') {
    const o = {};
    for (const [k, v] of Object.entries(obj)) {
      const cv = clean(v);
      if (cv !== undefined && cv !== null && cv !== '') o[k] = cv;
    }
    return Object.keys(o).length ? o : undefined;
  }
  return obj;
}

export function ProductSchema({ name, image, url, price, currency = 'USD', brand, sku, gtin, availability = 'https://schema.org/InStock', rating, ratingCount }) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    image,
    url,
    sku,
    gtin13: gtin,
    brand: brand ? { '@type': 'Brand', name: brand } : undefined,
    aggregateRating:
      rating && ratingCount
        ? { '@type': 'AggregateRating', ratingValue: String(rating), reviewCount: String(ratingCount) }
        : undefined,
    offers:
      price
        ? {
            '@type': 'Offer',
            price: String(price),
            priceCurrency: currency,
            availability,
            url,
          }
        : undefined,
  });
}

export function ReviewSchema({ name, author, datePublished, reviewBody, rating, item }) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Review',
    name,
    reviewBody,
    datePublished,
    author: author ? { '@type': 'Person', name: author } : undefined,
    reviewRating: rating ? { '@type': 'Rating', ratingValue: String(rating) } : undefined,
    itemReviewed: item ? ProductSchema(item) : undefined,
  });
}

export function ArticleSchema({ headline, description, image, author, datePublished, dateModified, url }) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    author: author ? { '@type': 'Person', name: author } : undefined,
    datePublished,
    dateModified,
    mainEntityOfPage: url,
  });
}

export function ItemListSchema(items = []) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: it.url,
      name: it.name,
      image: it.image,
    })),
  });
}

export function FAQSchema(faq = []) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a },
    })),
  });
}

export function BreadcrumbSchema(segments = []) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: segments.map((seg, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: seg.name,
      item: seg.item,
    })),
  });
}
