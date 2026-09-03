import Link from 'next/link'

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

  const sections = [
    Why.length ? { label: 'Why it matters', items: Why.slice(0, 6) } : null,
    Causes.length ? { label: 'What may be driving it', items: Causes.slice(0, 7) } : null,
    Check.length ? { label: 'Quick check at home', items: Check.slice(0, 7) } : null,
    NoSpend.length ? { label: 'Try this before buying', items: NoSpend.slice(0, 8), accent: true } : null,
    Effects.length ? { label: 'Health context', items: Effects.slice(0, 8) } : null,
  ].filter(Boolean)

  return (
    <section className="topic-deep-dive mt-12" id={anchorId}>
      <div className="topic-deep-dive__intro">
        <div>
          <p className="topic-deep-dive__eyebrow">Understand first</p>
          <h2>{title}</h2>
        </div>
        <div>
          {Intro.length ? <div className="topic-deep-dive__lede">{Intro.slice(0, 4).map((p, i) => <p key={i}>{p}</p>)}</div> : null}
          <div className="topic-deep-dive__standards">
            <span>Educational guidance</span><span>Evidence labelled</span><span>Products second</span>
          </div>
        </div>
      </div>

      {sections.length ? (
        <div className="topic-deep-dive__sections">
          {sections.map((section, idx) => (
            <article key={section.label} className={`topic-deep-dive__section${section.accent ? ' topic-deep-dive__section--accent' : ''}`}>
              <span className="topic-deep-dive__num">0{idx + 1}</span>
              <div>
                <h3>{section.label}</h3>
                <ul>{section.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      ) : null}

      {Help.length ? (
        <aside className="topic-deep-dive__help">
          <div><p>Know when this needs more than self-help</p><h3>When to get help</h3></div>
          <ul>{Help.slice(0, 6).map((item, i) => <li key={i}>{item}</li>)}</ul>
        </aside>
      ) : null}

      <div className="topic-deep-dive__footer">
        <p>Educational information only — not medical advice. If symptoms are severe, persistent or worrying, use NHS guidance or speak to a clinician.</p>
        <div><Link href="/editorial-policy">Editorial policy</Link><Link href="/how-we-test">How we evaluate products</Link></div>
      </div>

      {(Array.isArray(readNext) && readNext.length) || (Array.isArray(references) && references.length) ? (
        <div className="topic-deep-dive__sources">
          {Array.isArray(readNext) && readNext.length ? <div><p>Continue learning</p><div>{readNext.slice(0, 6).map((l) => <Link key={l.href} href={l.href}>{l.label} →</Link>)}</div></div> : null}
          {Array.isArray(references) && references.length ? <div><p>Sources & references</p><ul>{references.slice(0, 8).map((r, i) => <li key={i}><a href={r.href} target="_blank" rel="noreferrer noopener">{r.label}</a></li>)}</ul></div> : null}
        </div>
      ) : null}
    </section>
  )
}
