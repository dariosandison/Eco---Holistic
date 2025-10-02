// components/SEO.js
import React from 'react';
import Head from 'next/head';
import StructuredDataAuto from './StructuredDataAuto';
import { toAbsolute } from '../lib/urls';

function isStr(v) { return typeof v === 'string' && v.trim().length > 0; }

export default function SEO({
  title,
  description,
  image,
  url,
  canonical,
  noindex = false,
  openGraph = {},
  twitter = {},
  // Structured data friendly props
  seo,          // optional: { title, description, image, author, datePublished, dateModified, url }
  product,      // optional: see StructuredDataAuto
  review,       // optional
  items,        // optional
  faq,          // optional
  breadcrumbs,  // optional
}) {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Site';
  const pageTitle = isStr(title) ? title : isStr(seo?.title) ? seo.title : siteName;
  const desc = isStr(description) ? description : isStr(seo?.description) ? seo.description : undefined;
  const ogImage = isStr(image) ? image : isStr(seo?.image) ? seo.image : undefined;
  const pageUrl = isStr(url) ? url : isStr(seo?.url) ? seo.url : undefined;
  const canon = isStr(canonical) ? canonical : isStr(pageUrl) ? pageUrl : undefined;

  const og = {
    title: pageTitle,
    description: desc,
    type: openGraph?.type || (product ? 'product' : 'article'),
    url: pageUrl,
    site_name: siteName,
    images: ogImage ? [toAbsolute(ogImage)] : undefined,
    ...openGraph,
  };

  const tw = {
    card: twitter?.card || (ogImage ? 'summary_large_image' : 'summary'),
    title: twitter?.title || pageTitle,
    description: twitter?.description || desc,
    image: twitter?.image || ogImage,
  };

  const robots = noindex ? 'noindex, nofollow' : 'index, follow';

  // Feed SEO props into StructuredDataAuto
  const sdSeo = seo || { title: pageTitle, description: desc, image: ogImage, url: pageUrl };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {desc ? <meta name="description" content={desc} /> : null}
        <meta name="robots" content={robots} />
        {canon ? <link rel="canonical" href={canon} /> : null}

        {/* Open Graph */}
        {og.title ? <meta property="og:title" content={og.title} /> : null}
        {og.description ? <meta property="og:description" content={og.description} /> : null}
        {og.type ? <meta property="og:type" content={og.type} /> : null}
        {og.url ? <meta property="og:url" content={og.url} /> : null}
        {og.site_name ? <meta property="og:site_name" content={og.site_name} /> : null}
        {Array.isArray(og.images) ? og.images.map((img, i) => (
          <meta key={i} property="og:image" content={img} />
        )) : null}

        {/* Twitter */}
        {tw.card ? <meta name="twitter:card" content={tw.card} /> : null}
        {tw.title ? <meta name="twitter:title" content={tw.title} /> : null}
        {tw.description ? <meta name="twitter:description" content={tw.description} /> : null}
        {tw.image ? <meta name="twitter:image" content={tw.image} /> : null}
      </Head>

      <StructuredDataAuto
        seo={sdSeo}
        product={product}
        review={review}
        items={items}
        faq={faq}
        breadcrumbs={breadcrumbs}
      />
    </>
  );
}
