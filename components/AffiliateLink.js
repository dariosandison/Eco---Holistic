// components/AffiliateLink.js
export default function AffiliateLink({ href, children, className = "" }) {
  if (!href) return children ?? null;
  const isExternal = /^https?:\/\//i.test(href);
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener nofollow sponsored" : undefined}
      className={className}
      style={{ textDecoration: "underline" }}
    >
      {children}
      <span
        style={{
          marginLeft: 6,
          fontSize: 11,
          padding: "1px 6px",
          borderRadius: 999,
          border: "1px solid #ccc",
          verticalAlign: "middle",
        }}
        aria-label="Affiliate link"
        title="Affiliate link"
      >
        ad
      </span>
    </a>
  );
}
