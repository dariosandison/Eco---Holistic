// components/MoneyPageEducationBlock.jsx
import Link from "next/link";

/**
 * Education-first block for money pages.
 * Renders before any product shortlist content.
 */
export default function MoneyPageEducationBlock({ edu }) {
  if (!edu) return null;
  const {
    intro,
    topicHref,
    topicLabel,
    insightHref,
    insightLabel,
    startHere = [],
    lookFor = [],
    avoid = [],
    runningCosts = null,
  } = edu;

  return (
    <section className="mt-8">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <h2 className="text-xl font-semibold text-zinc-900">Before you buy</h2>
            <p className="mt-2 text-sm text-zinc-700 max-w-3xl">{intro}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {topicHref && (
              <Link className="btn-secondary" href={topicHref}>
                {topicLabel || "Start with topics"}
              </Link>
            )}
            {insightHref && (
              <Link className="btn-secondary" href={insightHref}>
                {insightLabel || "Read the guide"}
              </Link>
            )}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="card">
            <h3 className="text-lg font-semibold">Start here</h3>
            <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
              {startHere.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold">What to look for</h3>
            <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
              {lookFor.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold">Avoid</h3>
            <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
              {avoid.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        {runningCosts && (
          <div className="mt-4 rounded-2xl border bg-zinc-50 p-4">
            <div className="font-semibold">Running costs</div>
            <ul className="mt-2 list-disc pl-6 text-sm text-zinc-700 space-y-2">
              {runningCosts.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 rounded-2xl border bg-zinc-50 p-4">
          <div className="text-sm font-semibold text-zinc-900">Why trust this page</div>
          <ul className="mt-2 list-disc pl-6 text-sm text-zinc-700 space-y-1">
            <li>We don’t accept paid placements in our shortlists.</li>
            <li>We explain trade‑offs and keep claims conservative.</li>
            <li>We update key pages when products and availability change.</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link className="underline" href="/how-we-test">How we test</Link>
            <Link className="underline" href="/editorial-policy">Editorial policy</Link>
            <Link className="underline" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>

          <div className="mt-4">
            <Link className="btn-secondary" href="/shopping-list">
              Get the free shopping list
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
