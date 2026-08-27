import './globals.css'
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
  'Practical UK guidance for low-tox living, water, air quality, sleep, nutrition, movement and household resilience — evidence-led, useful and free from hype.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${DEFAULT_TITLE}` },
  description: DEFAULT_DESC,
  applicationName: DEFAULT_TITLE,
  keywords: [
    'low-tox',
    'natural wellness',
    'healthy home',
    'uk wellness',
    'air quality',
    'water filters',
    'fragrance-free',
    'sleep',
    'nutrition',
    'movement',
    'household resilience',
    'emergency preparedness uk',
  ],
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: DEFAULT_TITLE,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: DEFAULT_TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }) {
  const paletteIndex = buildCommandPaletteIndex()
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
        <SiteHeader />
        <BreadcrumbBar />
        <ReadingProgressBar />
        <OnPageNav />
        <CommandPalette index={paletteIndex} />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <NewsletterBar />
        <ConsentBanner />
      </body>
    </html>
  )
}
