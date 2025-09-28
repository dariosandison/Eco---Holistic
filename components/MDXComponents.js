// components/MDXComponents.js
import Link from 'next/link';
import AffiliateLink from './AffiliateLink';
import ProsCons from './ProsCons';
import ComparisonTable from './ComparisonTable';
import Disclosure from './Disclosure';
import BuyBox from './BuyBox';

const A = (props) => {
  const href = props.href || '';
  const isExternal = /^https?:\/\//i.test(href);
  if (isExternal) {
    return <a target="_blank" rel="nofollow noopener" {...props} />;
  }
  return <Link href={href}>{props.children}</Link>;
};

const H2 = (props) => <h2 {...props} style={{ marginTop: 22, marginBottom: 8 }} />;
const H3 = (props) => <h3 {...props} style={{ marginTop: 18, marginBottom: 6 }} />;
const P  = (props) => <p  {...props} style={{ margin: '10px 0' }} />;

export const mdxComponents = {
  a: A,
  h2: H2,
  h3: H3,
  p: P,

  // Custom MDX components
  AffiliateLink,
  ProsCons,
  ComparisonTable,
  Disclosure,
  BuyBox
};

export default mdxComponents;
