// components/SEO.jsx
import Head from 'next/head';

export default function SEO({
  title,
  description,
  url,
  type = 'website',
  noindex = false,
  image = '/images/og-default.jpg',
  article,
  product,
  breadcrumbs = [],
  tags = []
}) {
  const t = title || 'Wild & Well';
  const d = description || 'Holistic health, eco-friendly living, and natural wellness.';
  const u = url || 'https://www.wild-and-well.store/';
  const img = image || '/images/og-default.jpg';

  const ldBreadcrumbs = breadcrumbs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: b.item,
        })),
      }
    : null;

  const ldArticle =
    type === 'article' && article
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: t,
          description: d,
          mainEntityOfPage: u,
          author: [{ '@type': 'Person', name: article.author || 'Wild & Well Editorial' }],
          datePublished: article.datePublished || undefined,
          dateModified: article.dateModified || article.datePublished || undefined,
        }
      : null;

  const ldProduct = product
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        brand: product.brand ? { '@type': 'Brand', name: product.brand } : undefined,
        image: product.images || undefined,
        description: product.reviewBody || d,
        review: product.rating
          ? {
              '@type': 'Review',
              reviewBody: product.reviewBody || d,
              reviewRating: {
                '@type': 'Rating',
                ratingValue: product.rating,
                bestRating: 5,
                worstRating: 1,
              },
              author: { '@type': 'Organization', name: 'Wild & Well' },
            }
          : undefined,
      }
    : null;

  return (
    <Head>
      <title>{t}</title>
      <meta name="description" content={d} />
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}

      {/* Open Graph */}
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={u} />
      <meta property="og:image" content={img} />
      <meta property="og:site_name" content="Wild & Well" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
      <meta name="twitter:image" content={img} />

      {/* Canonical */}
      <link rel="canonical" href={u} />

      {/* Tags (fallback as keywords) */}
      {tags?.length ? <meta name="keywords" content={tags.join(', ')} /> : null}

      {/* JSON-LD */}
      {ldBreadcrumbs ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumbs) }}
        />
      ) : null}
      {ldArticle ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldArticle) }}
        />
      ) : null}
      {ldProduct ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldProduct) }}
        />
      ) : null}
    </Head>
  );
}
