'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Code2, Zap, Search, BarChart3, Wrench, Sparkles, Palette } from 'lucide-react'
import { useDictionary } from '@/i18n/DictionaryProvider'

const icons = [Globe, Code2, Sparkles, Zap, Search, BarChart3, Wrench, Palette]
const colors = [
  'from-blue-400 to-blue-600',
  'from-purple-400 to-purple-600',
  'from-green-400 to-green-600',
  'from-yellow-400 to-orange-500',
  'from-cyan-400 to-cyan-600',
  'from-pink-400 to-pink-600',
  'from-gray-400 to-gray-600',
  'from-indigo-400 to-indigo-600',
]

const tags = [
  ['Elementor Pro', 'Kadence', 'Crocoblock', 'WooCommerce'],
  ['HTML/CSS', 'JavaScript', 'React', 'Next.js'],
  ['GSAP', 'ScrollTrigger', 'Lottie', 'CSS Animations'],
  ['Cache', 'CDN', 'Images AVIF', 'Core Web Vitals'],
  ['SEO On-Page', 'Schema.org', 'Sitemap', 'Meta Tags'],
  ['GA4', 'GTM', 'Events', 'Conversions'],
  ['Updates', 'Sécurité', 'Backups', 'Support'],
  ['Figma', 'UI Design', 'Responsive', 'Dark Mode'],
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { dictionary } = useDictionary()
  const t = dictionary.services

  const services = [
    { key: 'wordpress', ...t.items.wordpress },
    { key: 'fullcode', ...t.items.fullcode },
    { key: 'gsap', ...t.items.gsap },
    { key: 'performance', ...t.items.performance },
    { key: 'seo', ...t.items.seo },
    { key: 'analytics', ...t.items.analytics },
    { key: 'maintenance', ...t.items.maintenance },
    { key: 'uiux', ...t.items.uiux },
  ]

  return (
    <section id="services" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
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
            <span className="text-white">{t.title} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ninja-green to-ninja-cyan">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="card-ninja h-full flex flex-col p-6">
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index]} p-0.5`}>
                      <div className="w-full h-full bg-ninja-dark rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ninja-cyan transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 flex-grow">{service.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {tags[index].slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] bg-ninja-gray/50 text-gray-500 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {tags[index].length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] text-ninja-cyan">
                        +{tags[index].length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

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
            <span>{t.cta}</span>
          </motion.a>
          <p className="text-gray-500 text-sm mt-4">{t.ctaSubtext}</p>
        </motion.div>
      </div>
    </section>
  )
}
