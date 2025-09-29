// components/SEO.jsx
import Head from 'next/head';

function clean(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  const out = Array.isArray(obj) ? [] : {};
  Object.entries(obj).forEach(([k, v]) => {
    if (v === undefined || v === null) return;
    if (typeof v === 'object') {
      const c = clean(v);
      if (Array.isArray(c) && c.length === 0) return;
      if (!Array.isArray(c) && Object.keys(c).length === 0) return;
      out[k] = c;
    } else if (v !== '') {
      out[k] = v;
    }
  });
  return out;
}

export default function SEO({
  title = 'Wild & Well',
  description = 'Holistic health, eco-friendly living, and natural wellness guides.',
  url = 'https://www.wild-and-well.store/',
  image,
  type = 'website',
  siteName = 'Wild & Well',
  noindex = false,
  breadcrumbs, // [{name, item}]
  product,     // optional: normalized product object if you add it
}) {
  const ld = [];

  // Site-wide WebSite + SearchAction (helps sitelinks)
  ld.push(clean({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: 'https://www.wild-and-well.store/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.wild-and-well.store/search?q={query}',
      'query-input': 'required name=query'
    }
  }));

  // Organization
  ld.push(clean({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: 'https://www.wild-and-well.store/',
    logo: image || 'https://www.wild-and-well.store/logo.svg'
  }));

  // Breadcrumbs (if provided)
  if (Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
    ld.push(clean({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: b.item
      }))
    }));
  }

  // Article markup if this is an article-like page
  if (type === 'article') {
    ld.push(clean({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      mainEntityOfPage: url,
      image
    }));
  }

  // Optional product block (only if you pass it)
  if (product && Object.keys(clean(product)).length > 0) {
    const p = clean(product);
    const productLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: p.name,
      brand: p.brand ? { '@type': 'Brand', name: p.brand } : undefined,
      image: p.image,
      sku: p.sku,
      gtin13: p.gtin,
      offers: (p.price && p.currency) ? {
        '@type': 'Offer',
        priceCurrency: p.currency,
        price: String(p.price),
        url: p.url || url,
        availability: p.availability || undefined,
      } : undefined,
      aggregateRating: (p.rating != null && p.reviewCount != null) ? {
        '@type': 'AggregateRating',
        ratingValue: String(p.rating),
        reviewCount: String(p.reviewCount)
      } : undefined
    };
    ld.push(clean(productLd));
  }

  const ldJson = JSON.stringify(ld.filter(Boolean));

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image ? <meta property="og:image" content={image} /> : null}
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image} /> : null}
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson }} />
    </Head>
  );
}
