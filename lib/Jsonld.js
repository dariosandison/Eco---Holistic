// lib/Jsonld.js
export const organization = ({ name, url, logo }) => ({
  "@context":"https://schema.org",
  "@type":"Organization",
  name, url, logo
});

export const website = ({ name, url }) => ({
  "@context":"https://schema.org",
  "@type":"WebSite",
  name, url,
  potentialAction:{
    "@type":"SearchAction",
    target:`${url}/search?q={search_term_string}`,
    "query-input":"required name=search_term_string"
  }
});

export const breadcrumbs = (items=[]) => ({
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  itemListElement: items.map((it,i)=>({
    "@type":"ListItem", position:i+1, name:it.name, item:it.item
  }))
});

export const article = ({ title, description, url, datePublished, dateModified, author }) => ({
  "@context":"https://schema.org",
  "@type":"Article",
  headline:title, description, mainEntityOfPage:url, datePublished, dateModified,
  author: author ? { "@type":"Person", name: author } : undefined
});

// For review pages (editorial reviews)
export const productReview = ({ name, url, brand, images=[], reviewBody, pros=[], cons=[], rating }) => ({
  "@context":"https://schema.org",
  "@type":"Product",
  name, brand: brand ? { "@type":"Brand", name: brand } : undefined,
  image: images,
  review: {
    "@type":"Review",
    url,
    reviewBody,
    name: `Review: ${name}`,
    author: { "@type":"Organization", name:"Wild & Well" },
    reviewRating: rating ? { "@type":"Rating", ratingValue: rating, bestRating: 5, worstRating: 1 } : undefined,
    positiveNotes: pros.length ? { "@type":"ItemList", itemListElement: pros.map(p => ({ "@type":"ListItem", name:p })) } : undefined,
    negativeNotes: cons.length ? { "@type":"ItemList", itemListElement: cons.map(c => ({ "@type":"ListItem", name:c })) } : undefined
  }
});
