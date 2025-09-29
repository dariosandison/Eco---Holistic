// components/SEO.jsx
import Head from 'next/head';
import site from '../site.config';

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
  title = site?.seoDefaults?.title || site?.name || 'Wild & Well',
  description = site?.seoDefaults?.description || '',
  url = site?.url || 'https://www.wild-and-well.store',
  image = site?.seoDefaults?.image || `${site?.url || 'https://www.wild-and-well.store'}/og-default.jpg`,
  siteName = site?.name || 'Wild & Well',
  noindex = false,
  breadcrumbs,
  product
}) {
  const ld = [];

  const siteUrl = (site?.url || 'https://www.wild-and-well.store').replace(/\/$/, '');
  const pageUrl = (url || siteUrl).startsWith('http') ? url : `${siteUrl}${url.startsWith('/') ? '' : '/'}${url}`;

  ld.push(clean({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl + '/',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={query}`,
      'query-input': 'required name=query'
    }
  }));

  ld.push(clean({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl + '/',
    logo: `${siteUrl}${site?.brand?.logo || '/logo.svg'}`
  }));

  if (Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
    ld.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: b.item
      }))
    });
  }

  if (title || description || image) {
    ld.push(clean({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      mainEntityOfPage: pageUrl,
      image
    }));
  }

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
        url: p.url || pageUrl,
        availability: p.availability || undefined
      } : undefined,
      aggregateRating: (p.rating != null && p.reviewCount != null) ? {
        '@type': 'AggregateRating',
        ratingValue: String(p.rating),
        reviewCount: String(p.reviewCount)
      } : undefined
    };
    ld.push(productLd);
  }

  const ldJson = JSON.stringify(ld.filter(Boolean));

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image ? <meta property="og:image" content={image} /> : null}
      <meta property="og:url" content={pageUrl} />
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
