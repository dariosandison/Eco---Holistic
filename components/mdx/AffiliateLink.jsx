// components/mdx/AffiliateLink.jsx
export default function AffiliateLink({ href, children, className = '', ...rest }) {
  if (!href) return <span>{children}</span>;
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={`inline-flex items-center gap-1 underline decoration-2 underline-offset-2 ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
