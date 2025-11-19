import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_-10%_10%,rgba(59,130,246,0.12),transparent),radial-gradient(800px_300px_at_110%_30%,rgba(56,189,248,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              I'm a front-end engineer focused on creating premium interfaces with delightful details. I blend motion, accessibility, and performance to deliver experiences that feel fast and alive across devices.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-slate-400">Experience</p>
                <p className="mt-1 text-white font-semibold">5+ years</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-slate-400">Focus</p>
                <p className="mt-1 text-white font-semibold">UI, Motion, WebGL</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-slate-400">Stack</p>
                <p className="mt-1 text-white font-semibold">React, Tailwind, Three</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
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
                    <div key={skill} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-slate-200">
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
