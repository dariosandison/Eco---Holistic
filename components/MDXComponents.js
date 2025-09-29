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
  const isInternal = href.startsWith('/');

  if (isAnchor || isInternal) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  // External: http(s):// or protocol-relative //
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

/**
 * MDX-friendly image:
 * - Uses <img> when width/height are unknown (most flexible for MDX content).
 * - Uses Next/Image when width & height are provided (perf benefits).
 */
function MdxImage(props) {
  const { src = '', alt = '', width, height, ...rest } = props;

  // If both width & height are provided, use Next/Image
  if (width && height) {
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

  // Fallback to standard img to avoid layout constraints
  return <img src={src} alt={alt} loading="lazy" decoding="async" {...rest} />;
}

/**
 * Single, canonical components map for MDX rendering.
 * Exported as both default and named `mdxComponents` to satisfy all imports.
 */
const mdxComponents = {
  a: SmartLink,
  img: (props) => <MdxImage {...props} />,
  Ima
