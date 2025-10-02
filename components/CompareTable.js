// components/CompareTable.js
import React from 'react';
import AffLink from './AffLink';

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

function clean(obj) {
  if (Array.isArray(obj)) return obj.map(clean).filter((v) => v != null);
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      const cv = clean(v);
      if (cv !== undefined) out[k] = cv;
    }
    return Object.keys(out).length ? out : undefined;
  }
  return obj === undefined ? undefined : obj;
}

function JsonLd({ data }) {
  const content = JSON.stringify(clean(data));
  if (!content || content === '{}') return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

/**
 * CompareTable
 *
 * products: Array of {
 *   name*,
 *   url* (affiliate),
 *   image, brand, price, currency, rating, ratingCount,
 *   badge, // "Best Overall"
 *   summary,
 *   pros?: string[],
 *   cons?: string[],
 *   features?: Record<string, string | number | boolean>
 * }
 */
export default function CompareTable({ products = [], title = 'Top Picks' }) {
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: clean({
        '@type': 'Product',
        name: p.name,
        brand: p.brand,
        image: p.image,
        review: p.rating
          ? {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: p.rating,
              },
              author: 'Editorial Team',
            }
          : undefined,
        aggregateRating:
          p.rating && p.ratingCount
            ? {
                '@type': 'AggregateRating',
                ratingValue: p.rating,
                reviewCount: p.ratingCount,
              }
            : undefined,
        offers:
          p.price && p.url
            ? {
                '@type': 'Offer',
                price: String(p.price),
                priceCurrency: p.currency || 'USD',
                url: p.url,
                availability: 'https://schema.org/InStock',
              }
            : undefined,
      }),
    })),
  };

  return (
    <>
      <div className="compare-wrapper">
        {isNonEmptyString(title) && <h2 className="compare-title">{title}</h2>}
        <div className="compare-scroll">
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col">Pick</th>
                <th scope="col">Key Features</th>
                <th scope="col">Rating</th>
                <th scope="col" aria-label="Price and CTA">
                  Buy
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={`${p.name}-${i}`}>
                  <th scope="row" className="compare-pick">
                    {p.badge ? <div className="badge">{p.badge}</div> : null}
                    <div className="name">{p.name}</div>
                    {p.summary ? <div className="summary">{p.summary}</div> : null}
                    {p.pros?.length ? (
                      <ul className="pros">
                        {p.pros.map((x, xi) => (
                          <li key={xi}>+ {x}</li>
                        ))}
                      </ul>
                    ) : null}
                    {p.cons?.length ? (
                      <ul className="cons">
                        {p.cons.map((x, xi) => (
                          <li key={xi}>– {x}</li>
                        ))}
                      </ul>
                    ) : null}
                  </th>
                  <td className="compare-features">
                    {p.features ? (
                      <dl>
                        {Object.entries(p.features).map(([k, v]) => (
                          <div key={k} className="feat-row">
                            <dt>{k}</dt>
                            <dd>{String(v)}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : (
                      <em>—</em>
                    )}
                  </td>
                  <td className="compare-rating">
                    {p.rating ? (
                      <>
                        <div className="rating">{p.rating.toFixed(1)}/5</div>
                        {p.ratingCount ? (
                          <div className="rating-count">{p.ratingCount} reviews</div>
                        ) : null}
                      </>
                    ) : (
                      <em>—</em>
                    )}
                  </td>
                  <td className="compare-cta">
                    {p.price ? (
                      <div className="price">
                        {p.currency || 'USD'} {p.price}
                      </div>
                    ) : null}
                    {isNonEmptyString(p.url) ? (
                      <AffLink
                        href={p.url}
                        className="btn"
                        aria-label={`Check price for ${p.name}`}
                      >
                        Check price
                      </AffLink>
                    ) : (
                      <em>—</em>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ItemList JSON-LD */}
      <JsonLd data={itemListLd} />

      <style jsx>{`
        .compare-wrapper {
          margin: 24px 0;
        }
        .compare-title {
          margin: 0 0 12px;
          font-size: 1.25rem;
          line-height: 1.3;
        }
        .compare-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .compare-table {
          width: 100%;
          border-collapse: collapse;
        }
        .compare-table th,
        .compare-table td {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding: 12px;
          vertical-align: top;
        }
        .compare-pick .badge {
          display: inline-block;
          font-size: 0.75rem;
          padding: 4px 8px;
          background: #eef4ff;
          border-radius: 999px;
          margin-bottom: 6px;
        }
        .compare-pick .name {
          font-weight: 700;
        }
        .compare-pick .summary {
          opacity: 0.85;
          margin-top: 4px;
        }
        .pros,
        .cons {
          list-style: none;
          margin: 8px 0 0;
          padding: 0;
          font-size: 0.92rem;
        }
        .compare-features dl {
          margin: 0;
        }
        .feat-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin: 4px 0;
        }
        .feat-row dt {
          opacity: 0.7;
        }
        .compare-rating .rating {
          font-weight: 700;
        }
        .compare-rating .rating-count {
          font-size: 0.85rem;
          opacity: 0.75;
        }
        .compare-cta .price {
          font-weight: 700;
          margin-bottom: 6px;
        }
        .btn {
          display: inline-block;
          padding: 10px 14px;
          border-radius: 8px;
          text-decoration: none;
          border: 1px solid rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </>
  );
}
