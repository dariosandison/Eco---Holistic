import { redirect } from 'next/navigation'

export const metadata = { title: 'Favourites | Wild & Well' }

export default function Page() {
  redirect('/best-of')
}
