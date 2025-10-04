import Head from 'next/head'
import Link from 'next/link'

export default function StartHere() {
  return (
    <>
      <Head>
        <title>Start Here — Wild & Well</title>
        <meta name="description" content="Your 7‑day path to a calmer, healthier, lower-waste routine." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-semibold mb-6">Start Here</h1>
        <p className="mb-6">Busy? Here’s a 7‑day, low‑friction plan to feel better and live a little greener—without overhauling your life.</p>
        <ol className="space-y-4 list-decimal pl-6">
          <li><strong>Day 1 — Sleep window:</strong> aim for a consistent sleep/wake time; dim screens 60 minutes before bed.</li>
          <li><strong>Day 2 — Movement snack:</strong> add two 5‑minute movement breaks (walk, mobility).</li>
          <li><strong>Day 3 — Hydration & minerals:</strong> add clean electrolytes; keep a filled bottle within reach.</li>
          <li><strong>Day 4 — Blood sugar basics:</strong> favor protein + fiber first; reduce ultra‑processed snacks.</li>
          <li><strong>Day 5 — Light & rhythm:</strong> morning outdoor light; cut late‑night bright light.</li>
          <li><strong>Day 6 — Breathwork:</strong> 5 minutes of slow nasal breathing (box or 4‑7‑8).</li>
          <li><strong>Day 7 — Eco swap:</strong> pick one reusable upgrade (water bottle, coffee cup, produce bags).</li>
        </ol>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <Link href="/guides/circadian-sleep-reset"><span className="block p-4 border rounded">Sleep reset</span></Link>
          <Link href="/guides/clean-electrolytes-hydration"><span className="block p-4 border rounded">Hydration guide</span></Link>
          <Link href="/guides/best-blue-light-tools"><span className="block p-4 border rounded">Light toolkit</span></Link>
        </div>
        <p className="mt-8">Prefer email? Join our <Link className="underline" href="/newsletter">newsletter</Link> and get a 3‑email mini course.</p>
      </main>
    </>
  )
}
