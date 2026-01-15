'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const codeLines = [
  { text: 'const developer = {', delay: 0 },
  { text: '  name: "Samuel Perez",', delay: 0.5 },
  { text: '  title: "Full Stack Developer",', delay: 1 },
  { text: '  passion: "Building amazing web experiences",', delay: 1.5 },
  { text: '  skills: ["React", "Next.js", "TypeScript", "Node.js"],', delay: 2 },
  { text: '  motto: "コードの道を極める" // Master the way of code', delay: 2.5 },
  { text: '};', delay: 3 },
]

export function HeroSection() {
  const [displayedLines, setDisplayedLines] = useState<number>(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (displayedLines < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => prev + 1)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setIsTyping(false)
    }
  }, [displayedLines])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Japanese Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-12 bg-ninja-cyan" />
              <span className="text-ninja-cyan text-sm">ようこそ • Bienvenue</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">Je suis </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ninja-cyan to-ninja-purple">
                Samuel Perez
              </span>
            </motion.h1>

            {/* Subtitle with Ninja Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <h2 className="text-xl sm:text-2xl text-gray-400">
                Développeur Web{' '}
                <span className="text-ninja-green">Full Stack</span>
              </h2>
              <span className="jp-char text-3xl text-ninja-purple/50 animate-pulse">忍</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-lg max-w-lg leading-relaxed"
            >
              Comme un ninja maîtrise ses techniques, je perfectionne l'art du code pour créer des
              expériences web modernes, performantes et élégantes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-ninja-purple to-ninja-cyan rounded-lg font-medium text-white shadow-lg shadow-ninja-purple/25 hover:shadow-ninja-cyan/25 transition-shadow"
              >
                Voir mes projets
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-ninja-purple/50 rounded-lg font-medium text-white hover:border-ninja-cyan/50 hover:bg-ninja-purple/10 transition-all"
              >
                Me contacter
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-4 pt-6"
            >
              {[
                { icon: Github, href: 'https://github.com/samuelperez', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/samuelperez', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:contact@samuelperez.dev', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-400 hover:text-ninja-cyan transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Terminal Window */}
            <div className="relative bg-ninja-dark/80 rounded-xl border border-ninja-purple/20 overflow-hidden backdrop-blur-sm">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-ninja-gray/50 border-b border-ninja-purple/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-ninja-red" />
                  <div className="w-3 h-3 rounded-full bg-ninja-gold" />
                  <div className="w-3 h-3 rounded-full bg-ninja-green" />
                </div>
                <span className="ml-2 text-xs text-gray-500">samuel@ninja-dev ~ /portfolio</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <span className="text-ninja-green">➜</span>
                  <span className="text-ninja-cyan">~/portfolio</span>
                  <span>cat developer.js</span>
                </div>

                <div className="space-y-1">
                  {codeLines.slice(0, displayedLines).map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
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
                    <span className="text-ninja-cyan">~/portfolio</span>
                    <span className="cursor" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-4 -right-4 w-24 h-24 border border-ninja-purple/20 rounded-lg"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border border-ninja-cyan/20 rounded-lg"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-ninja-cyan transition-colors"
          >
            <span className="text-xs">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function CodeLine({ text }: { text: string }) {
  // Simple syntax highlighting
  const highlightCode = (code: string) => {
    return code
      .replace(/(const|let|var)/g, '<span class="text-ninja-purple">$1</span>')
      .replace(/(".*?")/g, '<span class="text-ninja-green">$1</span>')
      .replace(/(\[.*?\])/g, '<span class="text-ninja-gold">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="text-gray-500 italic">$1</span>')
      .replace(/(\{|\}|;|,)/g, '<span class="text-gray-400">$1</span>')
      .replace(/(name|title|passion|skills|motto):/g, '<span class="text-ninja-cyan">$1</span>:')
  }

  return (
    <span
      className="text-white"
      dangerouslySetInnerHTML={{ __html: highlightCode(text) }}
    />
  )
}
