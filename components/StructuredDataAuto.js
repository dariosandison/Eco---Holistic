// components/StructuredDataAuto.js
import React from 'react';
import { clean, ProductSchema, ReviewSchema, ArticleSchema, ItemListSchema, FAQSchema, BreadcrumbSchema } from '../lib/schema';

function JsonLd({ data }) {
  const content = JSON.stringify(clean(data));
  if (!content || content === '{}' || content === '[]') return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: content }} />;
}

/**
 * Drop this component once in a page to emit JSON-LD based on props you already return.
 * Looks for these props (all optional):
 *  - seo: { title, description, image, author, datePublished, dateModified, url }
 *  - product: { name, image, url, price, currency, brand, rating, ratingCount, sku, gtin, availability }
 *  - review:  { name, author, datePublished, reviewBody, rating, item: <product fields> }
 *  - items:   [{ name, url, image }]  // roundup lists
 *  - faq:     [{ q, a }]
 *  - breadcrumbs: [{ name, item }]
 */
export default function StructuredDataAuto({ seo, product, review, items, faq, breadcrumbs }) {
  // Always safe: Article when 'seo' has title/description.
  const article = seo?.title ? ArticleSchema({
    headline: seo.title,
    description: seo.description,
    image: seo.image,
    author: seo.author,
    datePublished: seo.datePublished,
    dateModified: seo.dateModified,
    url: seo.url,
  }) : null;

  return (
    <>
      {article ? <JsonLd data={article} /> : null}
      {product ? <JsonLd data={ProductSchema(product)} /> : null}
      {review ? <JsonLd data={ReviewSchema(review)} /> : null}
      {Array.isArray(items) && items.length ? <JsonLd data={ItemListSchema(items)} /> : null}
      {Array.isArray(faq) && faq.length ? <JsonLd data={FAQSchema(faq)} /> : null}
      {Array.isArray(breadcrumbs) && breadcrumbs.length ? <JsonLd data={BreadcrumbSchema(breadcrumbs)} /> : null}
    </>
  );
}
