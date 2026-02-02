import { redirect } from 'next/navigation'

export const metadata = { title: 'Topics' }

export default function Page(){
  redirect('/topics')
}
