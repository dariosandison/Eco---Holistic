// components/MoneyPageNextLinks.jsx
import Link from 'next/link';
import { getMoneyPageLinks } from '@/lib/moneyPageLinks';
import InlineSignup from '@/components/InlineSignup';

export default function MoneyPageNextLinks({ slug, includeSignup = true }) {
  const { hub, reading = [], related = [] } = getMoneyPageLinks(slug);

  return (
    <section className="money-next mt-14">
      <div className="money-next__intro">
        <p>Next step</p>
        <div>
          <h2>Learn first, then compare the maintained options.</h2>
          <span>This page answers a specific search question. The central shortlist is where Wild & Well keeps the broader commercial decision up to date.</span>
        </div>
      </div>

      {hub ? <Link className="money-next__primary" href={hub.href}>{hub.label} →</Link> : null}

      {(reading.length || related.length) ? (
        <div className="money-next__links">
          {reading.length ? <div><p>Useful context</p>{reading.map((l) => <Link key={l.href} href={l.href}>{l.label} →</Link>)}</div> : null}
          {related.length ? <div><p>Related routes</p>{related.map((l) => <Link key={l.href} href={l.href}>{l.label} →</Link>)}</div> : null}
        </div>
      ) : null}

      <p className="money-next__rule">Make one change at a time so you can tell what actually helped.</p>

      {includeSignup ? (
        <InlineSignup
          placement={`money_${slug || 'page'}`}
          title="Make the next decision easier"
          description="Occasional Wild & Well notes with practical actions, useful comparisons and no-pressure product guidance."
          cta="Join Wild & Well"
        />
      ) : null}
    </section>
  );
}
