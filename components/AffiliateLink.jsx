export default function AffiliateLink({
  href,
  asin,
  tag = process.env.NEXT_PUBLIC_AMAZON_TAG,
  children,
  ...rest
}) {
  let url = href || "";
  if (!url && asin) {
    url = `https://www.amazon.co.uk/dp/${asin}`;
  }
  if (url && tag && !/[?&]tag=/.test(url)) {
    url += (url.includes("?") ? "&" : "?") + `tag=${encodeURIComponent(tag)}`;
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      {...rest}
    >
      {children || "View on Amazon"}
    </a>
  );
}
