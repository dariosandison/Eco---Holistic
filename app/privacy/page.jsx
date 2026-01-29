import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Wild & Well',
  description: 'How we handle data, analytics, and affiliate links.',
}

export default function Page(){
  return (
    <main className='mx-auto max-w-3xl px-4 py-12 prose'>
      <h1>Privacy Policy</h1>
      <p>
        We respect your privacy. We use essential site functionality and, if you allow it, anonymous analytics
        to understand which pages help readers most.
      </p>

      <h2>Analytics</h2>
      <p>
        If enabled, we may use Google Analytics to measure traffic and improve content. Analytics is optional and can be turned off.
      </p>
      <p>
        You can change your preference any time on our <Link href='/cookies'>Cookies</Link> page.
      </p>

      <h2>Affiliate links</h2>
      <p>
        Some pages contain affiliate links. If you buy through one of these links, we may earn a small commission at no extra cost to you.
        Read our <Link href='/affiliate-disclosure'>Affiliate Disclosure</Link> for details.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions, use our <Link href='/contact'>contact page</Link>.
      </p>
    </main>
  )
}
