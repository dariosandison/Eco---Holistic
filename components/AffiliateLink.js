export default function AffiliateLink({ href, children, className = "", ...props }) {
  const safeHref = href || "#";
  return (
    <a
      href={safeHref}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={`underline ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
