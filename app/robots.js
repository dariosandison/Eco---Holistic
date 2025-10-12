export const dynamic = 'force-static'
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.wild-and-well.store/sitemap.xml',
    host: 'https://www.wild-and-well.store',
  }
}
