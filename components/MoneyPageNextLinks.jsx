// components/MoneyPageNextLinks.jsx
import Link from 'next/link';
import { getMoneyPageLinks } from '@/lib/moneyPageLinks';
import InlineSignup from '@/components/InlineSignup';

export default function MoneyPageNextLinks({ slug, includeSignup = true }) {
  const { hub, reading = [], related = [] } = getMoneyPageLinks(slug);

  return (
    <section className="mt-14">
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Next step</p>
        <h2 className="mt-2 text-xl font-semibold text-zinc-900">Learn first, then compare the current options</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-700">
          This page answers a specific search question. Wild & Well keeps the current partner choices in one maintained shortlist so older guides do not become competing or stale product catalogues.
        </p>

        {hub ? (
          <div className="mt-5">
            <Link className="btn-primary" href={hub.href}>{hub.label}</Link>
          </div>
        ) : null}

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card">
            <div className="font-semibold">Useful context</div>
            <ul className="mt-3 space-y-2 text-sm">
              {reading.map((l) => (
                <li key={l.href}><Link className="underline underline-offset-4" href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="font-semibold">Related routes</div>
            <ul className="mt-3 space-y-2 text-sm">
              {related.map((l) => (
                <li key={l.href}><Link className="underline underline-offset-4" href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-4 text-xs text-zinc-500">Make one change at a time so you can tell what actually helped.</p>

        {includeSignup ? (
          <InlineSignup
            placement={`money_${slug || 'page'}`}
            title="Free: Wild & Well Shopping List"
            description="A beginner-friendly shortcut for water, air, sleep, movement, nutrition and a lower-tox home."
            cta="Send me the list"
          />
        ) : null}
      </div>
    </section>
  );
}
