// components/mdx/AffiliateLink.jsx
import { useCallback } from 'react';

export default function AffiliateLink({
  href = '',
  children,
  className = '',
  onClick,
  ...rest
}) {
  const handleClick = useCallback(
    (e) => {
      try {
        if (typeof window !== 'undefined' && window.plausible) {
          window.plausible('Affiliate Click', {
            props: {
              href,
              page: typeof location !== 'undefined' ? location.pathname : '',
            },
          });
        }
      } catch {}
      if (typeof onClick === 'function') onClick(e);
    },
    [href, onClick]
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={className}
      onClick={handleClick}
      {...rest}
    >
      {children || 'View price →'}
    </a>
  );
}


