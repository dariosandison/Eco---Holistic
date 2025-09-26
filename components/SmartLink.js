// components/SmartLink.js
import Link from 'next/link';

export default function SmartLink({ href = '', children, ...props }) {
  const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
  if (isInternal) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
