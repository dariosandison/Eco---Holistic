import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import NewsletterBar from '@/components/NewsletterBar'
import ConsentBanner from '@/components/ConsentBanner'
import GA from '@/components/GA'
import SiteJsonLd from '@/components/SiteJsonLd'
import OutboundAffiliateTracker from '@/components/OutboundAffiliateTracker'
import BreadcrumbBar from '@/components/BreadcrumbBar'

const SITE_URL = 'https://www.wild-and-well.store'
const DEFAULT_TITLE = 'Wild & Well'
const DEFAULT_DESC =
  'Low‑tox living and natural wellness, in plain English. UK‑focused guides and shortlists for air, water, fragrance‑free living, sleep, nutrition, and movement.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${DEFAULT_TITLE}` },
  description: DEFAULT_DESC,
  applicationName: DEFAULT_TITLE,
  keywords: [
    'low-tox',
    'non toxic',
    'natural wellness',
    'uk',
    'air purifiers',
    'water filters',
    'fragrance-free',
    'sleep',
    'nutrition',
    'movement',
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
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: DEFAULT_TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ['/og-default.jpg'],
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
  return (
    <html lang="en-GB">
      <head>
        <SiteJsonLd />
      </head>
      {/* Reserve space for sticky newsletter bar so it never overlaps the footer */}
      <body className="min-h-screen flex flex-col pb-[var(--newsletter-h,0px)] bg-white text-[var(--ink)]">
        <GA />
        <OutboundAffiliateTracker />
        <SiteHeader />
        <BreadcrumbBar />
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
