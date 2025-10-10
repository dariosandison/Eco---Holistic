import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import NewsletterBar from '@/components/NewsletterBar'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store'),
  title: { default: 'Wild & Well', template: '%s — Wild & Well' },
  openGraph: { siteName: 'Wild & Well', type: 'website' },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Reserve space for sticky newsletter bar so it never overlaps the footer */}
      <body className="min-h-screen flex flex-col pb-[var(--newsletter-h,0px)] bg-white text-[var(--ink)]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <NewsletterBar />
      </body>
    </html>
  )
}
