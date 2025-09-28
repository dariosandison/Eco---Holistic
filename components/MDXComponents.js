// components/MDXComponents.js
import Link from 'next/link';

/* ---------- Basics mapped for MDX ---------- */
const A = (props) => {
  const href = props.href || '';
  const isExternal = /^https?:\/\//i.test(href);
  if (isExternal) return <a target="_blank" rel="nofollow noopener" {...props} />;
  return <Link href={href}>{props.children}</Link>;
};
const H2 = (props) => <h2 {...props} style={{ marginTop: 22, marginBottom: 8 }} />;
const H3 = (props) => <h3 {...props} style={{ marginTop: 18, marginBottom: 6 }} />;
const P  = (props) => <p  {...props} style={{ margin: '10px 0' }} />;

/* ---------- Inline StarRating (simple) ---------- */
function Star({ fill = 'currentColor' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill={fill} d="M12 17.27l6.18 3.73-1.64-7.03L21.9 9.24l-7.19-.62L12 2 9.29 8.62 2.1 9.24l5.36 4.73L5.82 21z"/>
    </svg>
  );
}
function StarRating({ value = 0, outOf = 5 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5 ? 1 : 0;
  const empty = Math.max(0, outOf - full - half);
  const Half = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path fill="url(#half)" stroke="currentColor" d="M12 17.27l6.18 3.73-1.64-7.03L21.9 9.24l-7.19-.62L12 2 9.29 8.62 2.1 9.24l5.36 4.73L5.82 21z"/>
    </svg>
  );
  return (
    <span className="stars" aria-label={`${value} out of ${outOf} stars`}>
      {Array.from({ length: full }).map((_,i)=><Star key={`f${i}`} />)}
      {half ? <Half /> : null}
      {Array.from({ length: empty }).map((_,i)=><Star key={`e${i}`} fill="none" />)}
      <span className="stars-text">{Number(value).toFixed(1)}</span>
    </span>
  );
}

/* ---------- Inline AffiliateLink ---------- */
function AffiliateLink({ slug, href, children, className = "", onClick, ...props }) {
  const finalHref = slug ? `/go/${slug}` : (href || '#');
  const handleClick = (e) => {
    // Fire GA event if lib/gtag is present; ignore if not.
    try {
      const { event } = require('../lib/gtag');
      const label = href || slug || finalHref;
      event({ action: 'affiliate_click', category: 'affiliate', label, value: 1 });
    } catch {}
    onClick?.(e);
  };
  return (
    <a
      href={finalHref}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={`btn-link ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}

/* ---------- Inline ProsCons ---------- */
function ProsCons({ pros = [], cons = [], prosTitle = 'Pros', consTitle = 'Cons' }) {
  return (
    <section className="proscons" aria-label="Pros and Cons">
      <div>
        <h4>{prosTitle}</h4>
        {pros.length ? <ul>{pros.map((p,i)=><li key={i}>{p}</li>)}</ul> : <p>No pros listed.</p>}
      </div>
      <div>
        <h4>{consTitle}</h4>
        {cons.length ? <ul>{cons.map((c,i)=><li key={i}>{c}</li>)}</ul> : <p>No cons listed.</p>}
      </div>
    </section>
  );
}

/* ---------- Inline ComparisonTable ---------- */
function isExternal(url=''){ return /^https?:\/\//i.test(url); }
function ComparisonTable({ items = [], headers = ['Pick','Why','Key specs','Link'] }) {
  return (
    <div className="table-scroll">
      <table className="comp-table">
        <thead>
          <tr>
            <th className="sticky-col">{headers[0]}</th>
            <th>{headers[1]}</th>
            <th>{headers[2]}</th>
            <th>{headers[3]}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it,i)=>(
            <tr key={i}>
              <td className="sticky-col"><strong>{it.name}</strong></td>
              <td>{it.why || '-'}</td>
              <td>{it.specs || '-'}</td>
              <td>
                {it.url ? (isExternal(it.url)
                  ? <AffiliateLink href={it.url}>View →</AffiliateLink>
                  : <Link href={it.url}>View →</Link>
                ) : '—'}
              </td>
            </tr>
          ))}
          {items.length===0 ? <tr><td colSpan={4}>No items to compare.</td></tr> : null}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- Inline Disclosure ---------- */
function Disclosure({ children }) {
  return (
    <aside className="disclosure" role="note" aria-label="Affiliate disclosure">
      {children ? children : (
        <>
          We’re reader-supported. If you buy through links on Wild &amp; Well, we may earn a commission at no extra cost to you.
          See our <Link href="/legal/affiliate-disclosure">Affiliate Disclosure</Link>.
        </>
      )}
    </aside>
  );
}

/* ---------- Inline BuyBox ---------- */
function BuyBox({ name, rating, bullets = [], url, priceNote = 'See latest price' }) {
  return (
    <aside className="buybox">
      <div className="buybox-top">
        <strong className="buybox-name">{name}</strong>
        {rating ? <StarRating value={Number(rating)} /> : null}
      </div>
      {bullets.length ? <ul className="buybox-list">{bullets.map((b,i)=><li key={i}>{b}</li>)}</ul> : null}
      <div className="buybox-cta">
        {url ? <AffiliateLink href={url} className="btn btn-primary">{priceNote}</AffiliateLink> : null}
      </div>
    </aside>
  );
}

/* ---------- Export for MDX ---------- */
export const mdxComponents = {
  a: A, h2: H2, h3: H3, p: P,
  AffiliateLink,
  ProsCons,
  ComparisonTable,
  Disclosure,
  BuyBox,
  StarRating
};
export default mdxComponents;
