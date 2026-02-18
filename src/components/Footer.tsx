'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import { useDictionary } from '@/i18n/DictionaryProvider'
import { useTheme } from './ThemeProvider'

export function Footer() {
  const { dictionary } = useDictionary()
  const t = dictionary.footer
  const { theme } = useTheme()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 px-4 bg-ninja-black border-t border-ninja-purple/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative h-8 w-36">
            <Image
              src="https://www.websensei.fr/wp-content/uploads/2025/05/websensei-white-logo.svg"
              alt="WebSensei"
              fill
              className={`object-contain object-left transition-all duration-300 ${theme !== 'dark' ? 'brightness-0' : ''}`}
            />
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>{t.madeWith}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-ninja-red fill-ninja-red" />
            </motion.div>
            <span>+</span>
            <span className="text-ninja-cyan">IA</span>
            <span>+</span>
            <span className="text-ninja-purple">Next.js</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-ninja-gray/50 rounded-lg border border-ninja-purple/20 text-gray-400 hover:text-ninja-cyan hover:border-ninja-cyan/50 transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-ninja-purple/10 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Web Sensei - Samuel Felix Perez. {t.copyright}
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Ramat Gan, Israel
          </p>
        </div>
      </div>
    </footer>
  )
}
