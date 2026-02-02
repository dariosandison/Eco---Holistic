import Link from 'next/link'
import CookiePreferences from '@/components/CookiePreferences'

export const metadata = {
  title: 'Cookies',
  description: 'Cookie information and preferences for analytics cookies.',
}

export default function Page(){
  return (
    <main className='mx-auto max-w-3xl px-4 py-12 prose'>
      <h1>Cookies</h1>
      <p>
        We use essential cookies required for the site to function. If you choose to allow analytics cookies,
        we use them to understand traffic and improve content.
      </p>
      <CookiePreferences />
      <p>
        For more detail, see our <Link href='/privacy'>Privacy Policy</Link>.
      </p>
    </main>
  )
}
