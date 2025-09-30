// components/SEO.js
import React from 'react';
import Head from 'next/head';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') ||
  'https://example.com';

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}
function toAbs(url) {
  if (!isNonEmptyString(url)) return undefined;
  try {
    return new URL(url, siteUrl).toString();
  } catch {
    return undefined;
  }
}
function clean(obj) {
  if (Array.isArray(obj)) return obj.map(clean).filter((v) => v != null);
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      const cv = clean(v);
      if (cv !== undefined && cv !== null && cv !== '') out[k] = cv;
    }
    return Object.keys(out).length ? out : undefined;
  }
  return obj === undefined ? undefined : obj;
}
function JsonLd({ data }) {
  const content = JSON.stringify(clean(data));
  if (!content || content === '{}' || content === '[]') return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

/**
 * SEO component
 *
 * Props:
 * - title, description, image, canonical, noindex
 * - type: 'website' | 'article' | 'product' | 'review'
 * - breadcrumbs: [{ name, url }]
 * - article: { authorName, publishedTime, modifiedTime, tags?: string[] }
 * - product: { name, image, brand, sku, gtin, price, currency, url, rating, ratingCount }
 * - faq: [{ question, answer }]
 * - organization: { name, logo, url }
 */
export default function SEO({
  title,
  description,
  image,
  canonical,
  noindex = false,
  type = 'website',
  breadcrumbs = [],
  article,
  product,
  faq = [],
  organization = { name: 'Wild & Well', logo: undefined, url: siteUrl },
  siteName = 'Wild & Well',
}) {
  const finalTitle = isNonEmptyString(title) ? title : siteName;
  const finalDesc = isNonEmptyString(description)
    ? description
    : 'Evidence-guided guides, reviews, and how-tos.';
  const finalImage =
    toAbs(image) ||
    `${siteUrl}/og-default.jpg`; // ensure you have a default OG image
  const finalCanonical = toAbs(canonical) || undefined;

  // Open Graph type
  const ogType =
    type === 'article' || article ? 'article' : type === 'product' ? 'product' : 'website';

  // JSON-LD: Organization (site-wide)
  const orgLd = clean({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organization?.name || siteName,
    url: organization?.url || siteUrl,
    logo: toAbs(organization?.logo),
  });

  // JSON-LD: Breadcrumbs
  const breadcrumbLd =
    breadcrumbs?.length > 0
      ? clean({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: b.name,
            item: toAbs(b.url),
          })),
        })
      : null;

  // JSON-LD: Article
  const articleLd =
    ogType === 'article'
      ? clean({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: finalTitle,
          description: finalDesc,
          image: finalImage,
          author: article?.authorName
            ? { '@type': 'Person', name: article.authorName }
            : { '@type': 'Organization', name: siteName },
          datePublished: article?.publishedTime,
          dateModified: article?.modifiedTime || article?.publishedTime,
          mainEntityOfPage: finalCanonical || siteUrl,
          keywords: article?.tags,
        })
      : null;

  // JSON-LD: Product (for product pages or pages with a primary product)
  const productLd =
    type === 'product' || product
      ? clean({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product?.name,
          image: toAbs(product?.image) || finalImage,
          brand: product?.brand,
          sku: product?.sku,
          gtin13: product?.gtin,
          url: toAbs(product?.url) || finalCanonical,
          aggregateRating:
            product?.rating && product?.ratingCount
              ? {
                  '@type': 'AggregateRating',
                  ratingValue: product.rating,
                  reviewCount: product.ratingCount,
                }
              : undefined,
          offers:
            product?.price && (product?.url || finalCanonical)
              ? {
                  '@type': 'Offer',
                  price: String(product.price),
                  priceCurrency: product.currency || 'USD',
                  url: toAbs(product.url) || finalCanonical,
                  availability: 'https://schema.org/InStock',
                }
              : undefined,
        })
      : null;

  // JSON-LD: FAQ
  const faqLd =
    Array.isArray(faq) && faq.length
      ? clean({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((q) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer,
            },
          })),
        })
      : null;

  return (
    <Head>
      {/* Basic */}
      {finalTitle ? <title>{finalTitle}</title> : null}
      {finalDesc ? <meta name="description" content={finalDesc} /> : null}
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}
      {finalCanonical ? <link rel="canonical" href={finalCanonical} /> : null}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      {finalTitle ? <meta property="og:title" content={finalTitle} /> : null}
      {finalDesc ? <meta property="og:description" content={finalDesc} /> : null}
      {finalImage ? <meta property="og:image" content={finalImage} /> : null}
      <meta property="og:site_name" content={siteName} />
      {finalCanonical ? <meta property="og:url" content={finalCanonical} /> : null}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {finalTitle ? <meta name="twitter:title" content={finalTitle} /> : null}
      {finalDesc ? <meta name="twitter:description" content={finalDesc} /> : null}
      {finalImage ? <meta name="twitter:image" content={finalImage} /> : null}

      {/* JSON-LD blocks */}
      <JsonLd data={orgLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={articleLd} />
      <JsonLd data={productLd} />
      <JsonLd data={faqLd} />
    </Head>
  );
}
