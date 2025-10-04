// components/CTABox.js
import React from 'react';

import Image from 'next/image';
import AffLink from './AffLink';
import PriceTag from './PriceTag';
import { coerceCurrency } from '../lib/price';

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: content }} />;
}

/**
 * CTABox – single product callout with optional JSON-LD and deal badge.
 * Props:
 *  - title, subtitle
 *  - image, alt
 *  - url*, label? (button)
 *  - price, msrp?, currency? (USD default)
 *  - bullets?: string[]
 *  - badge (free-form tag)
 *  - emitJsonLd?: boolean
 *  - brand, rating, ratingCount
 */
export default function CTABox({
  title,
  subtitle,
  image,
  alt,
  url,
  label = 'Check price',
  price,
  msrp,
  currency = 'USD',
  bullets = [],
  badge,
  emitJsonLd = false,
  brand,
  rating,
  ratingCount,
  locale,
}) {
  const cur = coerceCurrency(currency);

  const productLd = emitJsonLd
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: title,
        image,
        brand,
        aggregateRating:
          rating && ratingCount
            ? {
                '@type': 'AggregateRating',
                ratingValue: rating,
                reviewCount: ratingCount,
              }
            : undefined,
        offers:
          price && url
            ? {
                '@type': 'Offer',
                price: String(price),
                priceCurrency: cur,
                url,
                availability: 'https://schema.org/InStock',
              }
            : undefined,
      }
    : null;

  return (
    <aside className="cta">
      <div className="media">
        {image ? <Imagesrc={image} alt={alt || title || ''} loading="lazy" / width={800} height={600} /> : null}
      </div>
      <div className="copy">
        {badge ? <div className="badge">{badge}</div> : null}
        {title ? <h3 className="title">{title}</h3> : null}
        {subtitle ? <p className="sub">{subtitle}</p> : null}

        <PriceTag price={price} msrp={msrp} currency={cur} locale={locale} />

        {Array.isArray(bullets) && bullets.length ? (
          <ul className="bullets">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        ) : null}

        {isNonEmptyString(url) ? (
          <AffLink href={url} className="btn" aria-label={`Go to ${title}`}>
            {label}
          </AffLink>
        ) : null}
      </div>

      {emitJsonLd ? <JsonLd data={productLd} /> : null}

      <style jsx>{`
        .cta {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 14px;
          padding: 14px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          margin: 20px 0;
          background: #fff;
        }
        .media img {
          width: 120px;
          height: auto;
          border-radius: 8px;
          display: block;
        }
        .badge {
          display: inline-block;
          font-size: 0.75rem;
          padding: 4px 8px;
          background: #eef4ff;
          border-radius: 999px;
          margin-bottom: 6px;
        }
        .title {
          margin: 4px 0 2px;
          font-size: 1.1rem;
          line-height: 1.25;
        }
        .sub {
          margin: 0 0 6px;
          opacity: 0.85;
        }
        .bullets {
          margin: 0 0 10px;
          padding-left: 18px;
        }
        .btn {
          display: inline-block;
          padding: 10px 14px;
          border-radius: 8px;
          text-decoration: none;
          border: 1px solid rgba(0, 0, 0, 0.12);
        }
        @media (max-width: 520px) {
          .cta {
            grid-template-columns: 1fr;
          }
          .media img {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
    </aside>
  );
}
