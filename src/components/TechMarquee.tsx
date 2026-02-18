'use client'

const technologies = [
  'Next.js 14',
  'React',
  'TypeScript',
  'WordPress',
  'Node.js',
  'Tailwind CSS',
  'GSAP',
  'Framer Motion',
  'PostgreSQL',
  'Vercel',
  'Figma',
  'SEO',
  'Performance',
  'AI / LLM',
  'REST API',
  'GraphQL',
]

export function TechMarquee() {
  const items = [...technologies, ...technologies]

  return (
    <div className="relative overflow-hidden py-5 border-y border-ninja-purple/10 my-8">
      {/* Left fade */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-10 marquee-track">
        {items.map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-gray-500 hover:text-ninja-cyan transition-colors duration-300 select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ninja-purple/60 flex-shrink-0" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
