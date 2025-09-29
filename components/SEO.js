// components/SEO.js
// ESM-safe functional component. Prunes undefined values and emits valid JSON-LD.

import Head from 'next/head';

const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME || 'Wild & Well';
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store'
).replace(/\/$/, '');

function toAbs(u) {
  if (!u) return undefined;
  return u.startsWith('http')
    ? u
    : `${SITE_URL}${u.startsWith('/') ? u : `/${u}`}`;
}

function clean(obj) {
  if (obj == null) return obj;
  if (Array.isArray(obj)) return obj.map(clean);
  if (typeof obj === 'object') {
    const out = {};
    for (const k of Object.keys(obj)) {
      const v = obj[k];
      if (v === undefined) continue;
      out[k] = clean(v);
    }
    return out;
  }
  return obj;
}

function json(obj) {
  return JSON.stringify(clean(obj));
}

export default function SEO(props = {}) {
  const { title, description, image, url, breadcrumbs, product } = props;

  const pageUrl = toAbs(url);
  const ogImage = toAbs(image);
  const fullTitle = title ? `${title} • ${SITE_NAME}` : SITE_NAME;

  const breadcrumbLd =
    Array.isArray(breadcrumbs) && breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: b?.name || '',
            item: toAbs(b?.item || '')
          }))
        }
      : null;

  const productLd =
    product && (product.name || product.price != null || product.rating != null)
      ? {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name || title || '',
          brand: product.brand ? { '@type': 'Brand', name: product.brand } : undefined,
          image: product.image || ogImage,
          sku: product.sku,
          gtin13: product.gtin,
          url: toAbs(product.url) || pageUrl,
          aggregateRating:
            product.rating != null && product.reviewCount != null
              ? {
                  '@type': 'AggregateRating',
                  ratingValue: product.rating,
                  reviewCount: product.reviewCount
                }
              : undefined,
          offers:
            product.price != null && product.currency
              ? {
                  '@type': 'Offer',
                  price: product.price,
                  priceCurrency: product.currency,
                  url: toAbs(product.url) || pageUrl,
                  availability: product.availability
                }
              : undefined
        }
      : null;

  return (
    <Head>
      {fullTitle && <title>{fullTitle}</title>}
      {description && <meta name="description" content={description} />}

      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {pageUrl && <link rel="canonical" href={pageUrl} />}

      <meta property="og:type" content="website" />
      {pageUrl && <meta property="og:url" content={pageUrl} />}
      {fullTitle && <meta property="og:title" content={fullTitle} />}
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      {fullTitle && <meta name="twitter:title" content={fullTitle} />}
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {breadcrumbLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: json(breadcrumbLd) }}
        />
      )}
      {productLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: json(productLd) }}
        />
      )}
    </Head>
  );
}
