import StructuredData from '@/components/StructuredData'
import { SITE_NAME, SITE_URL } from '@/lib/site'

export default function SiteJsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-default.jpg`,
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  }

  return (
    <>
      <StructuredData data={org} />
      <StructuredData data={website} />
    </>
  )
}
