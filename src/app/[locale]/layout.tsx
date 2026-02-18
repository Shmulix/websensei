import type { Metadata } from 'next'
import '../globals.css'
import { Navigation } from '@/components/Navigation'
import { ParticleBackground } from '@/components/ParticleBackground'
import { CustomCursor } from '@/components/CustomCursor'
import { ThemeProvider } from '@/components/ThemeProvider'
import { GSAPProvider } from '@/components/GSAPProvider'
import { DictionaryProvider } from '@/i18n/DictionaryProvider'
import { getDictionary } from '@/i18n/getDictionary'
import { locales, isRTL, type Locale } from '@/i18n/config'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  const titles: Record<Locale, string> = {
    fr: 'Samuel Perez | WebSensei | Développeur Web',
    en: 'Samuel Perez | WebSensei | Web Developer',
    he: 'סמואל פרז | WebSensei | מפתח אתרים',
  }

  const descriptions: Record<Locale, string> = {
    fr: 'Portfolio de Samuel Perez - Développeur Web. WordPress, Full-Code, IA-Driven. Des sites rapides, modernes et orientés résultats.',
    en: 'Portfolio of Samuel Perez - Web Developer. WordPress, Full-Code, AI-Driven. Fast, modern and results-oriented websites.',
    he: 'פורטפוליו של סמואל פרז - מפתח אתרים. WordPress, Full-Code, מונע AI. אתרים מהירים, מודרניים ומוכווני תוצאות.',
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    keywords: ['Samuel Perez', 'WebSensei', 'Web Developer', 'WordPress', 'React', 'Next.js', 'TypeScript'],
    authors: [{ name: 'Samuel Perez' }],
    openGraph: {
      title: 'Samuel Perez | WebSensei',
      description: descriptions[locale],
      type: 'website',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  const rtl = isRTL(locale)

  return (
    <html lang={locale} dir={rtl ? 'rtl' : 'ltr'} className="scroll-smooth dark">
      <head>
        {rtl && (
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        )}
      </head>
      <body className={`min-h-screen antialiased noise-overlay ${rtl ? 'font-heebo' : ''}`}>
        <ThemeProvider>
          <DictionaryProvider dictionary={dictionary} locale={locale}>
            <GSAPProvider>
              <CustomCursor />
              <ParticleBackground />
              <Navigation />
              <main className="relative z-10">
                {children}
              </main>
            </GSAPProvider>
          </DictionaryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
