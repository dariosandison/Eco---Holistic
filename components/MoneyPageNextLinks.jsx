// components/MoneyPageNextLinks.jsx
import Link from "next/link";
import { getMoneyPageLinks } from "@/lib/moneyPageLinks";
import InlineSignup from "@/components/InlineSignup";

export default function MoneyPageNextLinks({ slug, includeSignup = true }) {
  const { reading = [], related = [] } = getMoneyPageLinks(slug);

  return (
    <section className="mt-14">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-900">Keep learning (then choose)</h2>
        <p className="mt-2 text-sm text-zinc-700 max-w-3xl">
          If you’re not 100% sure yet, these are the quickest pages to read before you commit money.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card">
            <div className="font-semibold">Related reading</div>
            <ul className="mt-3 space-y-2 text-sm">
              {reading.map((l) => (
                <li key={l.href}>
                  <Link className="underline" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="font-semibold">Related shortlists</div>
            <ul className="mt-3 space-y-2 text-sm">
              {related.map((l) => (
                <li key={l.href}>
                  <Link className="underline" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          Tip: make one change at a time so you can tell what actually helped.
        </p>

        {includeSignup ? (
          <InlineSignup
            placement={`money_${slug || 'page'}`}
            title="Free: Low‑Tox Shopping List"
            description="A beginner-friendly shortcut with simple swaps for air, water, cleaning and sleep — in plain English."
            cta="Send me the list"
          />
        ) : null}

      </div>
    </section>
  );
}
