'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGSAPAnimations() {
  const hasInitialized = useRef(false)

  useEffect(() => {
    if (hasInitialized.current) return
    hasInitialized.current = true

    // Wait for DOM to be ready
    const ctx = gsap.context(() => {
      // Animate all sections on scroll
      gsap.utils.toArray<HTMLElement>('.gsap-section').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Stagger cards on scroll
      gsap.utils.toArray<HTMLElement>('.gsap-stagger-container').forEach((container) => {
        const cards = container.querySelectorAll('.gsap-card')
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: container,
              start: 'top 75%',
            },
          }
        )
      })

      // Text reveal animation
      gsap.utils.toArray<HTMLElement>('.gsap-text-reveal').forEach((text) => {
        gsap.fromTo(
          text,
          {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            opacity: 0
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 1,
            duration: 1.2,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: text,
              start: 'top 85%',
            },
          }
        )
      })

      // Parallax elements
      gsap.utils.toArray<HTMLElement>('.gsap-parallax').forEach((el) => {
        const speed = el.dataset.speed || '0.5'
        gsap.to(el, {
          yPercent: parseFloat(speed) * -100,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      // Scale up elements on scroll
      gsap.utils.toArray<HTMLElement>('.gsap-scale').forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        )
      })

      // Horizontal slide animations
      gsap.utils.toArray<HTMLElement>('.gsap-slide-left').forEach((el) => {
        gsap.fromTo(
          el,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('.gsap-slide-right').forEach((el) => {
        gsap.fromTo(
          el,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        )
      })

      // Rotate and fade in
      gsap.utils.toArray<HTMLElement>('.gsap-rotate-in').forEach((el) => {
        gsap.fromTo(
          el,
          { rotation: -10, opacity: 0, scale: 0.9 },
          {
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])
}

// Hook for magnetic button effect
export function useMagneticEffect(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(element, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref])
}

// Hook for text scramble effect
export function useTextScramble(ref: React.RefObject<HTMLElement | null>, text: string) {
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const chars = '!<>-_\\/[]{}—=+*^?#________'
    let frame = 0
    let frameRequest: number

    const scramble = () => {
      let output = ''
      const progress = frame / 20

      for (let i = 0; i < text.length; i++) {
        if (i < Math.floor(progress * text.length)) {
          output += text[i]
        } else {
          output += chars[Math.floor(Math.random() * chars.length)]
        }
      }

      element.textContent = output

      if (frame < 20) {
        frame++
        frameRequest = requestAnimationFrame(scramble)
      }
    }

    // Start scramble when element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          frame = 0
          scramble()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)

    return () => {
      cancelAnimationFrame(frameRequest)
      observer.disconnect()
    }
  }, [ref, text])
}
