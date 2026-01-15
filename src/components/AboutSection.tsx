'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Cpu, Zap, Target, Sparkles, Briefcase } from 'lucide-react'

const stats = [
  { value: '2x', label: 'Profil hybride', icon: Briefcase },
  { value: 'IA', label: 'Co-développeur', icon: Sparkles },
  { value: '∞', label: 'Passion tech', icon: Zap },
]

const philosophies = [
  {
    icon: Zap,
    meaning: 'Rapidité',
    description: 'Je code vite parce que je code intelligemment. L\'IA accélère mon time-to-market.',
  },
  {
    icon: Target,
    meaning: 'Qualité',
    description: 'Clean code, clean UI, clean process. Performance et maintenabilité avant tout.',
  },
  {
    icon: Cpu,
    meaning: 'Efficacité',
    description: 'Pragmatique : choisir l\'outil le plus efficace, pas le plus à la mode.',
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
            <span className="h-px w-12 bg-ninja-purple" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Qui est </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ninja-cyan to-ninja-purple">
              Web Sensei
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un profil hybride ultra-moderne : développement web + business + IA
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
                  <h3 className="text-xl font-bold text-white mb-3">Freelance Web</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Création de sites web & solutions digitales. Du WordPress avancé
                    (Elementor, Kadence, Crocoblock) au développement full-code sur mesure,
                    accéléré par l'IA comme co-développeur.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-ninja p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ninja-cyan/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-ninja-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Business & Affiliation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Affiliate Manager + Operation Manager chez Ofran (location de voiture).
                    Une double casquette qui me donne une vision complète :
                    technique ET business.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-ninja p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ninja-green/10 rounded-lg">
                  <Sparkles className="w-6 h-6 text-ninja-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">IA-Driven Development</h3>
                  <p className="text-gray-400 leading-relaxed">
                    L'IA n'est pas un gadget, c'est un levier de productivité piloté par
                    une vraie compréhension technique et métier. Génération de code propre,
                    refactorisation, optimisation, debug : tout est accéléré.
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
              Ma philosophie de travail
            </h3>

            {philosophies.map((item, index) => (
              <motion.div
                key={item.meaning}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                whileHover={{ x: 10 }}
                className="group relative overflow-hidden"
              >
                <div className="card-ninja p-6 flex items-center gap-6">
                  <div className="p-3 bg-ninja-purple/10 rounded-lg group-hover:bg-ninja-purple/20 transition-colors">
                    <item.icon className="w-8 h-8 text-ninja-purple group-hover:text-ninja-cyan transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.meaning}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
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
                "Je code vite parce que je code intelligemment."
              </p>
              <p className="text-ninja-cyan text-sm mt-2">— Ma philosophie de développement</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
