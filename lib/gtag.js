// components/AffiliateLink.js
import { event as gaEvent } from '../lib/gtag';

export default function AffiliateLink({ href = "#", children, className = "", onClick, ...props }) {
  const handleClick = (e) => {
    try {
      gaEvent({
        action: 'affiliate_click',
        category: 'affiliate',
        label: href,
        value: 1
      });
    } catch {}
    onClick?.(e);
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={`underline ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
