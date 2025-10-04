import React from 'react';


import Image from 'next/image';
/**
 * Simple "buy box" product card for MDX.
 *
 * Usage:
 * <BuyBox
 *   title="Acme Filter"
 *   price="$89"
 *   retailer="Amazon"
 *   href="https://example.com/affiliate"
 *   image="/images/filter.jpg"
 *   features={["HEPA-grade", "Quiet", "2-year warranty"]}
 *   buttonText="Check price"
 * />
 */
export default function BuyBox({
  title,
  subtitle,
  price,
  retailer,
  href,
  image,
  imageAlt,
  badge,
  features = [],
  buttonText = 'Check price',
  disclaimer = 'This is an affiliate link.',
  compact = false,
  ...props
}) {
  const hasLink = typeof href === 'string' && href.length > 0;

  return (
    <div
      {...props}
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: compact ? 12 : 16,
        display: 'grid',
        gap: 12,
        gridTemplateColumns: image ? '96px 1fr' : '1fr',
        alignItems: 'center',
        background: '#fff',
      }}
    >
      {image ? (
        <div style={{ width: 96, height: 96, overflow: 'hidden', borderRadius: 10, background: '#f3f4f6' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
  src={image}
  alt={imageAlt || title || 'Product image'}
  width={96}
  height={96}
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  loading="lazy"
/>

        </div>
      ) : null}

      <div style={{ display: 'grid', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <div style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.3 }}>{title}</div>
          {badge ? (
            <span
              style={{
                background: '#ecfeff',
                color: '#0ea5e9',
                border: '1px solid #cffafe',
                padding: '2px 8px',
                fontSize: 12,
                borderRadius: 9999,
                fontWeight: 600,
              }}
            >
              {badge}
            </span>
          ) : null}
        </div>

        {subtitle ? <div style={{ color: '#6b7280', fontSize: 14 }}>{subtitle}</div> : null}

        <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', flexWrap: 'wrap' }}>
          {price ? <div style={{ fontWeight: 700 }}>{price}</div> : null}
          {retailer ? <div style={{ color: '#6b7280', fontSize: 14 }}>at {retailer}</div> : null}
        </div>

        {Array.isArray(features) && features.length ? (
          <ul style={{ margin: 0, paddingLeft: 18, color: '#374151', fontSize: 14 }}>
            {features.map((f, i) => (
              <li key={i} style={{ marginBottom: 4 }}>
                {f}
              </li>
            ))}
          </ul>
        ) : null}

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 4 }}>
          {hasLink ? (
            <a
              href={href}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              style={{
                display: 'inline-block',
                fontWeight: 700,
                borderRadius: 8,
                border: '1px solid #0ea5e9',
                padding: '8px 12px',
                textDecoration: 'none',
                color: '#fff',
                background: '#0ea5e9',
              }}
            >
              {buttonText}
            </a>
          ) : null}
          {disclaimer ? <small style={{ color: '#6b7280' }}>{disclaimer}</small> : null}
        </div>
      </div>
    </div>
  );
}
