// components/TopicEducationDeepDive.jsx
import Link from 'next/link'

/**
 * Education-first block for Topic pages.
 * Purpose: explain what the topic is, why it matters, common causes, and
 * no-spend first steps BEFORE linking to product shortlists.
 */
export default function TopicEducationDeepDive({ edu }) {
  if (!edu) return null

  const {
    anchorId = 'understand',
    title = 'Understand the basics',
    intro = [],
    whyItMatters = [],
    healthEffects = [],
    commonCauses = [],
    quickCheck = [],
    noSpendFirstSteps = [],
    whenToGetHelp = [],
    readNext = [],
    references = [],
  } = edu

  const arr = (v) => (Array.isArray(v) ? v.filter(Boolean) : (v ? [v] : []))

  const Intro = arr(intro)
  const Why = arr(whyItMatters)
  const Effects = arr(healthEffects)
  const Causes = arr(commonCauses)
  const Check = arr(quickCheck)
  const NoSpend = arr(noSpendFirstSteps)
  const Help = arr(whenToGetHelp)

  return (
    <section className="mt-10" id={anchorId}>
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
            {Intro.length ? (
              <div className="mt-2 space-y-2">
                {Intro.slice(0, 4).map((p, i) => (
                  <p key={i} className="text-sm text-zinc-700 max-w-3xl">
                    {p}
                  </p>
                ))}
              </div>
            ) : null}
            <p className="mt-3 text-xs text-zinc-500">
              Educational information only — not medical advice. If symptoms are severe, persistent, or worrying, use NHS guidance or speak to a clinician.
            </p>
          </div>

          {/* Internal trust links */}
          <div className="flex flex-wrap gap-2">
            <Link className="btn-secondary" href="/editorial-policy">Editorial policy</Link>
            <Link className="btn-secondary" href="/how-we-test">How we test</Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {Why.length ? (
            <div className="card">
              <h3 className="text-lg font-semibold text-zinc-900">Why it matters</h3>
              <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
                {Why.slice(0, 6).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {Causes.length ? (
            <div className="card">
              <h3 className="text-lg font-semibold text-zinc-900">Common causes</h3>
              <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
                {Causes.slice(0, 7).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {Check.length ? (
            <div className="card">
              <h3 className="text-lg font-semibold text-zinc-900">Quick check at home</h3>
              <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
                {Check.slice(0, 7).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {(Effects.length || NoSpend.length) ? (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {Effects.length ? (
              <div className="card">
                <h3 className="text-lg font-semibold text-zinc-900">How it can affect health</h3>
                <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
                  {Effects.slice(0, 8).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {NoSpend.length ? (
              <div className="card">
                <h3 className="text-lg font-semibold text-zinc-900">First steps (no spend)</h3>
                <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
                  {NoSpend.slice(0, 8).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

        {Help.length ? (
          <div className="mt-4 rounded-2xl border bg-zinc-50 p-4">
            <div className="text-sm font-semibold text-zinc-900">When to get help</div>
            <ul className="mt-2 list-disc pl-6 text-sm text-zinc-700 space-y-2">
              {Help.slice(0, 6).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {(readNext?.length || references?.length) ? (
          <div className="mt-5 rounded-2xl border bg-zinc-50 p-4">
            {Array.isArray(readNext) && readNext.length ? (
              <div>
                <div className="text-sm font-semibold text-zinc-900">Read next</div>
                <div className="mt-2 flex flex-wrap gap-3 text-sm">
                  {readNext.slice(0, 6).map((l) => (
                    <Link key={l.href} className="underline" href={l.href}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {Array.isArray(references) && references.length ? (
              <div className={readNext?.length ? 'mt-4' : ''}>
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
        ) : null}
      </div>
    </section>
  )
}
