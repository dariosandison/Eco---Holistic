import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Grow your own — fruit, veg, herbs (and optional hens) | Wild & Well',
  description:
    'Guide to growing your own food: how to start small, what matters (light, soil, watering), allotment basics, and beginner equipment for common tasks.',
}

function MiniCard({ title, children }) {
  return (
    <div className="card">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-3 text-sm text-zinc-700 space-y-2">{children}</div>
    </div>
  )
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-wide text-zinc-500">Nutrition</p>
        <h1 className="mt-2 text-4xl font-bold">Grow your own (home or allotment)</h1>
        <p className="mt-3 text-zinc-700">
          Growing a little of your own food can improve freshness and give you more control over what goes into your soil and onto your plants. This guide covers the basics that matter most—light, soil, drainage, and watering—plus a simple home/allotment plan.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/nutrition">Back to Nutrition</Link>
          <Link className="btn-secondary" href="/blog">Wellness insights</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <MiniCard title="Start small (the 80/20)">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Herbs</strong> (basil, mint, parsley) are the easiest win.</li>
            <li><strong>Salad leaves</strong> grow fast and are satisfying.</li>
            <li><strong>Tomatoes</strong> work well in pots if you have sun.</li>
          </ul>
          <p className="text-xs text-zinc-500">Pick 1–2 crops you eat regularly; it’s easier to maintain and troubleshoot.</p>
        </MiniCard>

        <MiniCard title="What matters most">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Light</strong>: south-facing windows / sunny balcony is gold.</li>
            <li><strong>Soil</strong>: decent compost + drainage prevents most problems.</li>
            <li><strong>Watering</strong>: under‑watering is common; over‑watering kills roots.</li>
          </ul>
        </MiniCard>

        <MiniCard title="Common mistakes">
          <ul className="list-disc pl-6 space-y-2">
            <li>Buying lots of gear before you’ve grown your first herb pot.</li>
            <li>Using containers with no drainage holes.</li>
            <li>Starting too many varieties at once (you won’t know what worked).</li>
          </ul>
        </MiniCard>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Home setup (balcony / windowsill)</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            If you can grow herbs successfully, you can grow a lot more. The simplest setup is: a pot with drainage, decent compost, and a small watering routine.
            Start with the plants you cook with, and treat it like a tiny repeatable habit.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Containers:</strong> any pot works if it drains. Bigger = more forgiving.</li>
            <li><strong>Compost:</strong> multipurpose compost is fine to begin with; add perlite if it stays soggy.</li>
            <li><strong>Routine:</strong> check moisture at the top 2–3cm; water when it feels dry.</li>
          </ul>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Allotment basics (simple plan)</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            Allotments reward simple systems: a plan for what you’ll grow, regular visits, and a way to manage weeds.
            Don’t overbuild the first season — learn your plot first.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Pick 4–6 crops</strong> you actually eat weekly (not 20 varieties).</li>
            <li><strong>Prioritise soil</strong>: compost and mulching beat fancy tools.</li>
            <li><strong>Make watering easy</strong>: if it’s hard, it won’t happen.</li>
            <li><strong>Protect young plants</strong> from slugs/birds early on.</li>
          </ol>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Keeping hens for eggs (optional)</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            Chickens can be brilliant — and they are a real responsibility. Before buying anything, check your local rules, space, and time.
            Plan for daily care, secure housing, and animal welfare from day one.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Secure coop + run:</strong> predator‑proofing matters more than aesthetics.</li>
            <li><strong>Feed + bedding:</strong> budget ongoing costs, not just the initial setup.</li>
            <li><strong>Time:</strong> they need care every day (including holidays).</li>
          </ul>
          <p className="text-xs text-zinc-500">We keep this section general. Follow local guidance and welfare best practice.</p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Beginner equipment (core basics)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          The main tasks are drainage, seed starting, soil improvement, and watering. These are common items used for those tasks.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Herb pots with drainage"
            badge="Start here"
            description="Drainage is the key. Bigger pots are more forgiving than tiny ones."
            href={amazonSearchUrl('plant pots with drainage holes saucers')}
            bullets={['Drainage holes + saucers', 'Bigger = less watering stress', 'Simple is fine']}
          />
          <ProductPick
            title="Seed starting tray kit"
            badge="Budget"
            description="Useful if you want to start from seed (and save money long‑term)."
            href={amazonSearchUrl('seed starting tray kit with domes')}
            bullets={['Small cells for seedlings', 'Label what you plant', 'Don’t overwater']}
          />
          <ProductPick
            title="Compost bin (home)"
            badge="Soil"
            description="Kitchen scraps → compost is one of the best upgrades you can make."
            href={amazonSearchUrl('garden compost bin 200L')}
            bullets={['Bigger bins work better', 'Add dry “brown” material', 'Turn it occasionally']}
          />
          <ProductPick
            title="Raised bed (starter)"
            badge="Allotment"
            description="A simple, contained start if your soil needs work."
            href={amazonSearchUrl('raised garden bed kit')}
            bullets={['Choose a manageable size', 'Use compost + topsoil mix', 'Mulch to reduce weeds']}
          />
          <ProductPick
            title="Watering can (or hose timer)"
            badge="Consistency"
            description="Make watering easy and it’ll actually happen."
            href={amazonSearchUrl('watering can long spout')}
            bullets={['Long spout helps pots', 'Keep it near plants', 'Water early when possible']}
          />
          <ProductPick
            title="Chicken coop + run (browse)"
            badge="Optional"
            description="Only if you’ve checked local rules, space, and daily care."
            href={amazonSearchUrl('chicken coop run predator proof')}
            bullets={['Prioritise security', 'Budget ongoing costs', 'Plan holiday cover']}
          />
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Some links may earn us a commission at no extra cost to you.</p>
    </main>
  )
}
