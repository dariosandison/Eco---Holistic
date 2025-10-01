import React from 'react';

/**
 * MDX-friendly affiliate link wrapper.
 *
 * Usage in MDX:
 * <AffiliateLink href="https://example.com/product">Buy on Example</AffiliateLink>
 */
export default function AffiliateLink({
  href,
  children,
  rel = 'sponsored nofollow noopener noreferrer',
  target = '_blank',
  underline = true,
  style,
  ...props
}) {
  if (!href) return children || null;

  return (
    <a
      href={href}
      rel={rel}
      target={target}
      {...props}
      style={{
        color: '#0ea5e9',
        textDecoration: underline ? 'underline' : 'none',
        fontWeight: 600,
        ...style,
      }}
    >
      {children}
    </a>
  );
}
