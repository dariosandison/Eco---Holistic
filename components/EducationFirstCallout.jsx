// components/EducationFirstCallout.jsx
import Link from 'next/link'

export default function EducationFirstCallout({
  topicHref = '/topics',
  topicLabel = 'Explore topics',
  insightHref = '/blog',
  insightLabel = 'Read Wellness Insights',
}) {
  return (
    <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Start with the basics</div>
      <p className="mt-1 text-sm text-zinc-700">
        If you’re new to this category, start with our education first — then come back to the shortlist when you’re ready to buy.
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <Link href={topicHref} className="rounded-xl border border-zinc-300 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100">
          {topicLabel}
        </Link>
        <Link href={insightHref} className="rounded-xl border border-zinc-300 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100">
          {insightLabel}
        </Link>
      </div>
    </div>
  )
}
