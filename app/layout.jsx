import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import NewsletterBar from '@/components/NewsletterBar'
import ConsentBanner from '@/components/ConsentBanner'
import GA from '@/components/GA'

export const metadata = {
  metadataBase: new URL("https://www.wild-and-well.store"),
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Reserve space for sticky newsletter bar so it never overlaps the footer */}
      <body className="min-h-screen flex flex-col pb-[var(--newsletter-h,0px)] bg-white text-[var(--ink)]">
        <GA />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <NewsletterBar />
        <ConsentBanner />
      </body>
    </html>
  )
}
