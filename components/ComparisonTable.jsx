export default function ComparisonTable({ caption, columns = [], rows = [] }) {
  return (
    <section className="comparison-shell not-prose mt-8" aria-label={caption || 'Product comparison'}>
      <div className="comparison-intro">
        <div>
          <p className="comparison-eyebrow">At-a-glance comparison</p>
          {caption ? <p className="comparison-caption">{caption}</p> : null}
        </div>
        <p className="comparison-hint">Compare the job each option suits before following a retailer link.</p>
      </div>

      <div className="comparison-scroll" tabIndex="0" role="region" aria-label="Scrollable comparison table">
        <table className="comparison-table">
          <thead>
            <tr>
              {columns.map((c, idx) => (
                <th key={c.key} scope="col" className={idx === 0 ? 'comparison-sticky' : ''}>
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {columns.map((c, idx) => (
                  <td key={c.key} className={idx === 0 ? 'comparison-sticky comparison-name' : ''}>
                    {row[c.key] ?? '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="comparison-mobile-note">On smaller screens, swipe sideways to compare every column.</p>
    </section>
  )
}
