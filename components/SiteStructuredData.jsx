import React from 'react';
import site from '../lib/site';

function toAbsoluteUrl(base, pathOrUrl) {
  if (!pathOrUrl) return undefined;
  try {
    return new URL(pathOrUrl, base).toString();
  } catch {
    return undefined;
  }
}

export default function SiteStructuredData({
  title,
  description,
  url,        // can be absolute or relative
  image,      // can be absolute or relative
  type = 'website',
  breadcrumb, // optional: [{ name: 'Home', url: '/' }, ...]
}) {
  // Resolve a base URL from config or env; if missing, fail safe and render nothing.
  const baseUrl = site?.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || null;
  if (!baseUrl) return null;

  const canonical = toAbsoluteUrl(baseUrl, url) || baseUrl;
  const imageUrl = toAbsoluteUrl(baseUrl, image);

  // Core graph nodes
  const webSiteNode = {
    '@type': 'WebSite',
    url: baseUrl,
    name: site?.name || 'Website',
    description: site?.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationNode = {
    '@type': 'Organization',
    url: baseUrl,
    name: site?.name || 'Organization',
    logo: site?.logo,
    sameAs: Object.values(site?.socials || {}),
  };

  const webPageNode =
    title || description || canonical
      ? {
          '@type': type === 'article' ? 'Article' : 'WebPage',
          url: canonical,
          name: title,
          headline: title,
          description: description,
          image: imageUrl,
          isPartOf: { '@id': baseUrl },
        }
      : null;

  const breadcrumbNode = Array.isArray(breadcrumb) && breadcrumb.length
    ? {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          item: toAbsoluteUrl(baseUrl, item.url),
        })),
      }
    : null;

  const graph = [webSiteNode, organizationNode, webPageNode, breadcrumbNode].filter(Boolean);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <>
      <link rel="canonical" href={canonical} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
