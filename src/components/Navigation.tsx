'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import Image from 'next/image'

const navItems = [
  { name: 'Accueil', href: '#home', kanji: '家' },
  { name: 'À propos', href: '#about', kanji: '者' },
  { name: 'Stack', href: '#skills', kanji: '術' },
  { name: 'Services', href: '#services', kanji: '務' },
  { name: 'Contact', href: '#contact', kanji: '連' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? theme === 'dark'
              ? 'bg-ninja-black/90 backdrop-blur-md border-b border-ninja-purple/20'
              : 'bg-white/90 backdrop-blur-md border-b border-ninja-purple/20 shadow-sm'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-10 h-10">
                <Image
                  src="https://www.websensei.fr/wp-content/uploads/2025/04/websensei-logo.svg"
                  alt="WebSensei Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold">
                <span className="text-ninja-cyan">Web</span>
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Sensei</span>
              </span>
              <span className="jp-char text-ninja-purple/50 text-sm hidden sm:block">忍</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative px-4 py-2 text-sm transition-colors group ${
                    activeSection === item.href.slice(1)
                      ? 'text-ninja-cyan'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {item.name}
                    <span className="jp-char text-xs opacity-0 group-hover:opacity-50 transition-opacity">
                      {item.kanji}
                    </span>
                  </span>
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-ninja-purple/10 border border-ninja-purple/30 rounded"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}

              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`ml-4 p-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'bg-ninja-gray/50 text-ninja-gold hover:bg-ninja-purple/20'
                    : 'bg-gray-100 text-ninja-purple hover:bg-ninja-purple/10'
                }`}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Menu Button + Theme Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg ${
                  theme === 'dark'
                    ? 'text-ninja-gold'
                    : 'text-ninja-purple'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed inset-y-0 right-0 z-40 w-64 backdrop-blur-lg border-l md:hidden ${
              theme === 'dark'
                ? 'bg-ninja-dark/95 border-ninja-purple/20'
                : 'bg-white/95 border-ninja-purple/20'
            }`}
          >
            <div className="flex flex-col gap-2 p-6 mt-16">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'bg-ninja-purple/20 text-ninja-cyan'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:bg-ninja-gray hover:text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="jp-char text-ninja-purple/50">{item.kanji}</span>
                </motion.a>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
              <Code2 className="w-12 h-12 text-ninja-purple/20" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
