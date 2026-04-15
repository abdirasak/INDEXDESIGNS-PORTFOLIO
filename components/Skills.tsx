'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const rows = [
  [
    { name: 'HTML',        icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS',         icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'JavaScript',  icon: 'https://skillicons.dev/icons?i=js' },
    { name: 'Figma',       icon: 'https://skillicons.dev/icons?i=figma' },
  ],
  [
    { name: 'React',        icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'React Native', icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'Next.js',      icon: 'https://skillicons.dev/icons?i=nextjs' },
    { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
  ],
  [
    { name: 'Express',  icon: 'https://skillicons.dev/icons?i=express' },
    { name: 'Node.js',  icon: 'https://skillicons.dev/icons?i=nodejs' },
    { name: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase' },
    { name: 'GitHub',   icon: 'https://skillicons.dev/icons?i=github' },
  ],
  [
    { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgres' },
    { name: 'MongoDB',    icon: 'https://skillicons.dev/icons?i=mongodb' },
    { name: 'WordPress',  icon: 'https://skillicons.dev/icons?i=wordpress' },
    { name: 'MySQL',      icon: 'https://skillicons.dev/icons?i=mysql' },
  ],
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 lg:py-36 bg-dark-2 border-y border-green/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-tag mb-4 justify-center">My Expertise</div>
          <h2 className="font-lora font-bold text-4xl lg:text-5xl text-cream mb-4">
            Skills &amp; <span className="text-green">Technologies</span>
          </h2>
          <p className="text-cream-dim text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
            I build full-stack digital products using a modern, battle-tested technology stack —
            from pixel-perfect frontends to scalable backends.
          </p>
        </motion.div>

        {/* Skills grid with vertical label */}
        <div className="flex gap-6 items-stretch">

          {/* Vertical "Skills" label */}
          <div className="hidden lg:flex items-center justify-center shrink-0">
            <div className="flex items-center gap-2" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              <div className="w-px h-16 bg-green/40" />
              <span className="font-bebas text-2xl tracking-[0.3em] text-green uppercase">Skills</span>
              <div className="w-px h-16 bg-green/40" />
            </div>
          </div>

          {/* Rows */}
          <div className="flex-1 flex flex-col gap-4">
            {rows.map((row, ri) => (
              <div key={ri} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {row.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: ri * 0.1 + si * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex flex-col items-center justify-center gap-4 bg-dark border border-green/10 rounded-xl p-6 hover:border-green/35 hover:bg-dark-3 transition-all duration-300 cursor-default"
                  >
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <span className="font-syne font-semibold text-xs text-cream-dim tracking-widest uppercase group-hover:text-green transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
