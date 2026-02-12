// components/MoneyPageUpdateLog.jsx

export default function MoneyPageUpdateLog({
  updatedLabel,
  prevUpdatedLabel,
  changes = [],
}) {
  if (!updatedLabel) return null

  const list = Array.isArray(changes) ? changes.filter(Boolean) : []

  return (
    <section className="mt-14">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-900">Update log</h2>

        <p className="mt-2 text-sm text-zinc-700">
          Last updated: <span className="font-semibold">{updatedLabel}</span>
          {prevUpdatedLabel ? (
            <span className="text-zinc-500"> · Previous: {prevUpdatedLabel}</span>
          ) : null}
        </p>

        <details className="mt-4">
          <summary className="cursor-pointer text-sm font-semibold text-zinc-900">
            What changed in this update
          </summary>

          {list.length ? (
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-zinc-700">
              {list.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-zinc-700">
              Refreshed this shortlist for clarity and consistency.
            </p>
          )}
        </details>

        <p className="mt-4 text-xs text-zinc-500">
          We update shortlists when availability, pricing, or guidance changes.
        </p>
      </div>
    </section>
  )
}
