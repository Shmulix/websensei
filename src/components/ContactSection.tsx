'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, MapPin, Github, Linkedin, Globe, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import { useDictionary } from '@/i18n/DictionaryProvider'

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/shmulix' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/samuelperez' },
  { icon: Globe, label: 'Website', href: 'https://websensei.fr' },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', project: '', message: '' })
  const { dictionary, locale } = useDictionary()
  const t = dictionary.contact

  const contactInfo = [
    { icon: Mail, label: t.info.email, value: 'contact@websensei.fr', href: 'mailto:contact@websensei.fr' },
    { icon: MapPin, label: t.info.location, value: 'Ramat Gan, Israel', href: null },
    { icon: Clock, label: t.info.response, value: t.info.responseTime, href: null },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormState('success')
    setTimeout(() => {
      setFormState('idle')
      setFormData({ name: '', email: '', project: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-24 px-4 bg-ninja-dark/30">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ninja-purple/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
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
            <span className="text-white">{t.title} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ninja-gold to-ninja-cyan">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: locale === 'he' ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card-ninja p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">{t.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-ninja-gray/50 border border-ninja-purple/20 rounded-lg text-white placeholder-gray-500 focus:border-ninja-cyan/50 focus:outline-none focus:ring-1 focus:ring-ninja-cyan/50 transition-all"
                    placeholder={t.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">{t.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-ninja-gray/50 border border-ninja-purple/20 rounded-lg text-white placeholder-gray-500 focus:border-ninja-cyan/50 focus:outline-none focus:ring-1 focus:ring-ninja-cyan/50 transition-all"
                    placeholder={t.form.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm text-gray-400 mb-2">{t.form.project}</label>
                  <select
                    id="project"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-ninja-gray/50 border border-ninja-purple/20 rounded-lg text-white focus:border-ninja-cyan/50 focus:outline-none focus:ring-1 focus:ring-ninja-cyan/50 transition-all"
                  >
                    <option value="" className="bg-ninja-dark">{t.form.projectPlaceholder}</option>
                    <option value="wordpress" className="bg-ninja-dark">{t.form.projectOptions.wordpress}</option>
                    <option value="fullcode" className="bg-ninja-dark">{t.form.projectOptions.fullcode}</option>
                    <option value="performance" className="bg-ninja-dark">{t.form.projectOptions.performance}</option>
                    <option value="maintenance" className="bg-ninja-dark">{t.form.projectOptions.maintenance}</option>
                    <option value="other" className="bg-ninja-dark">{t.form.projectOptions.other}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">{t.form.message}</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-ninja-gray/50 border border-ninja-purple/20 rounded-lg text-white placeholder-gray-500 focus:border-ninja-cyan/50 focus:outline-none focus:ring-1 focus:ring-ninja-cyan/50 transition-all resize-none"
                    placeholder={t.form.messagePlaceholder}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === 'loading' || formState === 'success'}
                  whileHover={{ scale: formState === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: formState === 'idle' ? 0.98 : 1 }}
                  className={`w-full py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                    formState === 'success' ? 'bg-ninja-green text-white' :
                    formState === 'error' ? 'bg-ninja-red text-white' :
                    'bg-gradient-to-r from-ninja-purple to-ninja-cyan text-white hover:shadow-lg hover:shadow-ninja-purple/25'
                  }`}
                >
                  {formState === 'loading' && (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      {t.form.sending}
                    </>
                  )}
                  {formState === 'success' && (<><CheckCircle className="w-5 h-5" />{t.form.sent}</>)}
                  {formState === 'error' && (<><AlertCircle className="w-5 h-5" />{t.form.error}</>)}
                  {formState === 'idle' && (<><Send className="w-5 h-5" />{t.form.submit}</>)}
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: locale === 'he' ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
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
                        <p className="text-white group-hover:text-ninja-cyan transition-colors">{info.value}</p>
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-gray-400 mb-4">{t.social}</p>
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative p-6 border-l-2 border-ninja-gold/50 mt-8 rtl:border-l-0 rtl:border-r-2"
            >
              <p className="text-gray-300 italic">"{t.quote}"</p>
              <p className="text-ninja-cyan text-sm mt-2">{t.quoteAuthor}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
