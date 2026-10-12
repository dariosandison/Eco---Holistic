import Link from 'next/link'
import CookiePreferences from '@/components/CookiePreferences'

export const metadata = {
  title: 'Cookies',
  description: 'Cookie information, cookieless aggregate measurement and optional analytics preferences.',
}

export default function Page(){
  return (
    <main className='mx-auto max-w-3xl px-4 py-12 prose'>
      <h1>Cookies</h1>
      <p>
        We use Vercel Web Analytics for cookieless, aggregate traffic measurement. It does not use advertising cookies or track you
        between websites. If you choose to allow optional analytics cookies, Google Analytics and Microsoft Clarity may also be used to
        understand traffic and improve content.
      </p>
      <CookiePreferences />
      <p>
        For more detail, see our <Link href='/privacy'>Privacy Policy</Link>.
      </p>
    </main>
  )
}
