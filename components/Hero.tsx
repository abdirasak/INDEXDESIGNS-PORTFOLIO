'use client'

import { motion } from 'framer-motion'
import { StarField } from '@/components/ui/starfield'


export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[680px] bg-dark overflow-hidden flex flex-col items-center justify-center"
    >

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute top-24 right-6 lg:right-14 z-20 flex items-center gap-2 bg-dark/70 border border-green/25 backdrop-blur-sm px-4 py-2 rounded-full"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
        <span className="text-xs font-syne font-semibold text-cream tracking-widest uppercase">
          Available for Projects
        </span>
      </motion.div>

      {/* ── Centre content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Agency tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="section-tag mb-6 justify-center"
        >
          Freelance Fullstack Developer
        </motion.div>

        {/* Heading — single line reveal */}
        <div className="overflow-hidden mb-5">
          <motion.div
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="whitespace-nowrap"
          >
            <span className="font-bebas text-[7.5vw] sm:text-[6.5vw] lg:text-[6vw] leading-[0.9] tracking-tight text-cream">
              WE BUILD{' '}
            </span>
            <span
              className="font-bebas text-[7.5vw] sm:text-[6.5vw] lg:text-[6vw] leading-[0.9] tracking-tight"
              style={{ WebkitTextStroke: '2px #A2F24B', color: 'transparent' }}
            >
              DIGITAL
            </span>
            <span className="font-bebas text-[7.5vw] sm:text-[6.5vw] lg:text-[6vw] leading-[0.9] tracking-tight text-cream">
              {' '}FUTURES.
            </span>
          </motion.div>
        </div>

        {/* ── Lower block: glow line on top, sparkles as bg, content above ── */}
        <div className="relative mt-2 w-[90vw] max-w-[860px]">

          {/* Glow line — sits at the very top of this block */}
          <div className="absolute inset-x-0 top-0 pointer-events-none">
            <div className="absolute left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-green/55 to-transparent blur-sm" />
            <div className="absolute left-1/2 -translate-x-1/2 w-3/4 h-px   bg-gradient-to-r from-transparent via-green/55 to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 w-1/4 h-[5px] bg-gradient-to-r from-transparent via-green    to-transparent blur-sm" />
            <div className="absolute left-1/2 -translate-x-1/2 w-1/4 h-px   bg-gradient-to-r from-transparent via-green    to-transparent" />
          </div>

          {/* Sparkles — absolute background layer */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{
              maskImage:
                'radial-gradient(ellipse 90% 100% at 50% 50%, black 40%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 90% 100% at 50% 50%, black 40%, transparent 100%)',
            }}
          >
            <StarField
              className="w-full h-full"
              color="#A2F24B"
              count={300}
            />
          </div>

          {/* Content — z-10 so it renders above the sparkles */}
          <div className="relative z-10 flex flex-col items-center text-center pt-8 pb-4 px-6">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-cream-dim text-sm lg:text-base leading-relaxed max-w-md mb-7"
            >
              A freelance fullstack developer crafting fast, beautiful digital experiences
              that drive real results and leave lasting impressions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-8"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-green text-dark px-7 py-3.5 font-syne font-bold text-xs uppercase tracking-wider hover:bg-cream transition-all group"
              >
                View Our Work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-cream/20 text-cream px-7 py-3.5 font-syne font-semibold text-xs uppercase tracking-wider hover:border-green hover:text-green transition-all"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex items-center gap-10 sm:gap-16 border-t border-green/10 pt-6"
            >
              {[
                ['50+', 'Projects'],
                ['5+', 'Years'],
                ['30+', 'Clients'],
              ].map(([num, label]) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="font-bebas text-3xl text-green leading-none">{num}</div>
                  <div className="text-[10px] text-cream-dim tracking-[0.25em] uppercase mt-1 font-syne">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-28 h-28 border-l border-b border-green/10 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-28 h-28 border-r border-t border-green/10 pointer-events-none z-10" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-green animate-pulse" />
        <span className="text-[10px] text-cream-dim tracking-[0.3em] uppercase font-syne">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
