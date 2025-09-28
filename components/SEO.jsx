// components/SEO.jsx
import Head from 'next/head';

function jsonLd(obj) {
  try { return JSON.stringify(obj); } catch { return ''; }
}

export default function SEO(props) {
  const {
    title = 'Wild & Well',
    description = 'Your guide to holistic health, eco friendly living and natural wellness.',
    url = 'https://www.wild-and-well.store/',
    type = 'website',
    image = '/og-default.jpg', // put an image in /public if you have one
    noindex = false,

    // Optional extras
    article,          // { datePublished, dateModified, author }
    product,          // { name, brand, images[], reviewBody, rating, pros[], cons[] }
    breadcrumbs = [], // [{ name, item }]
    siteName = 'Wild & Well'
  } = props || {};

  // Canonical must be absolute
  const canonical = url.startsWith('http') ? url : `https://www.wild-and-well.store${url}`;

  const ld = [];

  if (breadcrumbs?.length) {
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

  if (type === 'article' && article) {
    ld.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      mainEntityOfPage: canonical,
      image: Array.isArray(image) ? image : [image],
      datePublished: article.datePublished || undefined,
      dateModified:  article.dateModified  || article.datePublished || undefined,
      author: article.author ? { '@type':'Person', name: article.author } : undefined,
      publisher: { '@type': 'Organization', name: siteName, url: 'https://www.wild-and-well.store' }
    });
  }

  if (type === 'product' && product) {
    const images = product.images && product.images.length ? product.images : (Array.isArray(image) ? image : [image]);
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name || title,
      brand: product.brand ? { '@type': 'Brand', name: product.brand } : undefined,
      image: images,
      description: product.reviewBody || description || title
    };
    if (product.rating) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: Number(product.rating),
        reviewCount: 1
      };
    }
    ld.push(schema);
  }

  return (
    <Head>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {Array.isArray(image)
        ? image.map((img, i) => <meta key={i} property="og:image" content={img} />)
        : <meta property="og:image" content={image} />}
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {Array.isArray(image)
        ? image.map((img, i) => <meta key={i} name="twitter:image" content={img} />)
        : <meta name="twitter:image" content={image} />}

      {/* JSON-LD */}
      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(obj) }} />
      ))}
    </Head>
  );
}
