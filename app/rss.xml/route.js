import { buildRssXml } from '@/lib/rss'

export const runtime = 'nodejs'

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store'
  const xml = buildRssXml({ base })

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
