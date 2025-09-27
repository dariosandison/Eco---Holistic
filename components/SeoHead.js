// components/SeoHead.js
import Head from 'next/head';

export default function SeoHead({
  title = 'Wild & Well',
  description = 'Actionable guides and clean product picks.',
  url = 'https://www.wild-and-well.store',
  image,
  type = 'website',
  breadcrumbs,   // [{name, url}]
  article,       // {headline, datePublished, dateModified, authorName}
}) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wild & Well",
    "url": url,
    "logo": `${url}/logo.svg`,
    "sameAs": [
      "https://instagram.com/wildandwell_uk",
      "https://pinterest.com/wildandwell_uk/"
    ]
  };

  const crumb = breadcrumbs?.length ? {
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, i) => ({
      "@type":"ListItem", "position": i+1,
      "name": b.name, "item": b.url
    }))
  } : null;

  const art = article ? {
    "@context":"https://schema.org",
    "@type":"Article",
    "headline": article.headline || title,
    "author": {"@type":"Person","name": article.authorName || "Wild & Well"},
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "mainEntityOfPage": url,
  } : null;

  const jsons = [org, crumb, art].filter(Boolean);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsons.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </Head>
  );
}
