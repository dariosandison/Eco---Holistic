import { listContent } from '@/lib/content'
import { SHORTLIST_SECTIONS, flattenShortlists } from '@/lib/shortlistsData'

export function buildCommandPaletteIndex() {
  const out = []

  // Quick actions: prioritise the core editorial and decision journeys.
  out.push(
    { title: 'Search Wild & Well', href: '/search', kind: 'Action', badge: 'Ctrl/⌘ K' },
    { title: 'Start here', href: '/start-here', kind: 'Action' },
    { title: 'Explore the seven journeys', href: '/topics', kind: 'Action' },
    { title: 'Read guides', href: '/blog', kind: 'Action' },
    { title: 'Compare carefully chosen options', href: '/shortlists', kind: 'Action' },
    { title: 'Use free tools', href: '/tools', kind: 'Action' },
    { title: 'Why trust Wild & Well', href: '/about', kind: 'Action' },
    { title: 'Verified offers', href: '/deals', kind: 'Action' },
  )

  // Seven flagship journeys first; wider library follows.
  out.push(
    { title: 'Water', href: '/topics/water', kind: 'Journey', desc: 'Drinking water, filtration, hard water and household water decisions.' },
    { title: 'Air', href: '/topics/air-quality', kind: 'Journey', desc: 'Particles, smoke, damp, humidity and healthier indoor air.' },
    { title: 'Sleep', href: '/topics/sleep', kind: 'Journey', desc: 'Light, timing, temperature, comfort and recovery.' },
    { title: 'Nutrition', href: '/topics/nutrition', kind: 'Journey', desc: 'Food-first nutrition, labels, protein, fibre and useful staples.' },
    { title: 'Movement', href: '/topics/movement', kind: 'Journey', desc: 'Walking, simple strength, mobility and equipment that supports the habit.' },
    { title: 'Healthy Home', href: '/healthy-home', kind: 'Journey', desc: 'Air, water, lower-tox choices, energy and practical household improvements.' },
    { title: 'Practical Resilience', href: '/topics/resilience', kind: 'Journey', desc: 'Calm household preparation for water, power, food, air and communication.' },
    { title: 'Dog wellness', href: '/dogs', kind: 'Wider library', desc: 'Dog nutrition, movement, supplements, pet allergies and the home.' },
    { title: 'Outdoors & nature', href: '/outdoors', kind: 'Wider library', desc: 'Walking, family camping, outdoor cooking, hydration and dogs outdoors.' },
    { title: 'Home energy', href: '/healthy-home/home-energy', kind: 'Wider library', desc: 'Efficiency, monitoring, solar, batteries, heat pumps and backup power.' },
    { title: 'Fragrance-free home', href: '/topics/fragrance-free', kind: 'Wider library', desc: 'Laundry and cleaning choices for fragrance-sensitive households.' },
    { title: 'Measure before solar or a battery', href: '/healthy-home/home-energy/measure-before-solar', kind: 'Guide', desc: 'Use household demand and timing before comparing hardware.' },
    { title: 'Camping with a dog UK', href: '/outdoors/dog-camping-checklist-uk', kind: 'Guide', desc: 'Food, water, sleep, identification, temperature and campsite boundaries.' },
    { title: 'Family camping sleep system UK', href: '/outdoors/family-camping-sleep-system-uk', kind: 'Guide', desc: 'Choose ground insulation, sleeping bags and dry night layers as one practical system.' },
    { title: 'Portable power runtime calculator', href: '/tools/portable-power-runtime-calculator', kind: 'Tool', desc: 'Estimate watt-hours before comparing batteries or portable power stations.' },
  )

  try {
    const flat = flattenShortlists(SHORTLIST_SECTIONS)
    flat.forEach((it) => {
      out.push({
        title: it.label,
        href: it.href,
        kind: 'Shortlist',
        desc: it.desc,
        tags: [it.tag, it._sectionTitle].filter(Boolean),
      })
    })
  } catch (e) {
    // Keep core navigation useful even if shortlist data is unavailable.
  }

  try {
    const posts = listContent('blog')
    posts.forEach((p) => {
      out.push({
        title: p.title,
        href: `/blog/${p.slug}`,
        kind: 'Guide',
        desc: p.description || p.excerpt || '',
        tags: Array.isArray(p.tags) ? p.tags : [],
      })
    })
  } catch (e) {
    // Keep the command palette usable even if content indexing fails.
  }

  out.push(
    { title: 'About Wild & Well', href: '/about', kind: 'Standards' },
    { title: 'How we evaluate products', href: '/how-we-test', kind: 'Standards' },
    { title: 'Editorial policy', href: '/editorial-policy', kind: 'Standards' },
    { title: 'Affiliate disclosure', href: '/affiliate-disclosure', kind: 'Standards' },
    { title: 'Corrections', href: '/corrections', kind: 'Standards' },
    { title: 'Authors', href: '/authors', kind: 'Standards' },
    { title: 'Contact', href: '/contact', kind: 'Page' },
  )

  // Prefer one discoverable entry per URL. This prevents the same page appearing
  // several times under legacy labels while still allowing keyword matching via tags.
  const seen = new Set()
  return out.filter((it) => {
    if (seen.has(it.href)) return false
    seen.add(it.href)
    return true
  })
}
