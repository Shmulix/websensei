'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { locales, localeNames, localeFlags, type Locale } from '@/i18n/config'
import { useDictionary } from '@/i18n/DictionaryProvider'
import { useTheme } from './ThemeProvider'

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()
  const { locale: currentLocale } = useDictionary()
  const { theme } = useTheme()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const switchLocale = (newLocale: Locale) => {
    // Get the path without the current locale
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/'

    // Set cookie for locale preference
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`

    // Navigate to new locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
          theme === 'dark'
            ? 'bg-ninja-gray/50 text-gray-400 hover:text-white hover:bg-ninja-purple/20'
            : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-ninja-purple/10'
        }`}
      >
        <span className="text-lg">{localeFlags[currentLocale]}</span>
        <span className="hidden sm:inline text-sm font-medium">
          {currentLocale.toUpperCase()}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute top-full mt-2 right-0 min-w-[150px] rounded-lg border shadow-lg overflow-hidden z-50 ${
              theme === 'dark'
                ? 'bg-ninja-dark border-ninja-purple/20'
                : 'bg-white border-gray-200'
            }`}
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  locale === currentLocale
                    ? 'bg-ninja-purple/20 text-ninja-cyan'
                    : theme === 'dark'
                      ? 'text-gray-400 hover:bg-ninja-gray/50 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className="text-lg">{localeFlags[locale]}</span>
                <span className="text-sm font-medium">{localeNames[locale]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
