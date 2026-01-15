'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Globe, Code2, Zap, Search, BarChart3, Wrench, Sparkles, Palette } from 'lucide-react'
import { useDictionary } from '@/i18n/DictionaryProvider'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

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
  const cardsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    if (!cardsRef.current) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.service-card')
      if (!cards) return

      // Cards stagger animation with 3D rotation
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 100,
          rotateY: -20,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.9,
          stagger: {
            amount: 0.8,
            from: 'start',
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          },
        }
      )

      // Hover effect with tilt
      cards.forEach((card) => {
        const handleMouseMove = (e: Event) => {
          const mouseEvent = e as MouseEvent
          const rect = (card as HTMLElement).getBoundingClientRect()
          const x = mouseEvent.clientX - rect.left
          const y = mouseEvent.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const rotateX = (y - centerY) / 10
          const rotateY = (centerX - x) / 10

          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.3,
            ease: 'power2.out',
          })
        }

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)',
          })
        }

        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            boxShadow: '0 30px 60px -15px rgba(99, 102, 241, 0.3)',
            duration: 0.3,
          })
        }

        card.addEventListener('mousemove', handleMouseMove)
        card.addEventListener('mouseleave', handleMouseLeave)
        card.addEventListener('mouseenter', handleMouseEnter)
      })

      // CTA button animation
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 90%',
            },
          }
        )
      }
    }, cardsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-ninja-green/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-ninja-purple/5 rounded-full blur-3xl" />

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
              className="h-px w-12 bg-ninja-green"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.span
              className="h-px w-12 bg-ninja-green"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">{t.title} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ninja-green to-ninja-cyan">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ perspective: '1200px' }}
        >
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <div
                key={service.key}
                className="service-card group relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="card-ninja h-full flex flex-col p-6 transition-all duration-300">
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index]} p-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
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
                        className="px-2 py-0.5 text-[10px] bg-ninja-gray/50 text-gray-500 rounded transition-colors group-hover:bg-ninja-purple/20 group-hover:text-gray-400"
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
              </div>
            )
          })}
        </div>

        <div ref={ctaRef} className="mt-16 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-ninja-purple to-ninja-cyan rounded-lg font-medium text-white shadow-lg shadow-ninja-purple/25 transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">{t.cta}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-ninja-cyan to-ninja-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
          <p className="text-gray-500 text-sm mt-4">{t.ctaSubtext}</p>
        </div>
      </div>
    </section>
  )
}
