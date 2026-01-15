import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { ParticleBackground } from '@/components/ParticleBackground'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Samuel Perez | WebSensei | Développeur Web',
  description: 'Portfolio de Samuel Perez - Développeur Web. WordPress, Full-Code, IA-Driven. Des sites rapides, modernes et orientés résultats.',
  keywords: ['Samuel Perez', 'WebSensei', 'Web Developer', 'WordPress', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Samuel Perez' }],
  openGraph: {
    title: 'Samuel Perez | WebSensei',
    description: 'Développeur Web - WordPress & Full-Code',
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
