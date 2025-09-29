// components/MDXComponents.js
import Link from 'next/link';
import AffiliateLink from './mdx/AffiliateLink';
import BuyBox from './mdx/BuyBox';
import ProsCons from './mdx/ProsCons';
import Disclosure from './mdx/Disclosure';
// FIX: ComparisonTable lives in components/ComparisonTable.jsx (not in components/mdx)
import ComparisonTable from './ComparisonTable';

/**
 * Smart anchor: external links open in a new tab with sponsored/nofollow;
 * internal links use Next <Link> for client-side navigation.
 */
const A = ({ href = '', children, className = '', ...rest }) => {
  const isExternal = /^https?:\/\//i.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className={className}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
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
