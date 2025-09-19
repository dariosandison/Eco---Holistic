// components/AmazonLink.js
import { getAmazonUrl } from '../lib/affiliates';

export default function AmazonLink({ href, children, ...props }) {
  const url = getAmazonUrl(href);
  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow sponsored noopener"
      {...props}
    >
      {children}
    </a>
  );
}
