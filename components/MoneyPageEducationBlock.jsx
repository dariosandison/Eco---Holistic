import Link from 'next/link'
import RunningCostTool from './RunningCostTool'

function ListBlock({ number, title, items = [], emphasis = false }) {
  if (!items.length) return null
  return (
    <div className={`edu-lens__block ${emphasis ? 'edu-lens__block--emphasis' : ''}`}>
      <span>{number}</span>
      <h3>{title}</h3>
      <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  )
}

export default function MoneyPageEducationBlock({ edu }) {
  if (!edu) return null
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
  } = edu

  const arr = (v) => (Array.isArray(v) ? v.filter(Boolean) : (v ? [v] : []))
  const Why = arr(whyItMatters)
  const Effects = arr(healthEffects)
  const Causes = arr(commonCauses)
  const NoSpend = arr(noSpendFirstSteps)
  const Help = arr(whenToGetHelp)

  return (
    <section className="edu-lens mt-12">
      <div className="edu-lens__header">
        <div><p>Before the shortlist</p><h2>Understand the problem before buying the fix</h2></div>
        <div><p>{intro}</p><p className="edu-lens__medical">Educational information only — not medical advice.</p></div>
      </div>

      {(topicHref || insightHref) ? <div className="edu-lens__links">{topicHref ? <Link href={topicHref}>{topicLabel || 'Start with the topic'} <span>→</span></Link> : null}{insightHref ? <Link href={insightHref}>{insightLabel || 'Read the guide'} <span>→</span></Link> : null}</div> : null}

      {(Why.length || Causes.length || NoSpend.length || Effects.length || Help.length) ? (
        <div className="edu-lens__context">
          <ListBlock number="01" title="Why it matters" items={Why.slice(0, 6)} />
          <ListBlock number="02" title="Common causes" items={Causes.slice(0, 7)} />
          <ListBlock number="03" title="Try this before spending" items={NoSpend.slice(0, 7)} emphasis />
          <ListBlock number="04" title="Possible health relevance" items={Effects.slice(0, 8)} />
          <ListBlock number="05" title="When to get help" items={Help.slice(0, 6)} />
        </div>
      ) : null}

      <div className="edu-lens__buying-head"><div><p>Buying lens</p><h2>If a product still makes sense, compare it properly</h2></div><Link href="/affiliate-disclosure">How affiliate links work</Link></div>

      <div className="edu-lens__buying-grid">
        <ListBlock number="A" title="Start here" items={arr(startHere)} />
        <ListBlock number="B" title="What to look for" items={arr(lookFor)} />
        <ListBlock number="C" title="Avoid" items={arr(avoid)} />
        <ListBlock number="D" title="How we evaluate" items={arr(criteria)} />
        <ListBlock number="E" title="When it is not worth buying" items={arr(notFor)} emphasis />
      </div>

      {runningCosts ? <div className="edu-lens__costs"><p>Ownership costs</p><h3>Purchase price is only part of the decision</h3><ul>{runningCosts.map((b, i) => <li key={i}>{b}</li>)}</ul></div> : null}

      {tools && Array.isArray(tools) ? <RunningCostTool showFilters={tools.includes('filters')} showElectricity={tools.includes('electricity')} /> : null}

      <div className="edu-lens__resources">
        <div><p>Standards &amp; sources</p><div className="edu-lens__resource-links"><Link href="/how-we-test">How we evaluate products</Link><Link href="/editorial-policy">Editorial policy</Link><Link href="/affiliate-disclosure">Affiliate disclosure</Link></div></div>
        {Array.isArray(references) && references.length ? <div><p>References used on this page</p><ol>{references.slice(0, 8).map((r, i) => <li key={i}><a href={r.href} target="_blank" rel="noreferrer noopener">{r.label}</a></li>)}</ol></div> : null}
      </div>
    </section>
  )
}
