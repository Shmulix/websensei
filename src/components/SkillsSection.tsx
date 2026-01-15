'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Code2, Zap, Palette, Settings, Search, BarChart3, Shield } from 'lucide-react'

const expertiseAreas = [
  {
    title: 'Création de Sites Web',
    icon: Globe,
    description: 'Sites vitrine, e-commerce, blogs. Design moderne et adapté à tous les écrans.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'Design Sur Mesure',
    icon: Palette,
    description: 'Interfaces élégantes et intuitives. Votre image de marque mise en valeur.',
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Performance & Vitesse',
    icon: Zap,
    description: 'Sites rapides qui se chargent en moins de 3 secondes. Meilleur référencement.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Référencement SEO',
    icon: Search,
    description: 'Optimisation pour Google. Plus de visibilité, plus de clients.',
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Développement Avancé',
    icon: Code2,
    description: 'Solutions techniques personnalisées quand les outils standards ne suffisent pas.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Suivi & Analytics',
    icon: BarChart3,
    description: 'Tableaux de bord pour suivre vos visiteurs et mesurer vos résultats.',
    color: 'from-pink-400 to-pink-600',
  },
  {
    title: 'Maintenance & Support',
    icon: Settings,
    description: 'Mises à jour, sauvegardes, support technique. Votre site toujours au top.',
    color: 'from-gray-400 to-gray-600',
  },
  {
    title: 'Sécurité Web',
    icon: Shield,
    description: 'Protection contre les attaques. Certificats SSL, sauvegardes automatiques.',
    color: 'from-red-400 to-red-500',
  },
]

const technologies = [
  'WordPress',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Figma',
  'Analytics',
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
            <span className="h-px w-12 bg-ninja-cyan" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Mon </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ninja-purple to-ninja-cyan">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des solutions web adaptées à vos besoins, de la création à la maintenance
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -5 }}
              className="card-ninja p-6 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} p-0.5 mb-4`}>
                <div className="w-full h-full bg-ninja-dark rounded-[10px] flex items-center justify-center">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ninja-cyan transition-colors">
                {area.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Technologies utilisées</p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                className="px-4 py-2 bg-ninja-gray/50 rounded-full text-sm text-gray-400 border border-ninja-purple/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
