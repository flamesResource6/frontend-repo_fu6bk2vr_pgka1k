import { motion } from 'framer-motion'

export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(900px_400px_at_90%_10%,rgba(14,165,233,0.12),transparent),radial-gradient(1000px_500px_at_10%_20%,rgba(147,197,253,0.08),transparent)]" />

      {/* Slow moving beams */}
      <motion.div
        initial={{ x: '-20%' }}
        animate={{ x: '20%' }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute top-1/3 left-0 right-0 h-32"
      >
        <div className="mx-auto h-full max-w-7xl rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-transparent blur-2xl" />
      </motion.div>

      <motion.div
        initial={{ x: '15%' }}
        animate={{ x: '-15%' }}
        transition={{ duration: 22, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute bottom-20 left-0 right-0 h-24"
      >
        <div className="mx-auto h-full max-w-6xl rounded-full bg-gradient-to-r from-transparent via-blue-400/10 to-violet-500/10 blur-2xl" />
      </motion.div>

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
    </div>
  )
}
