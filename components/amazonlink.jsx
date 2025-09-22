import { withUtm, withAmazonTag } from '@/src/lib/utm';

export default function AmazonLink({ href, children, className }) {
  const url = withUtm(withAmazonTag(href));
  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={className}
    >
      {children}
    </a>
  );
}
