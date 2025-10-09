export default function AffiliateLink({ href, children, className = "" }) {
  const url = new URL(href, "https://amazon.com");
  // Ensure we keep query string (eg. tag=yourtag-20)
  return (
    <a
      href={url.toString()}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`underline underline-offset-2 ${className}`}
    >
      {children}
    </a>
  );
}
