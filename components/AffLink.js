// components/AffLink.js
import Link from "next/link";

export default function AffLink({
  slug,
  href,
  children,
  className,
  rel = "nofollow sponsored noopener noreferrer",
  ...rest
}) {
  const to = href || (slug ? `/go/${slug}` : "/");
  return (
    <Link href={to} legacyBehavior>
      <a className={className} rel={rel} {...rest}>
        {children}
      </a>
    </Link>
  );
}
