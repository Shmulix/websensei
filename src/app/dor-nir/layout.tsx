import '@/app/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'דור ניר | מומחה PPC & Google Ads',
  description: 'מומחה Google Ads מוסמך - קמפיינים שמביאים תוצאות',
}

export default function DorNirLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-heebo antialiased bg-ninja-black">
        {children}
      </body>
    </html>
  )
}
