import './globals.css';
import NewsletterBar from '@/components/NewsletterBar';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import GA from '@/components/GA';
import ConsentBanner from '@/components/ConsentBanner';

export const metadata = { openGraph: { title: 'Wild & Well', siteName: 'Wild & Well', type: 'website' }, twitter: { card: 'summary_large_image' },
  title: 'Wild & Well',
  description: 'Eco-holistic guides and curated picks.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <GA />
        <NewsletterBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ConsentBanner />
      </body>
    </html>
  );
}
