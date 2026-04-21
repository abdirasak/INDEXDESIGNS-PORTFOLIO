'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const contactInfo = [
  {
    label: 'Email',
    value: 'info@indexdesigns.co.uk',
    href: 'mailto:info@indexdesigns.co.uk',
  },
  {
    label: 'Phone',
    value: '+44 7520 672900',
    href: 'tel:+447520672900',
  },
  {
    label: 'Location',
    value: 'Leicester, UK — Remote Worldwide',
    href: '#',
  },
]

const inputClass =
  'w-full bg-dark border border-green/15 text-cream placeholder:text-cream-dim/40 px-4 py-3.5 font-dm text-sm transition-colors focus:border-green/50 focus:outline-none'

const services = [
  'Web Development',
  'UI / UX Design',
  'Mobile App',
  'SEO Optimization',
  'Brand Identity',
  'E-Commerce',
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: false, margin: '0px' })
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-36 px-6 lg:px-14 grid-bg">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">
          {/* Left — info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="section-tag mb-4"
            >
              Get In Touch
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.85 }}
              className="font-lora font-bold text-4xl lg:text-5xl xl:text-6xl text-cream leading-tight mb-6"
            >
              Let&apos;s Build Something{' '}
              <span className="text-green">Amazing</span> Together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-cream-dim leading-relaxed text-sm lg:text-base mb-12"
            >
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how I
              can help bring your vision to life — from concept to launch.
            </motion.p>

            {/* Contact details */}
            <div className="flex flex-col gap-6 mb-12">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.22 + i * 0.08 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 border border-green/20 flex items-center justify-center shrink-0 group-hover:border-green/50 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-green/50 group-hover:bg-green transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-cream-dim font-syne tracking-[0.25em] uppercase mb-0.5">
                      {item.label}
                    </div>
                    <a
                      href={item.href}
                      className="text-cream font-syne text-base hover:text-green transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right — form + go to top */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {sent ? (
              <div className="h-full flex flex-col items-start justify-center gap-6 py-12">
                <div className="w-16 h-16 bg-green flex items-center justify-center text-dark text-2xl font-bebas">
                  ✓
                </div>
                <h3 className="font-lora font-bold text-3xl text-cream">Message Sent!</h3>
                <p className="text-cream-dim leading-relaxed max-w-sm">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours to
                  discuss your project.
                </p>
                <button
                  onClick={() => setSent(false)}
                  suppressHydrationWarning
                  className="font-syne font-bold text-xs uppercase tracking-widest text-green border border-green/30 px-6 py-3 hover:bg-green hover:text-dark transition-all"
                >
                  Send Another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] font-syne text-cream-dim tracking-[0.25em] uppercase block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className={inputClass}
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-syne text-cream-dim tracking-[0.25em] uppercase block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      className={inputClass}
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="text-[10px] font-syne text-cream-dim tracking-[0.25em] uppercase block mb-2">
                    Service Required
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputClass}
                    suppressHydrationWarning
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="text-[10px] font-syne text-cream-dim tracking-[0.25em] uppercase block mb-2">
                    Project Budget
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className={inputClass}
                    suppressHydrationWarning
                  >
                    <option value="">Select a budget range</option>
                    <option value="5k-10k">$5,000 – $10,000</option>
                    <option value="10k-25k">$10,000 – $25,000</option>
                    <option value="25k-50k">$25,000 – $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] font-syne text-cream-dim tracking-[0.25em] uppercase block mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project, goals, and timeline..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  suppressHydrationWarning
                  className="w-full bg-green text-dark font-syne font-bold py-4 text-sm uppercase tracking-wider hover:bg-cream transition-all group flex items-center justify-center gap-3"
                >
                  Send Message
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Go to top — visible only when contact section is in view */}
      <AnimatePresence>
        {sectionInView && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3 }}
            type="button"
            suppressHydrationWarning
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-20 right-8 z-50 w-12 h-12 rounded-full bg-green flex items-center justify-center shadow-lg shadow-green/30 hover:bg-cream hover:scale-110 transition-colors duration-300 group"
          >
            <ArrowUp className="w-5 h-5 text-dark group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  )
}
