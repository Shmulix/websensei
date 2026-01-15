'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ChevronRight, Folder } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce moderne avec panier, paiement Stripe, et gestion admin complète.',
    image: '/projects/ecommerce.png',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/samuelperez/ecommerce',
    live: 'https://demo-ecommerce.vercel.app',
    kanji: '商',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'Application de gestion de tâches avec drag & drop, collaboration en temps réel et notifications.',
    image: '/projects/taskapp.png',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/samuelperez/taskapp',
    live: 'https://demo-taskapp.vercel.app',
    kanji: '務',
    featured: true,
  },
  {
    title: 'Portfolio Generator',
    description: 'Générateur de portfolio personnalisable pour développeurs avec thèmes et déploiement automatique.',
    image: '/projects/portfolio-gen.png',
    tags: ['Next.js', 'Tailwind', 'MDX', 'Vercel'],
    github: 'https://github.com/samuelperez/portfolio-gen',
    live: 'https://demo-portfolio-gen.vercel.app',
    kanji: '作',
    featured: true,
  },
  {
    title: 'Real-time Chat',
    description: 'Application de chat en temps réel avec rooms, emojis, et partage de fichiers.',
    image: '/projects/chat.png',
    tags: ['React', 'Socket.io', 'Express', 'Redis'],
    github: 'https://github.com/samuelperez/realtime-chat',
    kanji: '話',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description: 'Dashboard météo avec prévisions 7 jours, graphiques interactifs et géolocalisation.',
    image: '/projects/weather.png',
    tags: ['Vue.js', 'Chart.js', 'OpenWeather API'],
    github: 'https://github.com/samuelperez/weather-dash',
    live: 'https://demo-weather.vercel.app',
    kanji: '天',
    featured: false,
  },
  {
    title: 'Blog Platform',
    description: 'Plateforme de blog avec éditeur Markdown, commentaires et système de likes.',
    image: '/projects/blog.png',
    tags: ['Next.js', 'MDX', 'Prisma', 'NextAuth'],
    github: 'https://github.com/samuelperez/blog-platform',
    kanji: '記',
    featured: false,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured)

  return (
    <section id="projects" className="relative py-24 px-4">
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
            <span className="jp-char text-2xl text-ninja-green/50">作</span>
            <span className="h-px w-12 bg-ninja-green" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Mes </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ninja-green to-ninja-cyan">
              Projets
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Les missions accomplies avec précision et excellence
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="card-ninja h-full flex flex-col overflow-hidden">
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-ninja-gray to-ninja-dark overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="jp-char text-8xl text-ninja-purple/10 group-hover:text-ninja-purple/20 transition-colors">
                      {project.kanji}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ninja-dark to-transparent opacity-60" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-ninja-purple/80 rounded text-xs text-white">
                      Featured
                    </div>
                  )}

                  {/* Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-ninja-dark/90 rounded-full text-white hover:text-ninja-cyan transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-ninja-dark/90 rounded-full text-white hover:text-ninja-green transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-ninja-cyan transition-colors">
                      {project.title}
                    </h3>
                    <Folder className="w-5 h-5 text-ninja-purple/50" />
                  </div>

                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-ninja-gray/50 text-gray-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && projects.filter(p => !p.featured).length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-ninja-purple/50 rounded-lg text-white hover:border-ninja-cyan/50 hover:bg-ninja-purple/10 transition-all"
            >
              Voir plus de projets
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/samuelperez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-ninja-dark/80 rounded-full border border-ninja-purple/20 hover:border-ninja-purple/50 transition-colors group"
          >
            <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-gray-400 group-hover:text-white transition-colors">
              Voir tous mes projets sur GitHub
            </span>
            <span className="jp-char text-ninja-purple/50">源</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
