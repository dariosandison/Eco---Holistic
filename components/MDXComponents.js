// components/MDXComponents.js
import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';

import Callout from './Callout';
import CompareInline from './CompareInline';
import CompareTable from './CompareTable';
import FAQ from './FAQ';

/**
 * Smart anchor: internal links use <Link>, external open in new tab.
 */
function SmartLink(props) {
  const { href = '', children, ...rest } = props;

  const isAnchor = href.startsWith('#');
  const isExternal =
    /^https?:\/\//i.test(href) ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:');

  if (!href) {
    return <a {...rest}>{children}</a>;
  }

  if (isAnchor) {
    // Hash links stay as <a>
    return <a href={href} {...rest}>{children}</a>;
  }

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  // Internal links
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

/**
 * MDX <img /> wrapper that uses next/image when possible.
 */
function MdxImage({ src = '', alt = '', width, height, ...rest }) {
  // Allow plain <img> for unknown dimensions/SVGs/data URLs.
  const usePlainImg =
    !width ||
    !height ||
    src.endsWith('.svg') ||
    src.startsWith('data:');

  if (usePlainImg) {
    return <img src={src} alt={alt} {...rest} />;
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={Number(width)}
      height={Number(height)}
      {...rest}
    />
  );
}

/**
 * Exported as both default and named `mdxComponents` to satisfy all imports.
 */
const mdxComponents = {
  a: SmartLink,
  img: (props) => <MdxImage {...props} />,
  Image: (props) => <MdxImage {...props} />,
  Callout,
  CompareInline,
  CompareTable,
  FAQ,
};

export default mdxComponents;
export { mdxComponents };
