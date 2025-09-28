// components/AffiliateLink.js
import affiliates from '../data/affiliates';
import { event as gaEvent } from '../lib/gtag';

export default function AffiliateLink({ slug, href, children, className = "", onClick, ...props }) {
  const finalHref = slug ? `/go/${slug}` : (href || '#');
  const label = slug && affiliates[slug] ? affiliates[slug] : (href || slug || finalHref);

  const handleClick = (e) => {
    try {
      gaEvent({ action: 'affiliate_click', category: 'affiliate', label, value: 1 });
    } catch {}
    onClick?.(e);
  };

  return (
    <a
      href={finalHref}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={`btn-link ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
