// components/AffiliateLink.js
import React from "react";

/**
 * Usage in MDX:
 * <AffiliateLink href="https://www.amazon.com/dp/B00XXXX?tag=mytag-20">Product</AffiliateLink>
 * or <AffiliateLink asin="B00XXXX">Product</AffiliateLink>
 */
export default function AffiliateLink({ href, asin, tag, children, className = "" }) {
  const amazonTag = tag || process.env.NEXT_PUBLIC_AMAZON_TAG || "";
  let url = href || "";
  if (!url && asin) {
    const base = "https://www.amazon.com/dp/";
    url = `${base}${asin}${amazonTag ? `?tag=${amazonTag}` : ""}`;
  }
  if (amazonTag && url && !/[?&]tag=/.test(url) && /amazon\./i.test(url)) {
    url += (url.includes("?") ? "&" : "?") + `tag=${amazonTag}`;
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={`underline underline-offset-2 hover:opacity-90 ${className}`}
    >
      {children || url}
    </a>
  );
}
