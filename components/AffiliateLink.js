// components/AffiliateLink.js
export default function AffiliateLink({ href, children, className = "", ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={`underline decoration-dotted hover:decoration-solid ${className}`}
      {...props}
    >
      {children}
      <span className="sr-only"> (affiliate link)</span>
    </a>
  );
}
