'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, MapPin, Github, Linkedin, Globe, CheckCircle, AlertCircle, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@websensei.fr',
    href: 'mailto:contact@websensei.fr',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Ramat Gan, Israel',
    href: null,
  },
  {
    icon: Clock,
    label: 'Réponse',
    value: 'Sous 24h',
    href: null,
  },
]

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/shmulix' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/samuelperez' },
  { icon: Globe, label: 'Website', href: 'https://websensei.fr' },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormState('success')

    // Reset after 3 seconds
    setTimeout(() => {
      setFormState('idle')
      setFormData({ name: '', email: '', project: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-24 px-4 bg-ninja-dark/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ninja-purple/50 to-transparent" />

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
            <span className="h-px w-12 bg-ninja-gold" />
            <span className="h-px w-12 bg-ninja-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Discutons de </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ninja-gold to-ninja-cyan">
              Votre Projet
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Devis gratuit sous 24h. WordPress, full-code, performance : trouvons la meilleure solution ensemble.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card-ninja p-8">
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-ninja-gray/50 border border-ninja-purple/20 rounded-lg text-white placeholder-gray-500 focus:border-ninja-cyan/50 focus:outline-none focus:ring-1 focus:ring-ninja-cyan/50 transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-ninja-gray/50 border border-ninja-purple/20 rounded-lg text-white placeholder-gray-500 focus:border-ninja-cyan/50 focus:outline-none focus:ring-1 focus:ring-ninja-cyan/50 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="project" className="block text-sm text-gray-400 mb-2">
                    Type de projet
                  </label>
                  <select
                    id="project"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-ninja-gray/50 border border-ninja-purple/20 rounded-lg text-white focus:border-ninja-cyan/50 focus:outline-none focus:ring-1 focus:ring-ninja-cyan/50 transition-all"
                  >
                    <option value="" className="bg-ninja-dark">Sélectionnez...</option>
                    <option value="wordpress" className="bg-ninja-dark">Site WordPress</option>
                    <option value="fullcode" className="bg-ninja-dark">Développement Full-Code</option>
                    <option value="performance" className="bg-ninja-dark">Optimisation Performance</option>
                    <option value="maintenance" className="bg-ninja-dark">Maintenance</option>
                    <option value="other" className="bg-ninja-dark">Autre</option>
                  </select>
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-ninja-gray/50 border border-ninja-purple/20 rounded-lg text-white placeholder-gray-500 focus:border-ninja-cyan/50 focus:outline-none focus:ring-1 focus:ring-ninja-cyan/50 transition-all resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formState === 'loading' || formState === 'success'}
                  whileHover={{ scale: formState === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: formState === 'idle' ? 0.98 : 1 }}
                  className={`w-full py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                    formState === 'success'
                      ? 'bg-ninja-green text-white'
                      : formState === 'error'
                      ? 'bg-ninja-red text-white'
                      : 'bg-gradient-to-r from-ninja-purple to-ninja-cyan text-white hover:shadow-lg hover:shadow-ninja-purple/25'
                  }`}
                >
                  {formState === 'loading' && (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Envoi en cours...
                    </>
                  )}
                  {formState === 'success' && (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message envoyé !
                    </>
                  )}
                  {formState === 'error' && (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Erreur, réessayez
                    </>
                  )}
                  {formState === 'idle' && (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="card-ninja p-5 group"
                >
                  {info.href ? (
                    <a href={info.href} className="flex items-center gap-4">
                      <div className="p-3 bg-ninja-purple/10 rounded-lg group-hover:bg-ninja-purple/20 transition-colors">
                        <info.icon className="w-6 h-6 text-ninja-cyan" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        <p className="text-white group-hover:text-ninja-cyan transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-ninja-purple/10 rounded-lg">
                        <info.icon className="w-6 h-6 text-ninja-cyan" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        <p className="text-white">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-gray-400 mb-4">Retrouvez-moi aussi sur</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-ninja-gray/50 rounded-lg border border-ninja-purple/20 text-gray-400 hover:text-ninja-cyan hover:border-ninja-cyan/50 transition-all"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Decorative Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative p-6 border-l-2 border-ninja-gold/50 mt-8"
            >
              <p className="text-gray-300 italic">
                "Rapide, moderne, orienté résultats."
              </p>
              <p className="text-ninja-cyan text-sm mt-2">— Web Sensei</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
