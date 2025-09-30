import React from 'react';

export default function AffiliateLink({
  href,
  children,
  title,
  rel = 'sponsored noopener nofollow',
  target = '_blank',
  ...props
}) {
  if (!href) return children || null;

  return (
    <a href={href} title={title} rel={rel} target={target} {...props}>
      {children || title || href}
    </a>
  );
}
