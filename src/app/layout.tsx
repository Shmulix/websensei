import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { ParticleBackground } from '@/components/ParticleBackground'
import { KanjiBackground } from '@/components/KanjiBackground'

export const metadata: Metadata = {
  title: 'Samuel Perez | Web Developer | コードの忍者',
  description: 'Portfolio de Samuel Perez - Développeur Web Full Stack. Maîtrise du code avec la précision d\'un ninja.',
  keywords: ['Samuel Perez', 'Web Developer', 'Full Stack', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Samuel Perez' }],
  openGraph: {
    title: 'Samuel Perez | Web Developer',
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
    <html lang="fr" className="scroll-smooth">
      <body className="bg-ninja-black min-h-screen antialiased">
        <KanjiBackground />
        <ParticleBackground />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
