// components/MDXComponents.js
import React from 'react';
import Link from 'next/link';
import AffiliateLink from './mdx/AffiliateLink';
import BuyBox from './mdx/BuyBox';
import ProsCons from './mdx/ProsCons';
import Disclosure from './mdx/Disclosure';

// Internal vs external links with <Link> for internal routes
const A = ({ href = '', children, ...props }) => {
  if (!href) return <a {...props}>{children}</a>;
  const isInternal = href.startsWith('/');
  if (isInternal) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

const Pre = (props) => <pre {...props} />;
const Code = (props) => <code {...props} />;

const MDXComponents = {
  // HTML/Markdown element overrides
  a: A,
  pre: Pre,
  code: Code,

  // Shortcodes/components referenced in MDX content
  AffiliateLink,
  BuyBox,
  ProsCons,
  Disclosure,
};

export default MDXComponents;
