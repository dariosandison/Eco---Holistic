export const runtime = 'nodejs'

export async function GET() {
  return Response.redirect(new URL('/rss', 'https://www.wild-and-well.store'), 308)
}
