export function articleJsonLd({ url, title, description, datePublished, dateModified, image, authorName = 'Wild & Well' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: title,
    description,
    image: image ? [image] : undefined,
    author: { '@type': 'Organization', name: authorName },
    publisher: { '@type': 'Organization', name: 'Wild & Well' },
    datePublished,
    dateModified: dateModified || datePublished
  };
}
