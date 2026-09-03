import Link from 'next/link'

export default function AuthorBox() {
  return (
    <aside className="author-box">
      <div className="flex flex-col gap-1">
        <p className="eyebrow">Our editorial standard</p>
        <h3>Clear about evidence. Honest about limits.</h3>
        <p className="mt-1 text-sm text-zinc-700">
          Wild &amp; Well publishes practical, evidence-informed guidance for UK homes. We separate research from hands-on testing, show trade-offs and ownership costs, and update advice when the facts change.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Link href="/editorial-policy" className="text-sm font-medium text-zinc-800 hover:underline">Editorial policy</Link>
        <Link href="/how-we-test" className="text-sm font-medium text-zinc-800 hover:underline">How we test</Link>
        <Link href="/affiliate-disclosure" className="text-sm font-medium text-zinc-800 hover:underline">Affiliate disclosure</Link>
        <Link href="/contact" className="text-sm font-medium text-zinc-800 hover:underline">Contact</Link>
      </div>
    </aside>
  )
}
