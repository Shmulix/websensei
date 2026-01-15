'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Cpu, Zap, Target, BookOpen, Coffee } from 'lucide-react'

const stats = [
  { value: '5+', label: 'Années d\'expérience', icon: Zap },
  { value: '50+', label: 'Projets complétés', icon: Target },
  { value: '∞', label: 'Passion pour le code', icon: Coffee },
]

const philosophies = [
  {
    kanji: '道',
    meaning: 'La Voie',
    description: 'Chaque ligne de code est une étape sur le chemin de la maîtrise.',
  },
  {
    kanji: '術',
    meaning: 'La Technique',
    description: 'Les meilleures solutions naissent de la précision et de l\'élégance.',
  },
  {
    kanji: '心',
    meaning: 'L\'Esprit',
    description: 'Comprendre les besoins avant d\'écrire la première ligne.',
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12 bg-ninja-purple" />
            <span className="jp-char text-2xl text-ninja-purple/50">者</span>
            <span className="h-px w-12 bg-ninja-purple" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">À propos de </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ninja-cyan to-ninja-purple">
              moi
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un développeur passionné qui fusionne l'art du code avec la philosophie ninja
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-ninja p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ninja-purple/10 rounded-lg">
                  <Code2 className="w-6 h-6 text-ninja-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Mon Histoire</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Salut ! Je suis Samuel Perez, développeur web full stack basé en France.
                    Ma passion pour le développement a commencé il y a plus de 5 ans, et depuis,
                    je n'ai jamais cessé d'apprendre et de me perfectionner.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-ninja p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ninja-cyan/10 rounded-lg">
                  <Cpu className="w-6 h-6 text-ninja-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Ma Mission</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Créer des applications web modernes, performantes et intuitives.
                    Je crois que le code doit être aussi élégant qu'efficace,
                    comme les mouvements précis d'un ninja.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-ninja p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ninja-green/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-ninja-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Mon Approche</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Je m'inspire de la philosophie ninja : précision, discrétion, efficacité.
                    Chaque projet est une mission que j'accomplis avec dévouement et excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-ninja-dark/50 rounded-lg border border-ninja-purple/10"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-2 text-ninja-cyan" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Philosophy Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-lg text-gray-400 mb-6">
              Ma philosophie de développeur <span className="jp-char text-ninja-purple">武士道</span>
            </h3>

            {philosophies.map((item, index) => (
              <motion.div
                key={item.kanji}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                whileHover={{ x: 10 }}
                className="group relative overflow-hidden"
              >
                <div className="card-ninja p-6 flex items-center gap-6">
                  <div className="relative">
                    <span className="jp-char text-5xl text-ninja-purple/20 group-hover:text-ninja-purple/40 transition-colors">
                      {item.kanji}
                    </span>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <span className="jp-char text-5xl text-transparent bg-clip-text bg-gradient-to-br from-ninja-cyan to-ninja-purple opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.kanji}
                      </span>
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.meaning}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
                {/* Slash effect on hover */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-ninja-cyan to-transparent opacity-0 group-hover:opacity-100 transform -translate-y-1/2 transition-opacity" />
              </motion.div>
            ))}

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative mt-8 p-6 border-l-2 border-ninja-purple/50"
            >
              <p className="text-gray-300 italic text-lg">
                "Le vrai ninja ne laisse pas de traces, seulement des résultats."
              </p>
              <p className="text-ninja-cyan text-sm mt-2">— Ma philosophie de code</p>
              <span className="absolute right-4 top-4 jp-char text-4xl text-ninja-purple/10">影</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
