import { redirect } from 'next/navigation'

export const metadata = { title: 'Wellness Insights | Wild & Well' }

export default function Page(){
  redirect('/blog')
}
