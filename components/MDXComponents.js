// components/MDXComponents.js
import Link from 'next/link';
import Image from 'next/image';

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

// Simple <Disclosure title="...">…</Disclosure>
function Disclosure({ title, children, open, ...rest }) {
  return (
    <details open={open} {...rest}>
      {title ? <summary>{title}</summary> : null}
      <div>{children}</div>
    </details>
  );
}

// <AffiliateLink href="...">Label</AffiliateLink>
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

// <BuyBox title href price note>…</BuyBox>
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

// <ProsCons pros={['...']} cons={['...']} />
function ProsCons({ pros = [], cons = [] }) {
  const toArray = (v) =>
    Array.isArray(v) ? v : v ? String(v).split('\n').filter(Boolean) : [];
  const prosArr = toArray(pros);
  const consArr = toArray(cons);

  return (
    <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-lg border p-4">
        <h4 className="m-0">Pros</h4>
        <ul>
          {prosArr.map((p, i) => (
            <li key={`pro-${i}`}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border p-4">
        <h4 className="m-0">Cons</h4>
        <ul>
          {consArr.map((c, i) => (
            <li key={`con-${i}`}>{c}</li>
          ))}
        </ul>
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

  // MDX-only components used in content
  Disclosure,
  AffiliateLink,
  BuyBox,
  ProsCons,
};

export default mdxComponents;
export { mdxComponents };
