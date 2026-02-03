import Link from 'next/link'

export const metadata = {
  title: 'Corrections | Wild & Well',
  description: 'How we handle corrections and updates.',
}

export default function Page(){
  return (
    <main className='mx-auto max-w-3xl px-4 py-12 prose'>
      <h1>Corrections</h1>
      <p>
        We update pages when information changes, when products are discontinued, or when we spot an error.
        If you think something on the site is incorrect or unclear, please let us know.
      </p>
      <p>
        Contact us via the <Link href='/contact'>contact page</Link>.
      </p>
    </main>
  )
}
