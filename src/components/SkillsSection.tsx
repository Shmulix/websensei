'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    kanji: '表',
    skills: [
      { name: 'React', level: 95, color: 'from-cyan-400 to-blue-500' },
      { name: 'Next.js', level: 90, color: 'from-gray-400 to-gray-600' },
      { name: 'TypeScript', level: 88, color: 'from-blue-400 to-blue-600' },
      { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-cyan-500' },
      { name: 'Vue.js', level: 75, color: 'from-green-400 to-emerald-500' },
    ],
  },
  {
    title: 'Backend',
    kanji: '裏',
    skills: [
      { name: 'Node.js', level: 88, color: 'from-green-400 to-green-600' },
      { name: 'Python', level: 80, color: 'from-yellow-400 to-yellow-600' },
      { name: 'PostgreSQL', level: 85, color: 'from-blue-400 to-indigo-500' },
      { name: 'MongoDB', level: 82, color: 'from-green-500 to-green-700' },
      { name: 'GraphQL', level: 78, color: 'from-pink-400 to-pink-600' },
    ],
  },
  {
    title: 'DevOps & Tools',
    kanji: '具',
    skills: [
      { name: 'Git', level: 90, color: 'from-orange-400 to-red-500' },
      { name: 'Docker', level: 75, color: 'from-blue-400 to-blue-600' },
      { name: 'AWS', level: 70, color: 'from-yellow-400 to-orange-500' },
      { name: 'CI/CD', level: 78, color: 'from-purple-400 to-purple-600' },
      { name: 'Linux', level: 80, color: 'from-gray-400 to-gray-600' },
    ],
  },
]

const techLogos = [
  { name: 'React', symbol: '⚛️' },
  { name: 'Next.js', symbol: '▲' },
  { name: 'TypeScript', symbol: 'TS' },
  { name: 'Node.js', symbol: '⬢' },
  { name: 'Python', symbol: '🐍' },
  { name: 'Git', symbol: '⎇' },
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
            <span className="text-white">Mes </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ninja-purple to-ninja-cyan">
              Compétences
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Les techniques que j'ai maîtrisées au fil des années d'entraînement
          </p>
        </motion.div>

        {/* Tech Logos Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-8 mb-16 flex-wrap"
        >
          {techLogos.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -5 }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-ninja-gray/50 rounded-xl border border-ninja-purple/20 group-hover:border-ninja-cyan/50 transition-colors">
                <span className="text-2xl">{tech.symbol}</span>
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

        {/* Ninja Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-ninja-dark/80 rounded-full border border-ninja-purple/20">
            <span className="text-gray-400">Niveau global:</span>
            <span className="text-ninja-cyan font-bold">Ninja du Code</span>
            <span className="jp-char text-ninja-purple">上忍</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
