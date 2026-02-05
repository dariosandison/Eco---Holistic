import Link from 'next/link'
import { pickEduBlock } from '@/lib/articleEdu'

function wordCount(md = '') {
  const body = String(md || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
  const words = body.match(/\b[\w’'-]+\b/g)
  return words ? words.length : 0
}

export default function ArticleEducationBlock({ frontmatter, content }) {
  const wc = wordCount(content || '')
  const tags = Array.isArray(frontmatter?.tags) ? frontmatter.tags : []
  const edu = pickEduBlock({ title: frontmatter?.title, tags })

  // Expand automatically for short/thin posts (keeps site “educational-first”)
  const autoOpen = wc < 650

  return (
    <section className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-base font-semibold text-zinc-900">Understand first</h2>
        <span className="text-xs text-zinc-500">Education-first • not medical advice</span>
      </div>

      <details className="mt-3" open={autoOpen}>
        <summary className="cursor-pointer text-sm font-semibold text-zinc-800">
          {autoOpen ? 'Why this matters (expanded)' : 'Open the deep dive'}
        </summary>

        <div className="prose prose-zinc mt-4 max-w-none">
          <h3>What’s going on</h3>
          <p>{edu.what}</p>

          <h3>Why it matters</h3>
          <p>{edu.why}</p>

          <h3>Common causes</h3>
          <ul>
            {edu.causes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <h3>No-spend first steps</h3>
          <ul>
            {edu.noSpend.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <h3>If you’re buying anything, use this calm checklist</h3>
          <ul>
            {edu.buying.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className="not-prose mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/topics" className="btn-secondary text-center">
              Browse Topics
            </Link>
            <Link href="/picks" className="btn-secondary text-center">
              Browse Favourites
            </Link>
            <Link href="/shopping-list" className="btn-primary text-center">
              Get the free shopping list
            </Link>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            General information only. If you have symptoms or a medical condition, consult a qualified clinician.
          </p>
        </div>
      </details>
    </section>
  )
}
