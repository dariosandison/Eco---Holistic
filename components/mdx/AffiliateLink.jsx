// components/mdx/AffiliateLink.jsx
import React from 'react';

function withUtm(href = '', utm = '') {
  if (!utm) return href;
  try {
    const url = new URL(href, href.startsWith('http') ? undefined : 'https://example.com');
    // only append to absolute URLs
    if (href.startsWith('http')) {
      utm
        .split('&')
        .map((kv) => kv.trim())
        .filter(Boolean)
        .forEach((pair) => {
          const [k, v] = pair.split('=');
          if (k && v) url.searchParams.set(k, v);
        });
      return url.toString();
    }
    return href;
  } catch {
    return href;
  }
}

export default function AffiliateLink({
  href = '',
  children,
  label,
  utm = '',
  rel = 'sponsored nofollow noopener noreferrer',
  ...props
}) {
  const finalHref = withUtm(href, utm);
  return (
    <a href={finalHref} target="_blank" rel={rel} {...props}>
      {children || label || finalHref}
    </a>
  );
}
