import { withAmazonTag } from "../lib/affiliates";

export default function AffiliateButton({ href, children = "Check price on Amazon" }) {
  return (
    <a
      className="btn"
      data-cta="affiliate"
      href={withAmazonTag(href)}
      target="_blank"
      rel="nofollow sponsored noopener"
    >
      {children}
    </a>
  );
}
