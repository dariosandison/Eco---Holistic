import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Grow your own — fruit, veg, herbs (and optional hens) | Wild & Well',
  description:
    'Guide to growing your own food: how to start small, what matters (light, soil, watering), allotment basics, and beginner equipment for common tasks.',
}

export default function Page() {
  const faqs = [
    {
      q: 'How much sun do plants need?',
      a: 'Most edible plants do best with several hours of direct light. Herbs and salad leaves can cope with less; fruiting plants (like tomatoes) usually want more sun to thrive.',
    },
    {
      q: 'How often should I water pots?',
      a: 'Check the top few centimetres of soil. If it feels dry, water. Pots dry out faster than beds, especially in wind and sun—bigger containers are usually more forgiving.',
    },
    {
      q: 'What compost should I start with?',
      a: 'Multipurpose compost is fine to begin. If it stays waterlogged, add perlite or a similar aeration amendment and make sure containers drain properly.',
    },
    {
      q: 'Do I need fertiliser?',
      a: 'Not always at the start. Healthy compost and regular watering get most beginners far. If growth stalls later, a simple feed used occasionally can help—follow label instructions and avoid overdoing it.',
    },
    {
      q: 'How do I deal with slugs and pests?',
      a: 'Start with prevention: healthy plants, removing hiding spots, and protecting young seedlings. Barriers and traps can help. For allotments, early protection is often more effective than trying to fix damage later.',
    },
    {
      q: 'Are allotments worth it?',
      a: 'They can be, if you can visit regularly and enjoy the process. Most success comes from simple routines: keeping weeds down, watering, and growing a small number of crops you eat often.',
    },
    {
      q: 'Keeping hens: what should I check first?',
      a: 'Local rules, space, and daily time. Secure housing and welfare matter more than setup cost. Plan for daily care and what happens when you’re away.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-wide text-zinc-500">Nutrition</p>
        <h1 className="mt-2 text-4xl font-bold">Grow your own (home or allotment)</h1>
        <p className="mt-3 text-zinc-700">
          Growing a little of your own food can improve freshness and give you more control over what goes into your soil and onto your plants.
          This guide covers the basics that matter most—light, soil, drainage, and watering—plus a simple home/allotment plan.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/nutrition">Back to Nutrition</Link>
          <Link className="btn-secondary" href="/blog">Wellness insights</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#home">Home setup</a>
          <a className="chip" href="#allotment">Allotment</a>
          <a className="chip" href="#hens">Hens</a>
          <a className="chip" href="#equipment">Equipment</a>
          <a className="chip" href="#faqs">FAQs</a>
        </div>

        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <div id="start" />
      <TopicAtAGlance
        items={[
          {
            title: 'Start small (the 80/20)',
            bullets: [
              'Herbs (basil, mint, parsley) are the easiest win.',
              'Salad leaves grow fast and are satisfying.',
              'Tomatoes work well in pots if you have sun.',
              'Pick 1–2 crops you eat regularly; it’s easier to maintain and troubleshoot.',
            ],
          },
          {
            title: 'What matters most',
            bullets: [
              'Light: south-facing windows / a sunny balcony helps a lot.',
              'Soil: decent compost + drainage prevents most problems.',
              'Watering: under‑watering is common; over‑watering can kill roots.',
            ],
          },
          {
            title: 'Common mistakes',
            bullets: [
              'Buying lots of gear before you’ve grown your first herb pot.',
              'Using containers with no drainage holes.',
              'Starting too many varieties at once (you won’t know what worked).',
            ],
          },
        ]}
      />

      <section className="mt-14" id="home">
        <h2 className="section-title">Home setup (balcony / windowsill)</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            If you can grow herbs successfully, you can grow a lot more. The simplest setup is: a pot with drainage, decent compost,
            and a small watering routine.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Containers:</strong> any pot works if it drains. Bigger = more forgiving.</li>
            <li><strong>Compost:</strong> multipurpose compost is fine to begin with; add perlite if it stays soggy.</li>
            <li><strong>Routine:</strong> check moisture at the top 2–3cm; water when it feels dry.</li>
          </ul>
        </div>
      </section>

      <section className="mt-14" id="allotment">
        <h2 className="section-title">Allotment basics (simple plan)</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            Allotments reward simple systems: a plan for what you’ll grow, regular visits, and a way to manage weeds.
            Don’t overbuild the first season—learn your plot first.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Pick 4–6 crops</strong> you actually eat weekly (not 20 varieties).</li>
            <li><strong>Prioritise soil</strong>: compost and mulching beat fancy tools.</li>
            <li><strong>Make watering easy</strong>: if it’s hard, it won’t happen.</li>
            <li><strong>Protect young plants</strong> from slugs/birds early on.</li>
          </ol>
        </div>
      </section>

      <section className="mt-14" id="hens">
        <h2 className="section-title">Keeping hens for eggs (optional)</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            Chickens can be great, but they are a real responsibility. Before buying anything, check your local rules, space, and time.
            Plan for daily care, secure housing, and animal welfare.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Secure coop + run:</strong> predator‑proofing matters more than aesthetics.</li>
            <li><strong>Ongoing costs:</strong> feed, bedding, health, maintenance.</li>
            <li><strong>Time:</strong> they need care every day (including holidays).</li>
          </ul>
        </div>
      </section>

      <section className="mt-14" id="equipment">
        <h2 className="section-title">Beginner equipment (core basics)</h2>
        <p className="section-subtitle">For drainage, seed starting, soil improvement, and watering.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Herb pots with drainage"
            badge="Start here"
            description="Drainage is key. Bigger pots are more forgiving than tiny ones."
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
            description="A contained start if your soil needs work."
            href={amazonSearchUrl('raised garden bed kit')}
            bullets={['Choose a manageable size', 'Use compost + topsoil mix', 'Mulch to reduce weeds']}
          />
          <ProductPick
            title="Watering can (or hose timer)"
            badge="Consistency"
            description="Make watering easy and it’ll happen more often."
            href={amazonSearchUrl('watering can long spout')}
            bullets={['Long spout helps pots', 'Keep it near plants', 'Water early when possible']}
          />
          <ProductPick
            title="Chicken coop + run (browse)"
            badge="Optional"
            description="Only after you’ve checked local rules, space, and daily care."
            href={amazonSearchUrl('chicken coop run predator proof')}
            bullets={['Prioritise security', 'Budget ongoing costs', 'Plan holiday cover']}
          />
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links.</p>
    </main>
  )
}
