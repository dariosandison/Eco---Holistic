// components/MDXComponents.js
import React from 'react';
import Link from 'next/link';

/** Basic external/inline link handling */
const A = ({ href = '', children, ...props }) => {
  const isExternal = /^https?:\/\//i.test(href);
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

/** Allow raw <img> in MDX without Next/Image constraints */
const Img = (props) => <img {...props} alt={props.alt || ''} />;

/** Shortcode: AffiliateLink */
export function AffiliateLink({ href = '#', children, rel, ...props }) {
  const finalRel = rel ? `${rel} noopener noreferrer` : 'sponsored noopener noreferrer';
  return (
    <a href={href} target="_blank" rel={finalRel} {...props}>
      {children}
    </a>
  );
}

/** Shortcode: Disclosure (collapsible section) */
export function Disclosure({ title = 'More', children, defaultOpen = false, ...props }) {
  return (
    <details open={defaultOpen} {...props} className="my-4">
      <summary className="cursor-pointer font-medium">{title}</summary>
      <div className="mt-2">{children}</div>
    </details>
  );
}

/** Shortcode: ProsCons */
export function ProsCons({ pros = [], cons = [], titlePros = 'Pros', titleCons = 'Cons' }) {
  const norm = (v) =>
    Array.isArray(v)
      ? v
      : String(v || '')
          .split(/\r?\n|\|/)
          .map((s) => s.trim())
          .filter(Boolean);

  const p = norm(pros);
  const c = norm(cons);

  return (
    <div className="grid gap-4 md:grid-cols-2 my-6">
      <div>
        <div className="font-semibold mb-2">{titlePros}</div>
        <ul className="list-disc pl-5 space-y-1">
          {p.map((item, idx) => (
            <li key={`pro-${idx}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-semibold mb-2">{titleCons}</div>
        <ul className="list-disc pl-5 space-y-1">
          {c.map((item, idx) => (
            <li key={`con-${idx}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Shortcode: BuyBox (minimal, safe default) */
export function BuyBox({
  title,
  price,
  url = '#',
  ctaLabel = 'Check price',
  image,
  children,
}) {
  return (
    <div className="border rounded-xl p-4 my-6">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      {image && (
        <div className="my-3">
          {/* raw img to avoid Next/Image constraints inside MDX */}
          <img src={image} alt={title || 'Product image'} className="max-h-48 object-contain" />
        </div>
      )}
      {children && <div className="text-sm opacity-90">{children}</div>}
      <div className="mt-3 flex items-center justify-between">
        {price && <div className="font-medium">{price}</div>}
        <a
          href={url}
          target="_blank"
          rel="nofollow noopener noreferrer sponsored"
          className="inline-block px-4 py-2 rounded-lg border"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}

const MDXComponents = {
  a: A,
  img: Img,
  AffiliateLink,
  Disclosure,
  ProsCons,
  BuyBox,
};

export default MDXComponents;
