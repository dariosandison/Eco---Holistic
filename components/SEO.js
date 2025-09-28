// components/SEO.js
import Head from 'next/head';

export default function SEO({
  title = 'Wild & Well',
  description = 'Your guide to holistic health, eco friendly living and natural wellness.',
  url = 'https://www.wild-and-well.store',
  image = '/logo.svg',
  type = 'article',
  article = null, // {datePublished, dateModified, author}
  breadcrumbs = null, // [{name, item}, ...]
  product = null // {name, brand, images[], reviewBody, rating, pros[], cons[]}
}) {
  const graph = [];

  if (breadcrumbs?.length) {
    graph.push({
      "@context":"https://schema.org",
      "@type":"BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type":"ListItem", position: i + 1, name: b.name, item: b.item
      }))
    });
  }

  if (article) {
    graph.push({
      "@context":"https://schema.org",
      "@type":"Article",
      headline: title,
      description,
      mainEntityOfPage: url,
      datePublished: article.datePublished || undefined,
      dateModified: article.dateModified || article.datePublished || undefined,
      author: article.author ? { "@type":"Person", name: article.author } : undefined
    });
  }

  if (product) {
    graph.push({
      "@context":"https://schema.org",
      "@type":"Product",
      name: product.name || title,
      brand: product.brand ? { "@type":"Brand", name: product.brand } : undefined,
      image: Array.isArray(product.images) ? product.images : undefined,
      review: {
        "@type":"Review",
        url,
        reviewBody: product.reviewBody || description || title,
        name: `Review: ${product.name || title}`,
        author: { "@type":"Organization", name:"Wild & Well" },
        reviewRating: product.rating ? { "@type":"Rating", ratingValue: product.rating, bestRating: 5, worstRating: 1 } : undefined,
        positiveNotes: Array.isArray(product.pros) && product.pros.length ? { "@type":"ItemList", itemListElement: product.pros.map(p => ({ "@type":"ListItem", name:p })) } : undefined,
        negativeNotes: Array.isArray(product.cons) && product.cons.length ? { "@type":"ItemList", itemListElement: product.cons.map(c => ({ "@type":"ListItem", name:c })) } : undefined
      }
    });
  }

  return (
    <Head>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Wild & Well" />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {graph.length ? (
        <script type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org", "@graph": graph }) }}
        />
      ) : null}
    </Head>
  );
}
