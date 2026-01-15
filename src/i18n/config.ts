export const locales = ['fr', 'en', 'he'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'fr'

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  he: 'עברית',
}

export const localeFlags: Record<Locale, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  he: '🇮🇱',
}

export const rtlLocales: Locale[] = ['he']

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}
