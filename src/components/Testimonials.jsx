import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const testimonials = [
  {
    quote:
      "Delivered ahead of schedule with pixel-perfect quality. The motion work elevated our brand instantly.",
    name: "Ava Martinez",
    role: "Head of Product, FintechCo",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    quote:
      "The attention to detail and performance focus is rare. Our metrics improved across the board.",
    name: "Liam Chen",
    role: "CTO, AnalyticsOS",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    quote:
      "World-class animations with accessibility baked in. A partner we trust for mission-critical UI.",
    name: "Sophia Patel",
    role: "Design Lead, RetailXR",
    avatar: "https://i.pravatar.cc/100?img=25",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_300px_at_0%_20%,rgba(37,99,235,0.14),transparent),radial-gradient(700px_300px_at_100%_80%,rgba(14,165,233,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <SectionHeader
            align="center"
            eyebrow="Testimonials"
            title="Kind words from collaborators"
            subtitle="Results-focused partnerships with a premium finish."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur hover:border-blue-600/40 hover:bg-slate-900/70"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
              <blockquote className="text-slate-300 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.avatar} alt="" className="h-10 w-10 rounded-full ring-2 ring-slate-800 object-cover" />
                <div>
                  <div className="text-white font-medium">{t.name}</div>
                  <div className="text-slate-400 text-sm">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
