// components/MoneyPageUpdateLog.jsx

export default function MoneyPageUpdateLog({
  updatedLabel,
  prevUpdatedLabel,
  changes = [],
}) {
  if (!updatedLabel) return null

  const list = Array.isArray(changes) ? changes.filter(Boolean) : []

  return (
    <section className="money-update mt-14">
      <div className="money-update__heading">
        <p>Maintenance</p>
        <div><h2>Update log</h2><span>Meaningful editorial changes, not automatic date refreshes.</span></div>
      </div>
      <div className="money-update__body">
        <p>Last updated <strong>{updatedLabel}</strong>{prevUpdatedLabel ? <span> · Previous {prevUpdatedLabel}</span> : null}</p>
        <details>
          <summary>What changed in this update</summary>
          {list.length ? <ul>{list.map((c, i) => <li key={i}>{c}</li>)}</ul> : <p>Refreshed this shortlist for clarity and consistency.</p>}
        </details>
        <small>We revisit shortlists when product availability, specifications, ownership considerations or guidance materially changes. Current merchant terms are confirmed on the retailer site.</small>
      </div>
    </section>
  )
}
