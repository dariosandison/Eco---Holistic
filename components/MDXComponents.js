// components/MDXComponents.js
import React from 'react';
import Link from 'next/link';

// Local MDX-friendly components
import Callout from './Callout';
import CompareInline from './CompareInline';
import CompareTable from './CompareTable';
import FAQ from './FAQ';
import SmartLink from './SmartLink.jsx';

/**
 * MDX-safe image that works during SSG/ISR without extra config.
 * (We avoid next/image here because MDX often brings arbitrary external URLs.)
 */
function MdxImage(props) {
  const { alt = '', title, width, height, ...rest } = props;
  return (
    <img
      alt={alt}
      title={title || alt}
      loading="lazy"
      decoding="async"
      {...rest}
      style={{
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        margin: '1rem auto',
      }}
    />
  );
}

/**
 * Map of elements/components exposed to MDXRemote.
 * - HTML anchors -> SmartLink (adds target/rel for external links).
 * - img/Image -> MdxImage
 * - Custom blocks available to MDX content.
 */
const mdxComponents = {
  a: SmartLink,
  img: (p) => <MdxImage {...p} />,
  Image: (p) => <MdxImage {...p} />,
  Callout,
  CompareInline,
  CompareTable,
  FAQ,
  // You can add more MDX components here as needed
};

export default mdxComponents;   // default import support
export { mdxComponents };       // named import support
