import React, { lazy, Suspense } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const Spline = lazy(() => import('@splinetool/react-spline'))

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const yAurora = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -120])
  const yBeams = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -80])

  return (
    <section id="home" className="relative min-h-[100vh] w-full overflow-hidden">
      {/* Deep background 3D scene (lazy-loaded, respects reduced motion) */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 -z-40">
          <Suspense fallback={<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />}> 
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </Suspense>
        </div>
      )}

      {/* Aurora gradients with subtle parallax */}
      <motion.div style={{ y: yAurora }} aria-hidden className="pointer-events-none absolute inset-0 -z-30 mix-blend-screen">
        <div className="absolute -left-24 top-[-10%] h-[60vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.35),rgba(59,130,246,0.18),transparent)] blur-3xl opacity-60" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[55vh] w-[55vw] rounded-full bg-[radial-gradient(closest-side,rgba(14,165,233,0.28),rgba(14,165,233,0.14),transparent)] blur-3xl opacity-60" />
        <motion.div
          initial={{ opacity: 0.4, rotate: 0 }}
          animate={{ opacity: 0.7, rotate: shouldReduceMotion ? 0 : 8 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute left-1/4 top-1/3 h-[45vh] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.25),rgba(59,130,246,0.22),rgba(14,165,233,0.18),transparent_70%)] blur-2xl opacity-70"
        />
      </motion.div>

      {/* Soft parallax light beams */}
      <motion.div style={{ y: yBeams }} aria-hidden className="pointer-events-none absolute inset-x-0 top-[22%] -z-20">
        <motion.div
          initial={{ x: '-15%' }}
          animate={{ x: shouldReduceMotion ? '-15%' : '15%' }}
          transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="mx-auto h-28 max-w-7xl rounded-full bg-gradient-to-r from-blue-500/15 via-cyan-400/10 to-transparent blur-2xl"
        />
      </motion.div>

      {/* Decorative grid with edge fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)',
          backgroundSize: '48px 48px, 48px 48px',
          WebkitMaskImage: 'radial-gradient(70% 60% at 50% 40%, black 60%, transparent 100%)',
          maskImage: 'radial-gradient(70% 60% at 50% 40%, black 60%, transparent 100%)',
        }}
      />

      {/* Gradient scrims for readability */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(2,6,23,0.18),_rgba(2,6,23,0.92))]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-blue-300 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            AVAILABLE FOR FREELANCE
          </motion.p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Building immersive, high-performance digital experiences
          </h1>
          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
            I craft premium, responsive interfaces with motion, depth, and a focus on performance. Explore my work and let's build something remarkable together.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow-[0_8px_30px_rgb(59,130,246,0.35)] hover:shadow-[0_8px_40px_rgb(59,130,246,0.55)] transition-all hover:translate-y-[-1px]">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-3 text-slate-200 hover:bg-slate-900 hover:border-slate-600 transition-colors">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle twinkling stars for extra depth */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.7), transparent), radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 70% 30%, rgba(255,255,255,0.55), transparent), radial-gradient(1px 1px at 85% 60%, rgba(255,255,255,0.65), transparent)',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Floating glow orbs */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="pointer-events-none absolute -left-10 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="pointer-events-none absolute right-0 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
    </section>
  )
}
