// components/ComparisonTable.jsx
import Link from 'next/link';
import AffiliateLink from './AffiliateLink';

function isExternal(url='') { return /^https?:\/\//i.test(url); }

export default function ComparisonTable({
  items = [], // [{ name, why, specs, url }]
  headers = ['Pick', 'Why', 'Key specs', 'Link']
}) {
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
          {items.map((it, i) => (
            <tr key={i}>
              <td className="sticky-col"><strong>{it.name}</strong></td>
              <td>{it.why || '-'}</td>
              <td>{it.specs || '-'}</td>
              <td>
                {it.url ? (
                  isExternal(it.url)
                    ? <AffiliateLink href={it.url}>View →</AffiliateLink>
                    : <Link href={it.url}>View →</Link>
                ) : '—'}
              </td>
            </tr>
          ))}
          {items.length === 0 ? (
            <tr><td colSpan={4}>No items to compare.</td></tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

