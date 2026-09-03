export default function MoneyPageDecisionBox({
  title = 'Fast decision',
  intro = 'Match your situation to the rule before comparing products.',
  rules = [],
}) {
  if (!Array.isArray(rules) || rules.length === 0) return null

  return (
    <section className="decision-rules mt-10">
      <div className="decision-rules__header">
        <div><p>Decision rules</p><h2>{title}</h2></div>
        <p>{intro}</p>
      </div>
      <ol className="decision-rules__list">
        {rules.map((r, idx) => (
          <li key={idx}>
            <span className="decision-rules__num">{String(idx + 1).padStart(2, '0')}</span>
            <div><p className="decision-rules__if">If <strong>{r?.if}</strong></p><p className="decision-rules__then">Then {r?.then}</p>{r?.note ? <p className="decision-rules__note">{r.note}</p> : null}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}
