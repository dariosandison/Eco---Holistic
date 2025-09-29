// components/SEO.js
// ESM-safe, functional SEO component with optional Breadcrumbs + Product JSON-LD.
import Head from 'next/head';

function json(obj) {
  // Safely stringify, dropping undefined
  return JSON.stringify(obj, (_, v) => (v === undefined ? undefined : v));
}

export default function SEO(props = {}) {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Wild & Well';
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://www.wild-and-well.store';

  const {
    title,
    description,
    image, // absolute or relative
    url, // path like "/guides/slug" or absolute
    breadcrumbs, // [{ name, item }]
    product // { name, brand, image, sku, gtin, price, currency, url, availability, rating, reviewCount }
  } = props;

  const pageUrl = url
    ? url.startsWith('http')
      ? url
      : `${siteUrl}${url.startsWith('/') ? url : `/${url}`}`
    : undefined;

  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${siteUrl}${image.startsWith('/') ? image : `/${image}`}`
    : undefined;

  const fullTitle = title ? `${title} • ${siteName}` : siteName;

  // JSON-LD: Breadcrumbs
  const breadcrumbLd =
    Array.isArray(breadcrumbs) && breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: b.name,
            item:
              b.item && b.item.startsWith('http')
                ? b.item
                : `${siteUrl}${(b.item || '').startsWith('/') ? b.item : `/${b.item || ''}`}`
          }))
        }
      : null;

  // JSON-LD: Product (for reviews)
  const productLd = product?.name
    ? {
        '@context':
