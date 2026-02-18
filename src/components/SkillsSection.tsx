'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Globe, Code2, Zap, Palette, Settings, Search, BarChart3, Shield } from 'lucide-react'
import { useDictionary } from '@/i18n/DictionaryProvider'
import { TechMarquee } from './TechMarquee'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const icons = [Globe, Palette, Zap, Search, Code2, BarChart3, Settings, Shield]
const colors = [
  'from-blue-400 to-blue-600',
  'from-purple-400 to-purple-600',
  'from-yellow-400 to-orange-500',
  'from-green-400 to-emerald-500',
  'from-cyan-400 to-blue-500',
  'from-pink-400 to-pink-600',
  'from-gray-400 to-gray-600',
  'from-red-400 to-red-500',
]


export function SkillsSection() {
  const ref = useRef(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { dictionary } = useDictionary()
  const t = dictionary.skills

  const expertiseAreas = [
    { key: 'websites', ...t.areas.websites },
    { key: 'design', ...t.areas.design },
    { key: 'performance', ...t.areas.performance },
    { key: 'seo', ...t.areas.seo },
    { key: 'development', ...t.areas.development },
    { key: 'analytics', ...t.areas.analytics },
    { key: 'maintenance', ...t.areas.maintenance },
    { key: 'security', ...t.areas.security },
  ]

  useEffect(() => {
    if (!cardsRef.current) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.skill-card')
      if (!cards) return

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 80,
          rotateX: -15,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      )

      // Add hover 3D effect
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)',
            duration: 0.3,
          })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: '0 0 0 0 transparent',
            duration: 0.3,
          })
        })
      })
    }, cardsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" className="relative py-24 px-4 bg-ninja-dark/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-ninja-purple/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-ninja-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.span
              className="h-px w-12 bg-ninja-cyan"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.span
              className="h-px w-12 bg-ninja-cyan"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">{t.title} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ninja-purple to-ninja-cyan">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
          {expertiseAreas.map((area, index) => {
            const Icon = icons[index]
            return (
              <div
                key={area.key}
                className="skill-card card-ninja p-6 group cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index]} p-0.5 mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                  <div className="w-full h-full bg-ninja-dark rounded-[10px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ninja-cyan transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-400 text-sm">{area.description}</p>
              </div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <p className="text-gray-500 text-sm text-center mb-2">{t.technologies}</p>
          <TechMarquee />
        </motion.div>
      </div>
    </section>
  )
}
