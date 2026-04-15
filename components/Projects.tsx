'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ProjectCard } from '@/components/ui/project-card'

const projects = [
  {
    imgSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    title: 'Lumina Store',
    description:
      'A high-performance luxury fashion e-commerce platform with advanced filtering, 3D product visualization, and seamless checkout.',
    link: '#',
    linkText: 'View Case Study',
    tags: ['Next.js', 'Shopify', 'Stripe'],
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    title: 'Nexus Dashboard',
    description:
      'A real-time analytics platform with interactive charts, AI-powered insights, and a modular widget system.',
    link: '#',
    linkText: 'View Case Study',
    tags: ['React', 'D3.js', 'Node.js'],
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    title: 'Bloom Creative',
    description:
      'An award-winning creative agency site with cinematic scroll animations, custom cursor, and a fully modular CMS.',
    link: '#',
    linkText: 'View Case Study',
    tags: ['Next.js', 'GSAP', 'Sanity'],
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    title: 'Pulse Finance',
    description:
      'A beautifully designed personal finance app with budgeting tools, investment tracking, and biometric auth.',
    link: '#',
    linkText: 'View Case Study',
    tags: ['React Native', 'Expo', 'Plaid'],
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=800&q=80',
    title: 'Orbit SaaS',
    description:
      'A scalable B2B SaaS platform with role-based access, team collaboration tools, and custom onboarding flows.',
    link: '#',
    linkText: 'View Case Study',
    tags: ['TypeScript', 'PostgreSQL', 'Redis'],
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    title: 'Nova Mobile App',
    description:
      'A cross-platform productivity app with offline-first sync, push notifications, and a clean minimalist UI.',
    link: '#',
    linkText: 'View Case Study',
    tags: ['React Native', 'TypeScript', 'Firebase'],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 lg:py-36 px-6 lg:px-14 bg-dark">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="section-tag mb-4"
            >
              My Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.85 }}
              className="font-lora font-bold text-4xl lg:text-5xl text-cream"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-syne font-bold text-green text-sm uppercase tracking-widest hover-line inline-flex items-center gap-2 shrink-0"
          >
            Start Your Project →
          </motion.a>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
