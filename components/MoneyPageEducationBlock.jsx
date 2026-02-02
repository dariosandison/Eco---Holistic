// components/MoneyPageEducationBlock.jsx
import Link from "next/link";
import RunningCostTool from "./RunningCostTool";

/**
 * Education-first block for money pages.
 * Renders before any product shortlist content.
 */
export default function MoneyPageEducationBlock({ edu }) {
  if (!edu) return null;
  const {
    intro,
    whyItMatters,
    healthEffects,
    commonCauses,
    noSpendFirstSteps,
    whenToGetHelp,
    topicHref,
    topicLabel,
    insightHref,
    insightLabel,
    startHere = [],
    lookFor = [],
    avoid = [],
    criteria = [],
    notFor = [],
    tools = null,
    references = [],
    runningCosts = null,
  } = edu;

  const arr = (v) => (Array.isArray(v) ? v.filter(Boolean) : (v ? [v] : []));
  const Why = arr(whyItMatters);
  const Effects = arr(healthEffects);
  const Causes = arr(commonCauses);
  const NoSpend = arr(noSpendFirstSteps);
  const Help = arr(whenToGetHelp);

  return (
    <section className="mt-8">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <h2 className="text-xl font-semibold text-zinc-900">Understand the basics</h2>
            <p className="mt-2 text-sm text-zinc-700 max-w-3xl">{intro}</p>
            <p className="mt-2 text-xs text-zinc-500">Educational info only — not medical advice.</p>
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

        {(Why.length || Causes.length || NoSpend.length || Effects.length || Help.length) ? (
          <div className="mt-6">
            <div className="grid gap-4 md:grid-cols-3">
              {Why.length ? (
                <div className="card">
                  <h3 className="text-lg font-semibold">Why it matters</h3>
                  <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
                    {Why.slice(0, 6).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {Causes.length ? (
                <div className="card">
                  <h3 className="text-lg font-semibold">Common causes</h3>
                  <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
                    {Causes.slice(0, 7).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {NoSpend.length ? (
                <div className="card">
                  <h3 className="text-lg font-semibold">First steps (no spend)</h3>
                  <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
                    {NoSpend.slice(0, 7).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {(Effects.length || Help.length) ? (
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {Effects.length ? (
                  <div className="card">
                    <h3 className="text-lg font-semibold">How it can affect health</h3>
                    <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
                      {Effects.slice(0, 8).map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {Help.length ? (
                  <div className="card">
                    <h3 className="text-lg font-semibold">When to get help</h3>
                    <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
                      {Help.slice(0, 6).map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="text-sm font-semibold text-zinc-900">If you want options, use this quick buying lens</div>
          <Link className="text-sm underline" href="/affiliate-disclosure">Affiliate disclosure</Link>
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

        {(criteria?.length || notFor?.length) ? (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {criteria?.length ? (
              <div className="card">
                <h3 className="text-lg font-semibold">How we evaluate</h3>
                <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
                  {criteria.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {notFor?.length ? (
              <div className="card">
                <h3 className="text-lg font-semibold">When it’s not worth buying</h3>
                <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
                  {notFor.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

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

        {tools && Array.isArray(tools) ? (
          <RunningCostTool
            showFilters={tools.includes('filters')}
            showElectricity={tools.includes('electricity')}
          />
        ) : null}

        <div className="mt-4 rounded-2xl border bg-zinc-50 p-4">
          <div className="text-sm font-semibold text-zinc-900">Resources</div>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link className="underline" href="/how-we-test">How we test</Link>
            <Link className="underline" href="/editorial-policy">Editorial policy</Link>
            <Link className="underline" href="/affiliate-disclosure">Affiliate disclosure</Link>
            <Link className="underline" href="/shopping-list">Shopping list</Link>
          </div>
          {Array.isArray(references) && references.length ? (
            <div className="mt-4">
              <div className="text-sm font-semibold text-zinc-900">References</div>
              <ul className="mt-2 list-disc pl-6 text-sm text-zinc-700 space-y-1">
                {references.slice(0, 8).map((r, i) => (
                  <li key={i}>
                    <a className="underline" href={r.href} target="_blank" rel="noreferrer noopener">
                      {r.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
