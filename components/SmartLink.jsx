// components/SmartLink.jsx
import Link from 'next/link';

export default function SmartLink({ href = '', children, ...rest }) {
  const isInternal = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternal) {
    // Internal links use Next.js <Link> for client-side navigation
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  // External/affiliate links are always nofollow+sponsored
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}
