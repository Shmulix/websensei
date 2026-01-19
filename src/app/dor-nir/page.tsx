import { DorNirLanding } from '@/components/DorNirLanding'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'דור ניר | מומחה PPC & Google Ads - קמפיינים שמביאים תוצאות',
  description: 'דור ניר - מומחה Google Ads מוסמך. ניהול קמפיינים PPC מקצועי שמביא לקוחות חדשים ומגדיל את ה-ROI שלך. ייעוץ חינם!',
  keywords: ['Google Ads', 'PPC', 'פרסום בגוגל', 'קמפיינים', 'שיווק דיגיטלי', 'דור ניר'],
  openGraph: {
    title: 'דור ניר | מומחה PPC & Google Ads',
    description: 'הפוך את התקציב הפרסומי שלך למכונת לידים - יותר לקוחות, פחות עלויות, תוצאות מדידות',
    locale: 'he_IL',
    type: 'website',
  },
}

export default function DorNirPage() {
  return <DorNirLanding />
}
