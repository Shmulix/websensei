'use client'

import { motion } from 'framer-motion'
import { Heart, Code2, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 px-4 bg-ninja-black border-t border-ninja-purple/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-ninja-cyan" />
              <span className="text-lg font-bold">
                <span className="text-ninja-cyan">Samuel</span>
                <span className="text-white">.dev</span>
              </span>
              <span className="jp-char text-ninja-purple/50">忍</span>
            </div>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Crafté avec</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-ninja-red fill-ninja-red" />
            </motion.div>
            <span>et</span>
            <span className="text-ninja-cyan">Next.js</span>
            <span className="jp-char text-ninja-purple/30">愛</span>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-ninja-gray/50 rounded-lg border border-ninja-purple/20 text-gray-400 hover:text-ninja-cyan hover:border-ninja-cyan/50 transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-ninja-purple/10 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Samuel Perez. Tous droits réservés.
          </p>
          <p className="text-gray-700 text-xs mt-2 jp-char">
            コードの道を極める
          </p>
        </div>
      </div>
    </footer>
  )
}
