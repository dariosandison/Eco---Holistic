import Link from 'next/link'

export default function AuthorBox() {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">About this site</p>
        <h3 className="text-base font-semibold text-zinc-900">Wild &amp; Well editorial</h3>
        <p className="mt-1 text-sm text-zinc-700">
          We publish practical, evidence‑informed guidance for healthier living — with a focus on UK‑friendly products and realistic routines.
          We don&apos;t do miracle claims. We aim for clear trade‑offs, sensible defaults, and updates when things change.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Link href="/how-we-test" className="text-sm font-medium text-zinc-800 hover:underline">How we test</Link>
        <Link href="/editorial-policy" className="text-sm font-medium text-zinc-800 hover:underline">Editorial policy</Link>
        <Link href="/affiliate-disclosure" className="text-sm font-medium text-zinc-800 hover:underline">Affiliate disclosure</Link>
        <Link href="/contact" className="text-sm font-medium text-zinc-800 hover:underline">Contact</Link>
      </div>
    </div>
  )
}
