// /components/AffiliateLink.js
import React from "react";

export default function AffiliateLink({ href, children, ...rest }) {
  const onClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "select_content", {
        content_type: "affiliate_link",
        item_id: href
      });
    }
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={onClick}
      style={{ textDecoration: "none", fontWeight: 600 }}
      {...rest}
    >
      {children}
    </a>
  );
}
