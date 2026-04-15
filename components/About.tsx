'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { MonitorCog, Smartphone, AppWindow, SearchCheck, Palette, ShoppingCart } from 'lucide-react'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let startTime = 0
    const duration = 2200
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const services = [
  { icon: MonitorCog,   label: 'Website Development' },
  { icon: Smartphone,   label: 'App Development' },
  { icon: AppWindow,    label: 'Web Application' },
  { icon: SearchCheck,  label: 'SEO Optimization' },
  { icon: Palette,      label: 'UI / UX Design' },
  { icon: ShoppingCart, label: 'E-Commerce' },
]

const stats = [
  { value: 50,  suffix: '+', label: 'Completed Projects' },
  { value: 99,  suffix: '%', label: 'Client Satisfaction' },
  { value: 5,   suffix: '+', label: 'Years of Experience' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="py-24 lg:py-36 px-6 lg:px-14 bg-dark-2 border-y border-green/10"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-[30%_70%] gap-16 lg:gap-24 items-start">

          {/* ── Left: service list with timeline ── */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-green/15" />

            <div className="flex flex-col gap-10">
              {services.map((svc, i) => {
                const Icon = svc.icon
                return (
                  <motion.div
                    key={svc.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
                    className="flex items-center gap-6 pl-10 relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[13px] w-[11px] h-[11px] rounded-full bg-green/80 ring-4 ring-dark-2" />

                    {/* Icon box */}
                    <div className="shrink-0 w-14 h-14 border border-green/20 flex items-center justify-center bg-dark group-hover:border-green/50 transition-colors">
                      <Icon className="w-6 h-6 text-green/70" strokeWidth={1.5} />
                    </div>

                    {/* Label */}
                    <span className="font-syne font-semibold text-cream text-lg">
                      {svc.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* ── Right: heading + text + stats ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-tag mb-5"
            >
              About Me
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-lora font-bold text-4xl lg:text-5xl text-cream leading-tight mb-6"
            >
              About <span className="text-green">Me</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-cream-dim leading-relaxed text-sm lg:text-base mb-4"
            >
              I don&apos;t just write code; I build digital experiences that stick. With over five
              years of experience as a freelance fullstack developer, I&apos;ve mastered the art of
              bridging the gap between high-end aesthetics and hardcore engineering. To me, a website
              shouldn&apos;t just exist in a browser — it should be a carefully crafted tool that
              moves the needle for your business.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.26 }}
              className="text-cream font-syne font-semibold text-sm lg:text-base mb-3"
            >
              Why Partner With Me?
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-cream-dim leading-relaxed text-sm lg:text-base mb-5"
            >
              Whether you&apos;re an early-stage startup looking to disrupt the market or an
              established brand ready for a digital evolution, I help visionary clients turn
              &ldquo;what if&rdquo; into &ldquo;what&apos;s next.&rdquo;
            </motion.p>

            {/* Value props */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.36 }}
              className="flex flex-col gap-3 mb-8"
            >
              {[
                { label: 'Design-Led Engineering', body: 'Beautiful interfaces powered by bulletproof logic.' },
                { label: 'Performance-First Mindset', body: "If it isn't fast and functional, it isn't finished." },
                { label: 'Visionary Collaboration', body: "I don't just work for you; I partner with you to refine your digital presence." },
                { label: 'The Gold Standard', body: 'Every project I take on is driven by a commitment to 100% customer satisfaction. If you aren\'t thrilled with the final product, my job isn\'t done.' },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="text-green mt-1 shrink-0">✦</span>
                  <p className="text-cream-dim text-sm leading-relaxed">
                    <span className="text-cream font-syne font-semibold">{item.label}: </span>
                    {item.body}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.44 }}
              className="inline-flex items-center gap-3 font-syne font-bold text-sm uppercase tracking-wider text-green border border-green/30 px-6 py-3 hover:bg-green hover:text-dark transition-all group mb-10"
            >
              Let&apos;s Build Something Exceptional
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap gap-10 pt-8 border-t border-green/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <div className="font-bebas text-5xl leading-none text-cream">
                    <Counter target={stat.value} suffix="" />
                    <span className="text-green ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-cream-dim text-xs font-syne tracking-wider uppercase mt-2 max-w-[100px] leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
