import { redirect } from 'next/navigation'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'

export const metadata = { title: 'Favourites | Wild & Well' }

export default function Page(){
    const edu = getMoneyPageEdu('best-of')
redirect('/favourites')
}