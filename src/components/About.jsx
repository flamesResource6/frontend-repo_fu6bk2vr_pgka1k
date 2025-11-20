import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_400px_at_-10%_10%,rgba(59,130,246,0.12),transparent),radial-gradient(800px_300px_at_110%_30%,rgba(56,189,248,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="About"
          title="Turning ideas into polished, performant interfaces"
          subtitle="I blend motion, accessibility, and systems thinking to craft products that feel as good as they look."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <p className="text-slate-400">Experience</p>
                <p className="mt-1 text-white font-semibold">5+ years</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <p className="text-slate-400">Focus</p>
                <p className="mt-1 text-white font-semibold">UI, Motion, WebGL</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <p className="text-slate-400">Stack</p>
                <p className="mt-1 text-white font-semibold">React, Tailwind, Three</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <p className="text-slate-400">Location</p>
                <p className="mt-1 text-white font-semibold">Remote</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-1">
              <div className="rounded-2xl bg-slate-950 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {['React', 'Tailwind', 'Framer Motion', 'Three.js', 'Spline', 'Accessibility'].map((skill) => (
                    <div key={skill} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-slate-200 hover:border-blue-500/40 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
