'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  Users,
  Award,
  ArrowUp,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  Star,
  Rocket,
  DollarSign,
  MousePointerClick,
  LineChart,
  PieChart,
  ChevronDown,
  Quote,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ===============================
// HERO SECTION - ATTENTION (AIDA)
// ===============================
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
        )
      }

      // Stats counter animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll('.stat-item'),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.5, ease: 'back.out(1.7)' }
        )
      }

      // Floating animation
      gsap.to('.hero-float', {
        y: -15,
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // Glow pulse
      gsap.to('.hero-glow', {
        opacity: 0.6,
        scale: 1.2,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { value: '500%', label: 'עלייה ממוצעת ב-ROI', icon: TrendingUp },
    { value: '150+', label: 'קמפיינים מנוהלים', icon: Target },
    { value: '₪10M+', label: 'תקציב פרסום מנוהל', icon: DollarSign },
  ]

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="hero-glow absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-ninja-purple/30 to-ninja-cyan/20 rounded-full blur-3xl pointer-events-none" />
      <div className="hero-glow absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-ninja-cyan/20 to-ninja-green/20 rounded-full blur-3xl pointer-events-none" style={{ animationDelay: '1.5s' }} />

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-ninja-purple/20 border border-ninja-purple/30 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-ninja-cyan" />
            <span className="text-sm text-ninja-cyan">מומחה Google Ads מוסמך</span>
          </motion.div>

          {/* Main Title */}
          <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="block text-white mb-2">דור ניר</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-ninja-cyan via-ninja-purple to-ninja-green">
              מומחה PPC & Google Ads
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            הפוך את התקציב הפרסומי שלך למכונת לידים
            <br />
            <span className="text-ninja-cyan font-semibold">יותר לקוחות, פחות עלויות, תוצאות מדידות</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-l from-ninja-purple to-ninja-cyan rounded-xl font-bold text-white text-lg shadow-lg shadow-ninja-purple/30 transition-all relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                קבל ייעוץ חינם
              </span>
              <motion.div className="absolute inset-0 bg-gradient-to-l from-ninja-cyan to-ninja-purple opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-ninja-purple/50 rounded-xl font-bold text-white text-lg hover:border-ninja-cyan hover:bg-ninja-purple/10 transition-all"
            >
              למה לבחור בי?
            </motion.a>
          </motion.div>

          {/* Stats */}
          <div ref={statsRef} className="grid sm:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item card-ninja p-6 text-center hero-float"
                style={{ animationDelay: `${index * 0.2}s` }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(99, 102, 241, 0.5)' }}
              >
                <stat.icon className="w-8 h-8 text-ninja-cyan mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-ninja-purple to-ninja-cyan">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#problem"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-ninja-cyan transition-colors"
          >
            <span className="text-sm">גלול למטה</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// ===============================
// PROBLEM SECTION - INTEREST (AIDA)
// ===============================
function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const problems = [
    {
      icon: DollarSign,
      title: 'מבזבז תקציב על קליקים לא רלוונטיים?',
      description: 'רוב המפרסמים מאבדים 40-60% מהתקציב שלהם על קליקים שלא מביאים תוצאות'
    },
    {
      icon: Target,
      title: 'לא יודע איך לטרגט את הקהל הנכון?',
      description: 'בלי טירגוט מדויק, הפרסומות שלך מגיעות לאנשים שלעולם לא יהפכו ללקוחות'
    },
    {
      icon: LineChart,
      title: 'לא מצליח לעקוב אחרי התוצאות?',
      description: 'בלי מעקב נכון, אתה טס עיוור ולא יודע מה באמת עובד ומה לא'
    },
    {
      icon: Clock,
      title: 'מבלה שעות על ניהול קמפיינים?',
      description: 'הזמן שלך שווה כסף - במקום לנהל קמפיינים, אתה יכול להתמקד בעסק שלך'
    }
  ]

  return (
    <section ref={ref} id="problem" className="relative py-24 px-4 bg-ninja-dark/30">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">מכיר את זה? </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-ninja-red to-ninja-gold">
              הכאב של פרסום לא יעיל
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            אם אתה מרגיש שאתה שורף כסף על פרסום בגוגל בלי לראות תוצאות אמיתיות - אתה לא לבד
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="card-ninja p-6 border-ninja-red/20 hover:border-ninja-red/40"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ninja-red/20 rounded-xl">
                  <problem.icon className="w-6 h-6 text-ninja-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                  <p className="text-gray-400">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-2xl font-bold text-ninja-cyan">
            יש פתרון טוב יותר 👇
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ===============================
// SERVICES SECTION - INTEREST (AIDA)
// ===============================
function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Target,
      title: 'קמפיינים ב-Google Search',
      description: 'פרסום ממוקד למילות מפתח רלוונטיות שמביאות לקוחות מחפשים בדיוק את מה שאתה מציע',
      features: ['מחקר מילות מפתח מעמיק', 'כתיבת מודעות ממירות', 'אופטימיזציה שוטפת']
    },
    {
      icon: Users,
      title: 'קמפיינים ב-Display Network',
      description: 'הגעה לקהלים חדשים באמצעות באנרים ויזואליים ברשת התוכן של גוגל',
      features: ['עיצוב באנרים מקצועי', 'טירגוט לפי תחומי עניין', 'רימרקטינג חכם']
    },
    {
      icon: BarChart3,
      title: 'קמפיינים ב-YouTube',
      description: 'פרסום וידאו שמגיע למיליוני צופים ובונה מודעות למותג שלך',
      features: ['סרטוני פרסומת קצרים', 'טירגוט לפי ערוצים', 'מדידת צפיות ומעורבות']
    },
    {
      icon: MousePointerClick,
      title: 'Google Shopping',
      description: 'הצג את המוצרים שלך ישירות בתוצאות החיפוש עם תמונה, מחיר וקישור לרכישה',
      features: ['הגדרת פיד מוצרים', 'אופטימיזציית הצעות מחיר', 'סינכרון עם חנות']
    },
    {
      icon: Zap,
      title: 'Performance Max',
      description: 'קמפיינים אוטומטיים שמשתמשים ב-AI של גוגל לתוצאות מקסימליות',
      features: ['אוטומציה מלאה', 'כל הפלטפורמות', 'למידת מכונה מתקדמת']
    },
    {
      icon: PieChart,
      title: 'ניתוח ודיווח',
      description: 'דוחות מפורטים ושקופים שמראים לך בדיוק לאן הולך כל שקל',
      features: ['דשבורד בזמן אמת', 'דוחות חודשיים', 'המלצות לשיפור']
    }
  ]

  return (
    <section ref={ref} id="services" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">השירותים </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-ninja-cyan to-ninja-purple">
              שלי
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            פתרונות PPC מותאמים אישית לכל סוג עסק וכל תקציב
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="card-ninja p-6 group"
            >
              <div className="p-3 bg-gradient-to-br from-ninja-purple/20 to-ninja-cyan/20 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-ninja-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-ninja-green" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===============================
// RESULTS SECTION - DESIRE (AIDA)
// ===============================
function ResultsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const results = [
    {
      industry: 'חנות אונליין - אופנה',
      metrics: [
        { label: 'עלייה במכירות', value: '+340%' },
        { label: 'ירידה בעלות להמרה', value: '-45%' },
        { label: 'ROAS', value: '8.2x' }
      ]
    },
    {
      industry: 'קליניקה לרפואה אסתטית',
      metrics: [
        { label: 'לידים חדשים בחודש', value: '+180' },
        { label: 'עלות לליד', value: '₪35' },
        { label: 'שיעור המרה', value: '12%' }
      ]
    },
    {
      industry: 'חברת שיפוצים',
      metrics: [
        { label: 'הגדלת הכנסות', value: '+220%' },
        { label: 'פניות מהאתר', value: 'x5' },
        { label: 'ROI', value: '650%' }
      ]
    }
  ]

  return (
    <section ref={ref} id="results" className="relative py-24 px-4 bg-ninja-dark/30">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">תוצאות </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-ninja-green to-ninja-cyan">
              אמיתיות
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            הנה מה שהשגתי ללקוחות שלי בחודשים האחרונים
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.industry}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="card-ninja p-6 border-ninja-green/20 hover:border-ninja-green/40"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-ninja-green/20 rounded-lg">
                  <Award className="w-5 h-5 text-ninja-green" />
                </div>
                <h3 className="text-lg font-bold text-white">{result.industry}</h3>
              </div>
              <div className="space-y-4">
                {result.metrics.map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center">
                    <span className="text-gray-400">{metric.label}</span>
                    <span className="text-2xl font-bold text-ninja-green">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===============================
// TESTIMONIALS SECTION - DESIRE (AIDA)
// ===============================
function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      name: 'יוסי כהן',
      role: 'בעלים, רשת חנויות אלקטרוניקה',
      content: 'דור שינה לנו את הקמפיינים מקצה לקצה. תוך חודשיים ראינו עלייה של 400% בהמרות עם אותו תקציב. מקצוען אמיתי!',
      stars: 5
    },
    {
      name: 'מיכל לוי',
      role: 'מנהלת שיווק, קליניקה לאסתטיקה',
      content: 'סוף סוף מישהו שמבין מה הוא עושה. הלידים שמגיעים עכשיו איכותיים הרבה יותר והעלות ירדה משמעותית.',
      stars: 5
    },
    {
      name: 'אבי שמיר',
      role: 'מנכ"ל, חברת שיפוצים',
      content: 'עבדתי עם כמה סוכנויות לפני דור ואף אחת לא הגיעה לתוצאות כאלה. הדוחות השקופים והתקשורת המעולה זה בונוס ענק.',
      stars: 5
    }
  ]

  return (
    <section ref={ref} id="testimonials" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">מה הלקוחות </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-ninja-gold to-ninja-purple">
              אומרים
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="card-ninja p-6"
            >
              <Quote className="w-10 h-10 text-ninja-purple/30 mb-4" />
              <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-ninja-gold fill-ninja-gold" />
                ))}
              </div>
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===============================
// PROCESS SECTION
// ===============================
function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      number: '01',
      title: 'שיחת ייעוץ חינם',
      description: 'נבין את העסק שלך, היעדים והאתגרים שלך',
      icon: Phone
    },
    {
      number: '02',
      title: 'בניית אסטרטגיה',
      description: 'נתכנן קמפיינים מותאמים אישית ליעדים שלך',
      icon: Target
    },
    {
      number: '03',
      title: 'השקה ואופטימיזציה',
      description: 'נשיק את הקמפיינים ונשפר אותם באופן שוטף',
      icon: Rocket
    },
    {
      number: '04',
      title: 'דיווח ושיפור מתמיד',
      description: 'דוחות שקופים וייעול קבוע לתוצאות טובות יותר',
      icon: BarChart3
    }
  ]

  return (
    <section ref={ref} id="process" className="relative py-24 px-4 bg-ninja-dark/30">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">איך זה </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-ninja-cyan to-ninja-purple">
              עובד?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            תהליך פשוט ושקוף מההתחלה ועד התוצאות
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative"
            >
              <div className="card-ninja p-6 h-full">
                <div className="text-5xl font-bold text-ninja-purple/20 mb-4">{step.number}</div>
                <step.icon className="w-8 h-8 text-ninja-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-3 w-6 h-0.5 bg-gradient-to-l from-ninja-purple to-ninja-cyan" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===============================
// WHY ME SECTION
// ===============================
function WhyMeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const reasons = [
    {
      icon: Shield,
      title: 'מוסמך Google Partner',
      description: 'הסמכה רשמית מגוגל שמבטיחה ידע מעמיק ועדכני'
    },
    {
      icon: Clock,
      title: 'זמינות ותקשורת',
      description: 'תמיד זמין לשאלות, עם עדכונים שוטפים על הקמפיינים'
    },
    {
      icon: DollarSign,
      title: 'שקיפות מלאה',
      description: 'אתה יודע בדיוק לאן הולך כל שקל מהתקציב שלך'
    },
    {
      icon: TrendingUp,
      title: 'מוכוון תוצאות',
      description: 'לא רק קליקים - אני מתמקד בהמרות ו-ROI אמיתי'
    }
  ]

  return (
    <section ref={ref} id="why-me" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">למה </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-ninja-purple to-ninja-cyan">
              דווקא אני?
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="card-ninja p-6 flex items-start gap-4"
            >
              <div className="p-3 bg-gradient-to-br from-ninja-purple/20 to-ninja-cyan/20 rounded-xl">
                <reason.icon className="w-6 h-6 text-ninja-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===============================
// CONTACT SECTION - ACTION (AIDA)
// ===============================
function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent')
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <section ref={ref} id="contact" className="relative py-24 px-4 bg-ninja-dark/30">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">בוא נתחיל </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-ninja-green to-ninja-cyan">
              להרוויח
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            השאר פרטים ואחזור אליך תוך 24 שעות עם הצעה מותאמת אישית
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="card-ninja p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">שם מלא</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-ninja-dark/50 border border-ninja-purple/20 rounded-lg text-white focus:border-ninja-cyan focus:outline-none transition-colors"
                  placeholder="השם שלך"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">טלפון</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-ninja-dark/50 border border-ninja-purple/20 rounded-lg text-white focus:border-ninja-cyan focus:outline-none transition-colors"
                  placeholder="050-1234567"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">אימייל</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-ninja-dark/50 border border-ninja-purple/20 rounded-lg text-white focus:border-ninja-cyan focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">תקציב פרסום חודשי משוער</label>
              <select className="w-full px-4 py-3 bg-ninja-dark/50 border border-ninja-purple/20 rounded-lg text-white focus:border-ninja-cyan focus:outline-none transition-colors">
                <option value="">בחר...</option>
                <option value="under-5k">עד ₪5,000</option>
                <option value="5k-15k">₪5,000 - ₪15,000</option>
                <option value="15k-30k">₪15,000 - ₪30,000</option>
                <option value="over-30k">מעל ₪30,000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">ספר לי על העסק שלך</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-ninja-dark/50 border border-ninja-purple/20 rounded-lg text-white focus:border-ninja-cyan focus:outline-none transition-colors resize-none"
                placeholder="במה העסק עוסק? מה היעדים שלך?"
              />
            </div>
            <motion.button
              type="submit"
              disabled={formStatus === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-l from-ninja-purple to-ninja-cyan rounded-lg font-bold text-white text-lg shadow-lg shadow-ninja-purple/30 transition-all disabled:opacity-50"
            >
              {formStatus === 'idle' && (
                <span className="flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5" />
                  קבל ייעוץ חינם
                </span>
              )}
              {formStatus === 'sending' && 'שולח...'}
              {formStatus === 'sent' && (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  נשלח בהצלחה!
                </span>
              )}
              {formStatus === 'error' && 'שגיאה, נסה שוב'}
            </motion.button>
          </form>

          {/* Contact alternatives */}
          <div className="mt-8 pt-8 border-t border-ninja-purple/20">
            <p className="text-center text-gray-500 mb-4">או צור קשר ישירות:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+972501234567"
                className="flex items-center gap-2 px-4 py-2 bg-ninja-dark/50 border border-ninja-purple/20 rounded-lg text-gray-400 hover:text-ninja-cyan hover:border-ninja-cyan transition-colors"
              >
                <Phone className="w-4 h-4" />
                050-123-4567
              </a>
              <a
                href="mailto:dor@example.com"
                className="flex items-center gap-2 px-4 py-2 bg-ninja-dark/50 border border-ninja-purple/20 rounded-lg text-gray-400 hover:text-ninja-cyan hover:border-ninja-cyan transition-colors"
              >
                <Mail className="w-4 h-4" />
                dor@example.com
              </a>
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-ninja-dark/50 border border-ninja-purple/20 rounded-lg text-gray-400 hover:text-ninja-green hover:border-ninja-green transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ===============================
// FOOTER
// ===============================
function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 px-4 border-t border-ninja-purple/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-ninja-cyan to-ninja-purple mb-4">
            דור ניר | מומחה PPC
          </div>
          <p className="text-gray-500 mb-6">
            הפוך את הפרסום שלך למכונת לידים
          </p>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} דור ניר. כל הזכויות שמורות.
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 p-3 bg-gradient-to-r from-ninja-purple to-ninja-cyan rounded-full shadow-lg shadow-ninja-purple/30 text-white z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

// ===============================
// MAIN LANDING PAGE COMPONENT
// ===============================
export function DorNirLanding() {
  return (
    <div className="min-h-screen bg-ninja-black text-white font-heebo" dir="rtl">
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ResultsSection />
      <TestimonialsSection />
      <ProcessSection />
      <WhyMeSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
