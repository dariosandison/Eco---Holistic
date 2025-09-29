// components/MDXComponents.js
// Central mapping of shortcodes/components available inside MDX.

import React from 'react';

// Existing site components (keep these as-is so current MDX keeps working)
import SmartLink from './SmartLink';
import MdxImage from './MdxImage';
import Callout from './Callout';
import CompareInline from './CompareInline';
import CompareTable from './CompareTable';
import FAQ from './FAQ';

// Safe, minimal fallbacks for MDX-only components that appeared in content.
// If you already have “real” versions elsewhere, you can swap these imports later.
// These ensure prerendering doesn’t fail if the MDX references them.

const Disclosure = ({ summary, title, children, open, ...props }) => (
  <details open={open} {...props}>
    <summary>{summary ?? title ?? 'Details'}</summary>
    <div>{children}</div>
  </details>
);

const AffiliateLink = ({ href, children, ...props }) => (
  <a
    href={href}
    target="_blank"
    rel="sponsored nofollow noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

const BuyBox = ({
  title,
  price,
  href,
  cta = 'Buy now',
  note,
  children,
  ...props
}) => (
  <div
    {...props}
    style={{
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      padding: 16,
      margin: '16px 0',
    }}
  >
    {title && <h3 style={{ margin: '0 0 8px' }}>{title}</h3>}
    {children && <div style={{ marginBottom: 8 }}>{children}</div>}
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      {typeof price !== 'undefined' && (
        <strong>{String(price)}</strong>
      )}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          style={{
            padding: '8px 12px',
            borderRadius: 8,
            border: '1px solid #111827',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          {cta}
        </a>
      )}
    </div>
    {note && <p style={{ marginTop: 8, fontSize: 14, opacity: 0.8 }}>{note}</p>}
  </div>
);

// Final mapping provided to <MDXRemote components={...} />
const mdxComponents = {
  // HTML element overrides
  a: SmartLink,
  img: (props) => <MdxImage {...props} />,
  Image: (props) => <MdxImage {...props} />,

  // Site components
  Callout,
  CompareInline,
  CompareTable,
  FAQ,

  // MDX-only/fallback components referenced in content
  Disclosure,
  AffiliateLink,
  BuyBox,
};

export default mdxComponents;
export { mdxComponents };
