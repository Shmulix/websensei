'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Code2, Zap, Search, BarChart3, Wrench, Sparkles, Palette } from 'lucide-react'

const services = [
  {
    title: 'Sites WordPress',
    description: 'Création de sites WordPress modernes avec Elementor, Kadence ou Crocoblock. Design sur mesure et optimisé.',
    icon: Globe,
    tags: ['Elementor Pro', 'Kadence', 'Crocoblock', 'WooCommerce'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'Développement Full-Code',
    description: 'Solutions 100% custom quand WordPress n\'est pas adapté. HTML/CSS/JS moderne, React, Next.js.',
    icon: Code2,
    tags: ['HTML/CSS', 'JavaScript', 'React', 'Next.js'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Animations GSAP',
    description: 'Animations front avancées avec GSAP et ScrollTrigger. Micro-interactions et effets visuels premium.',
    icon: Sparkles,
    tags: ['GSAP', 'ScrollTrigger', 'Lottie', 'CSS Animations'],
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'Performance Web',
    description: 'Optimisation cache, images AVIF/WebP, code propre. Core Web Vitals au vert.',
    icon: Zap,
    tags: ['Cache', 'CDN', 'Images AVIF', 'Core Web Vitals'],
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'SEO Technique',
    description: 'SEO structurel et technique. Schema markup, sitemap, performance, accessibilité.',
    icon: Search,
    tags: ['SEO On-Page', 'Schema.org', 'Sitemap', 'Meta Tags'],
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    title: 'Tracking & Analytics',
    description: 'Mise en place de tracking avancé. Google Analytics 4, Tag Manager, événements custom.',
    icon: BarChart3,
    tags: ['GA4', 'GTM', 'Events', 'Conversions'],
    color: 'from-pink-400 to-pink-600',
  },
  {
    title: 'Maintenance Technique',
    description: 'Maintenance mensuelle : mises à jour, sécurité, backups, monitoring, support technique.',
    icon: Wrench,
    tags: ['Updates', 'Sécurité', 'Backups', 'Support'],
    color: 'from-gray-400 to-gray-600',
  },
  {
    title: 'UI/UX Design',
    description: 'Design d\'interface moderne et ergonomique. Dark/Light mode, responsive, accessibilité.',
    icon: Palette,
    tags: ['Figma', 'UI Design', 'Responsive', 'Dark Mode'],
    color: 'from-indigo-400 to-indigo-600',
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-24 px-4">
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
            <span className="h-px w-12 bg-ninja-green" />
            <span className="h-px w-12 bg-ninja-green" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Mes </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ninja-green to-ninja-cyan">
              Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Du WordPress avancé au full-code sur mesure, des solutions rapides, modernes et orientées résultats
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="card-ninja h-full flex flex-col p-6">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-0.5`}>
                    <div className="w-full h-full bg-ninja-dark rounded-[10px] flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ninja-cyan transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] bg-ninja-gray/50 text-gray-500 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="px-2 py-0.5 text-[10px] text-ninja-cyan">
                      +{service.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-ninja-purple to-ninja-cyan rounded-lg font-medium text-white shadow-lg shadow-ninja-purple/25 hover:shadow-ninja-cyan/25 transition-shadow"
          >
            <span>Discutons de votre projet</span>
          </motion.a>
          <p className="text-gray-500 text-sm mt-4">
            Devis gratuit sous 24h
          </p>
        </motion.div>
      </div>
    </section>
  )
}
