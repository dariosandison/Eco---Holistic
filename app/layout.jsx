import './globals.css'
import './editorial-upgrades.css'
import './money-page-upgrades.css'
import './money-page-tail.css'
import './topic-deep-dive.css'
import './trust-system.css'
import './author-system.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import NewsletterBar from '@/components/NewsletterBar'
import ConsentBanner from '@/components/ConsentBanner'
import GA from '@/components/GA'
import Clarity from '@/components/Clarity'
import SiteJsonLd from '@/components/SiteJsonLd'
import OutboundAffiliateTracker from '@/components/OutboundAffiliateTracker'
import BreadcrumbBar from '@/components/BreadcrumbBar'
import OnPageNav from '@/components/OnPageNav'
import ReadingProgressBar from '@/components/ReadingProgressBar'
import CommandPalette from '@/components/CommandPalette'
import ScrollDepthTracker from '@/components/ScrollDepthTracker'

import { buildCommandPaletteIndex } from '@/lib/commandPaletteIndex'

const SITE_URL = 'https://www.wild-and-well.store'
const DEFAULT_TITLE = 'Wild & Well'
const DEFAULT_DESC =
  'Independent UK guidance for water, air, sleep, nutrition, movement, healthy homes and practical resilience — evidence-aware, useful and free from hype.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${DEFAULT_TITLE}` },
  description: DEFAULT_DESC,
  applicationName: DEFAULT_TITLE,
  keywords: [
    'healthy living uk',
    'healthy home',
    'air quality',
    'water filters',
    'sleep',
    'nutrition',
    'movement',
    'fragrance-free',
    'household resilience',
    'emergency preparedness uk',
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    url: SITE_URL,
    siteName: DEFAULT_TITLE,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [{ url: '/twitter-image', width: 1200, height: 630, type: 'image/png' }],
  },
}

export default function RootLayout({ children }) {
  const commandPaletteIndex = buildCommandPaletteIndex()

  return (
    <html lang="en-GB">
      <head>
        <SiteJsonLd />
      </head>
      <body className="min-h-screen flex flex-col pb-[var(--newsletter-h,0px)] bg-white text-[var(--ink)]">
        <GA />
        <Clarity />
        <OutboundAffiliateTracker />
        <ScrollDepthTracker />
        <ReadingProgressBar />
        <BreadcrumbBar />
        <OnPageNav />
        <SiteHeader />
        <main id="content" className="flex-1">{children}</main>
        <SiteFooter />
        <NewsletterBar />
        <ConsentBanner />
        <CommandPalette index={commandPaletteIndex} />
      </body>
    </html>
  )
}
