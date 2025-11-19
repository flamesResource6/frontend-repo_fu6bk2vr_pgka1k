import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient scrim for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(2,6,23,0.2),_rgba(2,6,23,0.9))]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium tracking-wide text-blue-300">
            AVAILABLE FOR FREELANCE
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Building immersive, high-performance digital experiences
          </h1>
          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
            I craft premium, responsive interfaces with motion, depth, and a focus on performance. Explore my work and let's build something remarkable together.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-[0_8px_30px_rgb(59,130,246,0.35)] hover:shadow-[0_8px_40px_rgb(59,130,246,0.55)] transition-shadow">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3 text-slate-200 hover:bg-slate-900">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating glow orbs */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="pointer-events-none absolute -left-10 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="pointer-events-none absolute right-0 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
    </section>
  )
}
