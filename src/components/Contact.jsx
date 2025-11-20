import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { postContact } from '../lib/api'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError('')
    try {
      await postContact(form)
      setSuccess(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_300px_at_0%_20%,rgba(37,99,235,0.12),transparent),radial-gradient(700px_300px_at_100%_80%,rgba(14,165,233,0.1),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <SectionHeader
            align="center"
            eyebrow="Contact"
            title="Let's build something great"
            subtitle="Tell me about your project, timeline, and goals."
          />
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-600 outline-none" placeholder="Your name" required />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-600 outline-none" placeholder="you@example.com" required />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-slate-300">Project details</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows="5" className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-600 outline-none" placeholder="What are you building?" required />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-slate-400 text-sm">I'll get back to you within 24 hours.</p>
            <div className="flex items-center gap-3">
              {success && <span className="text-emerald-400 text-sm">Message sent! ✅</span>}
              {error && <span className="text-rose-400 text-sm">{error}</span>}
              <button disabled={loading} className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow-[0_8px_30px_rgb(59,130,246,0.35)] hover:shadow-[0_8px_40px_rgb(59,130,246,0.55)] transition-all hover:translate-y-[-1px] disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
