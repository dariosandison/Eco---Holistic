// components/SEO.js
// Safe, minimal SEO + optional JSON-LD helpers.
// Removes undefineds and only renders valid tags.

import Head from 'next/head';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Wild & Well';
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') || 'https://example.com';

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

function clean(obj) {
  if (!obj || typeof obj !== 'object') return undefined;
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined) continue;
    if (v === null) {
      out[k] = null;
      continue;
    }
    if (Array.isArray(v)) {
      const arr = v.map((x) => (typeof x === 'object' ? clean(x) : x)).filter((x) => x !== undefined);
      if (arr.length) out[k] = arr;
      continue;
    }
    out[k] = typeof v === 'object' ? clean(v) : v;
  }
  return out;
}

function jsonLd(obj) {
  const cleaned = clean(obj);
  if (!cleaned) return null;
  return JSON.stringify(cleaned);
}

export default function SEO({
  title,
  description,
  image,
  url,
  breadcrumbs, // [{ name, item }]
  product, // { name, image, description, brand, sku, gtin, url, price, priceCurrency, aggregateRating:{ratingValue,ratingCount}, offers:[{price,priceCurrency,url,availability}] }
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
    Array.isArray(breadcrumbs) && breadcrumbs.length
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

  const productLd = product?.name
    ? {
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
        offers: Array.isArray
