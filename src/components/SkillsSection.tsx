'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'WordPress & CMS',
    kanji: '基',
    skills: [
      { name: 'WordPress', level: 95, color: 'from-blue-400 to-blue-600' },
      { name: 'Elementor Pro', level: 95, color: 'from-pink-400 to-pink-600' },
      { name: 'Kadence', level: 90, color: 'from-purple-400 to-purple-600' },
      { name: 'Crocoblock', level: 85, color: 'from-orange-400 to-orange-600' },
      { name: 'WooCommerce', level: 80, color: 'from-indigo-400 to-indigo-600' },
    ],
  },
  {
    title: 'Full-Code & Front',
    kanji: '術',
    skills: [
      { name: 'HTML / CSS', level: 95, color: 'from-orange-400 to-red-500' },
      { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
      { name: 'GSAP / ScrollTrigger', level: 80, color: 'from-green-400 to-green-600' },
      { name: 'React / Next.js', level: 75, color: 'from-cyan-400 to-blue-500' },
      { name: 'Tailwind CSS', level: 85, color: 'from-teal-400 to-cyan-500' },
    ],
  },
  {
    title: 'Back & Performance',
    kanji: '力',
    skills: [
      { name: 'PHP', level: 80, color: 'from-indigo-400 to-purple-500' },
      { name: 'MySQL / SQLite', level: 75, color: 'from-blue-400 to-blue-600' },
      { name: 'SEO Technique', level: 85, color: 'from-green-400 to-emerald-500' },
      { name: 'Web Performance', level: 90, color: 'from-red-400 to-orange-500' },
      { name: 'Git / GitHub', level: 85, color: 'from-gray-400 to-gray-600' },
    ],
  },
]

const tools = [
  { name: 'WordPress', symbol: 'W' },
  { name: 'Elementor', symbol: 'E' },
  { name: 'Claude AI', symbol: '◉' },
  { name: 'Cursor', symbol: '▶' },
  { name: 'VS Code', symbol: '⌨' },
  { name: 'Figma', symbol: '◈' },
  { name: 'GitHub', symbol: '⎇' },
  { name: 'Vercel', symbol: '▲' },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-24 px-4 bg-ninja-dark/30">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12 bg-ninja-cyan" />
            <span className="jp-char text-2xl text-ninja-cyan/50">術</span>
            <span className="h-px w-12 bg-ninja-cyan" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Stack </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ninja-purple to-ninja-cyan">
              Technique
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Du WordPress avancé au full-code sur mesure, le bon outil pour chaque projet
          </p>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mb-16 flex-wrap"
        >
          {tools.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
              whileHover={{ scale: 1.2, y: -5 }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-ninja-gray/50 rounded-xl border border-ninja-purple/20 group-hover:border-ninja-cyan/50 transition-colors">
                <span className="text-xl font-bold text-gray-400 group-hover:text-ninja-cyan transition-colors">{tech.symbol}</span>
              </div>
              <span className="text-xs text-gray-500 group-hover:text-ninja-cyan transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + catIndex * 0.15 }}
              className="card-ninja p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="jp-char text-3xl text-ninja-purple/30">{category.kanji}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-xs text-ninja-cyan">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-ninja-gray rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + catIndex * 0.1 + skillIndex * 0.05, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-ninja-dark/80 rounded-full border border-ninja-purple/20">
            <span className="text-gray-400">Boosté par:</span>
            <span className="text-ninja-cyan font-bold">IA Co-développeur</span>
            <span className="jp-char text-ninja-purple">智</span>
          </div>
          <p className="text-gray-500 text-sm mt-4 max-w-lg mx-auto">
            L'IA n'est pas un gadget, c'est un levier de productivité piloté par une vraie compréhension technique.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
