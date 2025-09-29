// components/SEO.js
// Safe, minimal SEO + optional JSON-LD helpers.

import Head from 'next/head';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Wild & Well';
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com').replace(/\/+$/, '');

const isNonEmptyString = (v) => typeof v === 'string' && v.trim().length > 0;

const clean = (obj) => {
  if (!obj || typeof obj !== 'object') return undefined;
  if (Array.isArray(obj)) {
    const arr = obj.map(clean).filter((x) => x !== undefined);
    return arr.length ? arr : undefined;
  }
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined) continue;
    if (v === null) {
      out[k] = null;
    } else if (typeof v === 'object') {
      const c = clean(v);
      if (c !== undefined) out[k] = c;
    } else {
      out[k] = v;
    }
  }
  return Object.keys(out).length ? out : undefined;
};

const jsonLd = (obj) => {
  const c = clean(obj);
  return c ? JSON.stringify(c) : null;
};

export default function SEO({
  title,
  description,
  image,
  url,
  breadcrumbs,
  product,
  type = 'website',
}) {
  const pageTitle = isNonEmptyString(title) ? title : siteName;
  const pageDesc = isNonEmptyString(description)
    ? description
    : 'Practical guides, honest reviews, and low-additive picks.';
  const canonical = isNonEmptyString(url)
    ? (url.startsWith('http') ? url : `${siteUrl}${url.startsWith('/') ? '' : '/'}${url}`)
    : undefined;
  const ogImage = isNonEmptyString(image) ? image : undefined;

  const breadcrumbLd =
    Array.isArray(breadcrumbs) && breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((b, i) =>
            clean({
              '@type': 'ListItem',
              position: i + 1,
              name: b?.name || '',
              item:
                isNonEmptyString(b?.item) && !b.item.startsWith('http')
                  ? `${siteUrl}${b.item.startsWith('/') ? '' : '/'}${b.item}`
                  : b?.item || undefined,
            })
          ),
        }
      : null;

  const productLd =
    product && isNonEmptyString(product.name)
      ? clean({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          image: product.image,
          description: product.description,
          brand: product.brand ? { '@type': 'Brand', name: product.brand } : undefined,
          sku: product.sku,
          gtin13: product.gtin,
          url:
            isNonEmptyString(product.url) && !product.url.startsWith('http')
              ? `${siteUrl}${product.url.startsWith('/') ? '' : '/'}${product.url}`
              : product.url,
          offers: Array.isArray(product.offers)
            ? product.offers.map((o) =>
                clean({
                  '@type': 'Offer',
                  url:
                    isNonEmptyString(o?.url) && !o.url.startsWith('http')
                      ? `${siteUrl}${o.url.startsWith('/') ? '' : '/'}${o.url}`
                      : o?.url,
                  priceCurrency: o?.priceCurrency,
                  price: o?.price,
                  availability: o?.availability,
                })
              )
            : undefined,
          aggregateRating: product.aggregateRating
            ? clean({
                '@type': 'AggregateRating',
                ratingValue: product.aggregateRating.ratingValue,
                ratingCount: product.aggregateRating.ratingCount,
              })
            : undefined,
        })
      : null;

  return (
    <Head>
      <title>{pageTitle}</title>
      {isNonEmptyString(pageDesc) ? <meta name="description" content={pageDesc} /> : null}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={pageTitle} />
      {isNonEmptyString(pageDesc) ? <meta property="og:description" content={pageDesc} /> : null}
      {isNonEmptyString(ogImage) ? <meta property="og:image" content={ogImage} /> : null}
      {isNonEmptyString(canonical) ? <link rel="canonical" href={canonical} /> : null}
      {breadcrumbLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd) }} />
      ) : null}
      {productLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(productLd) }} />
      ) : null}
    </Head>
  );
}
