import Link from 'next/link'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { getTopicEdu } from '@/lib/topicEdu'
import JourneyHero from '@/components/JourneyHero'

export const metadata = {
  title: 'Movement Topics — Wild & Well',
  description: 'Movement basics: walking, strength, mobility and foot function first, with focused buying routes for equipment that genuinely supports the habit.',
}

const ROUTES = [
  { title: 'Walk more often', copy: 'Use ordinary walking as the base layer. Add pace, distance or hills gradually once the habit is stable.', href: '/movement', label: 'Start with movement basics' },
  { title: 'Build simple strength', copy: 'Cover the basic movement patterns with bodyweight or simple resistance before considering a larger equipment setup.', href: '/blog/home-strength-basics-busy-people', label: 'Build a simple routine' },
  { title: 'Use equipment selectively', copy: 'Footwear, resistance and tracking tools should remove friction or expand a routine that already exists.', href: '/movement/movement-shortlist', label: 'Open the movement shortlist' },
]

export default function Page() {
  const edu = getTopicEdu('movement')
  const faqs = [
    { q: 'What matters more: steps or workouts?', a: ['Both can help, but daily walking is often the easiest base layer to build first.', 'Once that habit is stable, simple strength sessions can add another useful layer.'] },
    { q: 'How much strength training do I need?', a: 'A simple routine covering major movement patterns a couple of times per week can be a practical starting point. Consistency matters more than complexity.' },
    { q: 'Do I need equipment?', a: 'No. Bodyweight and simple resistance can go a long way. Equipment should reduce friction or expand what you can do — not become the plan itself.' },
    { q: 'How do I avoid doing too much too soon?', a: 'Increase walking, training volume and load gradually. Keep the routine repeatable and avoid adding several demanding changes at once.' },
  ]

  return (
    <main className="journey-page movement-hub">
      <JourneyHero number="05" kicker="Build the habit first" title="Movement that belongs in everyday life." intro="Walk often. Add simple strength and mobility. Let equipment earn its place by making a useful routine easier to repeat—not by becoming the routine." image="/images/photography/movement.jpg" imageAlt="A person walking outdoors in natural surroundings" actions={[{label:'Start moving',href:'/movement'},{label:'Build home strength',href:'/blog/home-strength-basics-busy-people'},{label:'Choose a useful route',href:'/movement/movement-shortlist'}]} anchors={[{label:'Understand',href:'#understand'},{label:'Build the base',href:'#start'},{label:'Choose a route',href:'#options'},{label:'FAQs',href:'#faqs'}]} />

      <TopicEducationDeepDive edu={edu} />
      <div id="start" />
      <TopicAtAGlance items={[
        { title: 'Base layer', bullets: ['Walk regularly and make the habit easy to repeat.', 'Use steps as awareness rather than a score to obsess over.', 'Add brisk segments, hills or longer walks gradually.'] },
        { title: 'Add strength', bullets: ['Use simple push, pull, squat/lunge, hinge and carry/core patterns.', 'Bodyweight or basic resistance is enough to start.', 'Add load when the existing routine feels controlled and repeatable.'] },
        { title: 'Common mistakes', bullets: ['Buying equipment before establishing the habit.', 'Starting with too much volume or intensity.', 'Treating trackers and gear as substitutes for actually moving.'] },
      ]} />

      <section className="nutrition-routes mt-16" id="options">
        <div className="nutrition-routes__heading"><p>Choose a route</p><div><h2>Build capability before collecting kit.</h2><span>The buying route stays available, but only after the habit and the actual limitation are clear.</span></div></div>
        <div className="nutrition-routes__list">{ROUTES.map((route, index) => <Link key={route.title} href={route.href}><span>0{index + 1}</span><div><h3>{route.title}</h3><p>{route.copy}</p></div><b>{route.label} →</b></Link>)}</div>
      </section>

      <section className="nutrition-buying mt-16"><div><p>Buying rule</p><h2>Gear should support movement, not replace it.</h2></div><div><p>Before buying, name the friction. If the problem is consistency, more equipment may not help. If the problem is load, weather, comfort, access or feedback, a specific tool may be useful.</p><p>For footwear and trackers, comfort, fit, returns and long-term usefulness matter more than novelty. For strength equipment, start with the smallest setup that covers the training you will actually do.</p><div className="flex flex-wrap gap-4"><Link href="/movement/movement-shortlist">Open movement shortlist →</Link><Link href="/topics/foot-strength">Explore foot strength →</Link></div></div></section>

      <TopicFAQ faqs={faqs} />
      <p className="mt-12 text-xs text-zinc-500">General information only. Some links are affiliate links; if you buy via them, we may earn a commission at no extra cost to you.</p>
    </main>
  )
}
