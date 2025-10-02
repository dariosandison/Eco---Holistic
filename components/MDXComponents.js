// components/MDXComponents.js
import Link from 'next/link';
import AffiliateLink from './mdx/AffiliateLink';
import BuyBox from './mdx/BuyBox';
import ProsCons from './mdx/ProsCons';
import Disclosure from './mdx/Disclosure';
import ComparisonTable from './ComparisonTable';
import StickyCTA from './mdx/StickyCTA';

const A = ({ href = '', children, className = '', onClick, ...rest }) => {
  const isExternal = /^https?:\/\//i.test(href);
  const handleClick = (e) => {
    try {
      if (isExternal && typeof window !== 'undefined' && window.plausible) {
        window.plausible('Outbound Click', {
          props: {
            href,
            page: typeof location !== 'undefined' ? location.pathname : '',
          },
        });
      }
    } catch {}
    if (typeof onClick === 'function') onClick(e);
  };

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className={className}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={handleClick} {...rest}>
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
  StickyCTA,
};

export const mdxComponents = MDXComponents;
export default MDXComponents;
