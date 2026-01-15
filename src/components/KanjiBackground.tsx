'use client'

import { motion } from 'framer-motion'

const kanjis = [
  '忍', '術', '道', '力', '気', '心', '武', '侍',
  '龍', '風', '火', '水', '雷', '影', '光', '刃',
  'コード', '開発', '技術', 'ウェブ'
]

export function KanjiBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.02]">
      <div className="absolute inset-0 flex flex-wrap content-start gap-16 p-8">
        {[...Array(100)].map((_, i) => (
          <motion.span
            key={i}
            className="jp-char text-4xl text-ninja-purple select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.02, duration: 0.5 }}
          >
            {kanjis[i % kanjis.length]}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
