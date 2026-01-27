import { redirect } from 'next/navigation'

export const metadata = { title: 'Topics | Wild & Well' }

export default function Page() {
  redirect('/picks')
}
