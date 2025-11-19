import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold text-white text-lg tracking-tight">Portfolio<span className="text-blue-400">.</span></a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <div className="h-6 w-px bg-slate-700" />
          <div className="flex items-center gap-4">
            <a href="mailto:hello@example.com" className="text-slate-300 hover:text-white"><Mail size={18} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Linkedin size={18} /></a>
          </div>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/90 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-200">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="mailto:hello@example.com" className="text-slate-300 hover:text-white"><Mail size={18} /></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Github size={18} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
