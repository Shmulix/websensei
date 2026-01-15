import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { ParticleBackground } from '@/components/ParticleBackground'
import { KanjiBackground } from '@/components/KanjiBackground'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Samuel Perez | WebSensei | Développeur Web',
  description: 'Portfolio de Samuel Perez - Développeur Web Full Stack. Maîtrise du code avec la précision d\'un ninja.',
  keywords: ['Samuel Perez', 'WebSensei', 'Web Developer', 'Full Stack', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Samuel Perez' }],
  openGraph: {
    title: 'Samuel Perez | WebSensei',
    description: 'Développeur Web Full Stack - Code Ninja',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth dark">
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <KanjiBackground />
          <ParticleBackground />
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
