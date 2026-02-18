'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const dotX = useSpring(mouseX, { stiffness: 2000, damping: 80 })
  const dotY = useSpring(mouseY, { stiffness: 2000, damping: 80 })
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22 })
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22 })

  useEffect(() => {
    setMounted(true)

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setIsVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setIsHovering(
        !!t.closest('a, button, [role="button"], input, textarea, select, label')
      )
    }

    const onDown = () => setIsClicking(true)
    const onUp = () => setIsClicking(false)
    const onLeave = () => setIsVisible(false)
    const onEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block"
      aria-hidden="true"
    >
      {/* Outer ring — follows with spring delay */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: isHovering ? 52 : 32,
          height: isHovering ? 52 : 32,
          marginLeft: isHovering ? -26 : -16,
          marginTop: isHovering ? -26 : -16,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.72 : 1,
          borderColor: isHovering
            ? 'rgba(34,211,238,0.85)'
            : 'rgba(99,102,241,0.55)',
          backgroundColor: isHovering
            ? 'rgba(34,211,238,0.06)'
            : 'transparent',
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      />

      {/* Inner dot — snaps to cursor immediately */}
      <motion.div
        className="fixed top-0 left-0 rounded-full"
        style={{ x: dotX, y: dotY }}
        animate={{
          width: 5,
          height: 5,
          marginLeft: -2.5,
          marginTop: -2.5,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 2 : 1,
          backgroundColor: isHovering ? '#22d3ee' : '#6366f1',
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
}
