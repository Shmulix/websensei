'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { useDictionary } from '@/i18n/DictionaryProvider'
import gsap from 'gsap'

export function HeroSection() {
  const { dictionary, locale } = useDictionary()
  const t = dictionary.hero
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 })

  // Mouse spotlight tracking
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setSpotlightPos({ x, y })
    }
    hero.addEventListener('mousemove', onMouseMove)
    return () => hero.removeEventListener('mousemove', onMouseMove)
  }, [])

  const codeLines = [
    { text: 'const webSensei = {', delay: 0 },
    { text: `  name: "${t.terminal.code.name}",`, delay: 0.5 },
    { text: `  role: "${t.terminal.code.role}",`, delay: 1 },
    { text: `  location: "${t.terminal.code.location}",`, delay: 1.5 },
    { text: `  stack: ${JSON.stringify(t.terminal.code.stack)},`, delay: 2 },
    { text: `  motto: "${t.terminal.code.motto}"`, delay: 2.5 },
    { text: '};', delay: 3 },
  ]

  const [displayedLines, setDisplayedLines] = useState<number>(0)
  const [isTyping, setIsTyping] = useState(true)

  // GSAP animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split title animation
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char')
        gsap.fromTo(
          chars,
          {
            opacity: 0,
            y: 100,
            rotateX: -90,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.05,
            ease: 'back.out(1.7)',
            delay: 0.5,
          }
        )
      }

      // Terminal 3D entrance
      if (terminalRef.current) {
        gsap.fromTo(
          terminalRef.current,
          {
            opacity: 0,
            scale: 0.8,
            rotateY: locale === 'he' ? 15 : -15,
            transformPerspective: 1000,
          },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3,
          }
        )
      }

      // Floating animation for decorative elements
      gsap.to('.hero-float', {
        y: -20,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // Glow pulse animation
      gsap.to('.hero-glow', {
        opacity: 0.8,
        scale: 1.1,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [locale])

  useEffect(() => {
    if (displayedLines < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => prev + 1)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setIsTyping(false)
    }
  }, [displayedLines, codeLines.length])

  // Split text into characters for animation
  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block" style={{ perspective: '1000px' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-all duration-150"
        style={{
          background: `radial-gradient(700px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(99,102,241,0.07), transparent 50%)`,
        }}
      />

      {/* Background glow effects */}
      <div className="hero-glow absolute top-1/4 left-1/4 w-96 h-96 bg-ninja-purple/20 rounded-full blur-3xl pointer-events-none" />
      <div className="hero-glow absolute bottom-1/4 right-1/4 w-96 h-96 bg-ninja-cyan/20 rounded-full blur-3xl pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <motion.span
                className="h-px w-12 bg-ninja-cyan origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
              <span className="text-ninja-cyan text-sm flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                {t.location}
              </span>
            </motion.div>

            {/* Main Title with character animation */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight overflow-hidden"
            >
              <span className="text-shimmer inline-flex flex-wrap">
                {splitText(t.brandName)}
              </span>
            </h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-2"
            >
              <h2 className="text-xl sm:text-2xl text-gray-400">
                {t.name}
              </h2>
              <p className="text-lg text-ninja-green">
                {t.role}
              </p>
            </motion.div>

            {/* Description with reveal effect */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-gray-400 text-lg max-w-lg leading-relaxed"
            >
              {t.description} <span className="text-ninja-cyan font-semibold">{t.descriptionHighlight}</span>.
            </motion.p>

            {/* Tags with stagger */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-2"
            >
              {t.tags.map((tag: string, index: number) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 1.3 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-3 py-1 text-xs bg-ninja-gray/50 border border-ninja-purple/20 rounded-full text-gray-400 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons with magnetic effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-ninja-purple to-ninja-cyan rounded-lg font-medium text-white shadow-lg shadow-ninja-purple/25 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">{t.cta.services}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-ninja-cyan to-ninja-purple opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-ninja-purple/50 rounded-lg font-medium text-white hover:border-ninja-cyan hover:bg-ninja-purple/10 transition-all relative overflow-hidden"
              >
                <span className="relative z-10">{t.cta.contact}</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex items-center gap-4 pt-6"
            >
              {[
                { icon: Github, href: 'https://github.com/shmulix', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/samuelperez', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:contact@websensei.fr', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9 + index * 0.1 }}
                  whileHover={{ scale: 1.3, y: -5, color: '#22d3ee' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Code Terminal */}
          <div ref={terminalRef} className="relative hero-float">
            {/* Terminal Window */}
            <div className="relative bg-ninja-dark/80 rounded-xl border border-ninja-purple/20 overflow-hidden backdrop-blur-sm shadow-2xl shadow-ninja-purple/10">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-ninja-gray/50 border-b border-ninja-purple/20">
                <div className="flex gap-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-ninja-red"
                    whileHover={{ scale: 1.3 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-ninja-gold"
                    whileHover={{ scale: 1.3 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-ninja-green"
                    whileHover={{ scale: 1.3 }}
                  />
                </div>
                <span className="ml-2 text-xs text-gray-500">samuel@websensei ~ /projects</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm" dir="ltr">
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <span className="text-ninja-green">➜</span>
                  <span className="text-ninja-cyan">{t.terminal.path}</span>
                  <span>{t.terminal.command}</span>
                </div>

                <div className="space-y-1">
                  {codeLines.slice(0, displayedLines).map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex"
                    >
                      <span className="text-gray-600 w-6 text-right mr-4 select-none">
                        {index + 1}
                      </span>
                      <CodeLine text={line.text} />
                    </motion.div>
                  ))}
                  {isTyping && (
                    <div className="flex items-center">
                      <span className="text-gray-600 w-6 text-right mr-4 select-none">
                        {displayedLines + 1}
                      </span>
                      <span className="cursor" />
                    </div>
                  )}
                </div>

                {!isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 flex items-center gap-2 text-gray-500"
                  >
                    <span className="text-ninja-green">➜</span>
                    <span className="text-ninja-cyan">{t.terminal.path}</span>
                    <span className="cursor" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Decorative Elements with enhanced animation */}
            <motion.div
              animate={{
                rotate: 360,
                boxShadow: ['0 0 20px rgba(99, 102, 241, 0.3)', '0 0 40px rgba(99, 102, 241, 0.5)', '0 0 20px rgba(99, 102, 241, 0.3)']
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                boxShadow: { duration: 2, repeat: Infinity }
              }}
              className="absolute -top-4 -right-4 w-24 h-24 border border-ninja-purple/30 rounded-lg"
            />
            <motion.div
              animate={{
                rotate: -360,
                boxShadow: ['0 0 20px rgba(34, 211, 238, 0.3)', '0 0 40px rgba(34, 211, 238, 0.5)', '0 0 20px rgba(34, 211, 238, 0.3)']
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                boxShadow: { duration: 2, repeat: Infinity, delay: 1 }
              }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border border-ninja-cyan/30 rounded-lg"
            />

            {/* Additional decorative orbs */}
            <motion.div
              className="absolute -top-8 left-1/2 w-2 h-2 bg-ninja-purple rounded-full"
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 right-1/4 w-2 h-2 bg-ninja-cyan rounded-full"
              animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-ninja-cyan transition-colors"
          >
            <span className="text-xs">{t.scroll}</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function CodeLine({ text }: { text: string }) {
  const highlightCode = (code: string) => {
    return code
      .replace(/(const|let|var)/g, '<span class="text-ninja-purple">$1</span>')
      .replace(/(".*?")/g, '<span class="text-ninja-green">$1</span>')
      .replace(/(\[.*?\])/g, '<span class="text-ninja-gold">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="text-gray-500 italic">$1</span>')
      .replace(/(\{|\}|;|,)/g, '<span class="text-gray-400">$1</span>')
      .replace(/(name|role|location|stack|motto):/g, '<span class="text-ninja-cyan">$1</span>:')
  }

  return (
    <span
      className="text-white"
      dangerouslySetInnerHTML={{ __html: highlightCode(text) }}
    />
  )
}
