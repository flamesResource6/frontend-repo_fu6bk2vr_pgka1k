import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Neon Grid Experience',
    description: 'Interactive 3D grid with smooth camera motion and reactive shaders. Built for a fintech landing page.',
    tags: ['React', 'Three.js', 'GLSL', 'Spline'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'High-performance analytics dashboard with motion transitions and micro-interactions.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
  },
  {
    title: 'E-commerce Motion Kit',
    description: 'Premium storefront components with delightful animations and accessibility baked-in.',
    tags: ['React', 'Tailwind', 'ARIA'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_300px_at_0%_20%,rgba(37,99,235,0.15),transparent),radial-gradient(700px_300px_at_100%_80%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
          <a href="#contact" className="text-blue-400 hover:text-blue-300">Work with me</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-blue-600/40 hover:bg-slate-900/70"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-slate-400 text-sm">{p.description}</p>
                </div>
                <ExternalLink className="text-slate-500 group-hover:text-blue-400 transition-colors" size={18} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-slate-700 bg-slate-800/60 px-2 py-1 text-xs text-slate-300">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
