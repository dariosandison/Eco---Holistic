export default function AffiliateLink({ href, children, ...props }) {
  // Always mark affiliate/sponsored links
  const rel = ['nofollow', 'sponsored', 'noopener', 'noreferrer'].join(' ');
  return (
    <a href={href} rel={rel} target="_blank" {...props}>
      {children} <span className="affix">(affiliate)</span>
    </a>
  );
}
