// components/MDXComponents.js
import Link from 'next/link';
import AffiliateLink from './mdx/AffiliateLink';
import BuyBox from './mdx/BuyBox';
import ProsCons from './mdx/ProsCons';
import Disclosure from './mdx/Disclosure';
import ComparisonTable from './mdx/ComparisonTable';

const A = ({ href = '', children, className = '', ...rest }) => {
  const isExternal = /^https?:\/\//i.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={`underline underline-offset-2 ${className}`}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`underline underline-offset-2 ${className}`} {...rest}>
      {children}
    </Link>
  );
};

const MDXComponents = {
  a: A,
  AffiliateLink,
  BuyBox,
  ProsCons,
  Disclosure,
  ComparisonTable,
};

// Support both default export and named `mdxComponents` for existing imports.
export const mdxComponents = MDXComponents;
export default MDXComponents;
