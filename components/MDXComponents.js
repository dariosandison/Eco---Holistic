// components/MDXComponents.js
import Link from 'next/link';
import Image from 'next/image';

// Keep your existing components
import Callout from './Callout';
import CompareInline from './CompareInline';
import CompareTable from './CompareTable';
import FAQ from './FAQ';

// Smart internal/external link
function SmartLink({ href = '', children, ...props }) {
  const isInternal =
    href &&
    (href.startsWith('/') || href.startsWith('#')) &&
    !href.startsWith('//');

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
      rel="noopener noreferrer nofollow"
      {...props}
    >
      {children}
    </a>
  );
}

// MDX <img> mapper -> Next/Image where possible
function MdxImage({ src = '', alt = '', width, height, ...rest }) {
  const isExternal =
    src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//');

  // If we don't have dims or it's external, fall back to plain <img>
  if (!width || !height || isExternal) {
    return <img src={src} alt={alt} {...rest} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={Number(width)}
      height={Number(height)}
      {...rest}
    />
  );
}

/**
 * <Disclosure title="...">content</Disclosure>
 * Simple SSR-safe details/summary. If your MDX used a single tag `Disclosure`,
 * this will work without pulling in headlessui.
 */
function Disclosure({ title, children, open, ...rest }) {
  return (
    <details open={open} {...rest}>
      {title ? <summary>{title}</summary> : null}
      <div>{children}</div>
    </details>
  );
}

/**
 * <AffiliateLink href="...">Label</AffiliateLink>
 * Keeps rel attributes for compliance.
 */
function AffiliateLink({ href = '', children, ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      {...props}
    >
      {children || href}
    </a>
  );
}

/**
 * <BuyBox title="..." href="..." price="$..." note="...">…</BuyBox>
 * Minimal, SSR-safe fallback so reviews render during export.
 * It will gracefully render whatever props your MDX provides.
 */
function BuyBox({ title, href, price, note, children }) {
  return (
    <div className="not-prose my-6 rounded-lg border p-4">
      {title ? <h4 className="m-0">{title}</h4> : null}
      {price ? <div style={{ opacity: 0.8 }}>{price}</div> : null}
      {children ? <div className="mt-2">{children}</div> : null}
      <div className="mt-3">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block rounded-md px-3 py-2"
            style={{ border: '1px solid currentColor' }}
          >
            Buy
          </a>
        ) : null}
        {note ? <div style={{ opacity: 0.7, marginTop: 8 }}>{note}</div> : null}
      </div>
    </div>
  );
}

const mdxComponents = {
  a: SmartLink,
  img: (props) => <MdxImage {...props} />,
  Image: (props) => <MdxImage {...props} />,
  Callout,
  CompareInline,
  CompareTable,
  FAQ,

  // Newly mapped components seen in your MDX
  Disclosure,
  AffiliateLink,
  BuyBox,
};

export default mdxComponents;   // default import support
export { mdxComponents };       // named import support
