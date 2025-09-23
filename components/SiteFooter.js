// components/SiteFooter.js
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Wild & Well
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Practical, low-tox tips and vetted product picks.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Company
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link className="hover:underline" href="/about">About</Link>
              </li>
              <li>
                <a className="hover:underline" href="mailto:hello@wild-and-well.store">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Legal
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link className="hover:underline" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:underline" href="/terms">Terms of Use</Link></li>
              <li><Link className="hover:underline" href="/disclaimer">General Disclaimer</Link></li>
              <li><Link className="hover:underline" href="/affiliate-disclosure">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Wild & Well. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
