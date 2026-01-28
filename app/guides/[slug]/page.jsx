import { redirect } from 'next/navigation'

export default function Page({ params }){
  redirect(`/blog/${params.slug}`)
}
