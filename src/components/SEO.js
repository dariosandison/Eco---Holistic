import Head from 'next/head';

export default function SEO({
  title,
  description,
  canonical,
  type = 'website',
  article
}) {
  const jsonLd = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: article.author ? { '@type': 'Person', name: article.author } : undefined,
        mainEntityOfPage: canonical
      }
    : null;

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </Head>
  );
}
