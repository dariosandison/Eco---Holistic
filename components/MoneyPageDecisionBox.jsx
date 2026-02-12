// components/MoneyPageDecisionBox.jsx

/**
 * A fast-scanning decision box for shortlist pages.
 * Keep it short: 3–6 rules max.
 */
export default function MoneyPageDecisionBox({
  title = '10‑second decision',
  intro = 'Pick the rule that matches your situation.',
  rules = [],
}) {
  if (!Array.isArray(rules) || rules.length === 0) return null

  return (
    <section className="mt-8">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-700">{intro}</p>

        <ul className="mt-5 space-y-3">
          {rules.map((r, idx) => (
            <li key={idx} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm text-zinc-900">
                <span className="font-semibold">If:</span> {r?.if}
              </p>
              <p className="mt-1 text-sm text-zinc-700">
                <span className="font-semibold">Then:</span> {r?.then}
              </p>
              {r?.note ? <p className="mt-1 text-xs text-zinc-500">{r.note}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
