import React from 'react';
import AffiliateLink from './AffiliateLink';

export default function BuyBox({
  title,
  subtitle,
  description,
  image,
  price,
  currency = '$',
  href,
  cta = 'Check price',
  finePrint,
  features = [],
}) {
  return (
    <section
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: 16,
        display: 'grid',
        gap: 12,
        gridTemplateColumns: image ? '96px 1fr' : '1fr',
        alignItems: 'start',
        background: '#fff',
      }}
    >
      {image ? (
        <div style={{ width: 96, height: 96, overflow: 'hidden', borderRadius: 8 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title || 'Product image'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ) : null}

      <div style={{ display: 'grid', gap: 8 }}>
        {title ? (
          <h3 style={{ margin: 0, fontSize: 18, lineHeight: 1.3 }}>{title}</h3>
        ) : null}
        {subtitle ? (
          <p style={{ margin: 0, color: '#6b7280', fontSize: 14 }}>{subtitle}</p>
        ) : null}
        {description ? (
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>{description}</p>
        ) : null}

        {Array.isArray(features) && features.length ? (
          <ul style={{ margin: '4px 0 0', paddingLeft: 18, fontSize: 14 }}>
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        ) : null}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
          {price ? (
            <span style={{ fontWeight: 600, fontSize: 16 }}>
              {currency}
              {price}
            </span>
          ) : null}
          {href ? (
            <AffiliateLink
              href={href}
              style={{
                display: 'inline-block',
                padding: '8px 12px',
                borderRadius: 8,
                border: '1px solid #111827',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              {cta}
            </AffiliateLink>
          ) : null}
        </div>

        {finePrint ? (
          <p style={{ margin: '6px 0 0', color: '#6b7280', fontSize: 12 }}>{finePrint}</p>
        ) : null}
      </div>
    </section>
  );
}
