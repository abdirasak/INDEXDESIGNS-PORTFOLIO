'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ProjectCard } from '@/components/ui/project-card'
import { ProjectModal, type ProjectModalData, type ProjectCategory } from '@/components/ui/project-modal'

const projects: ProjectModalData[] = [
  {
    imgSrc: '/projects/portfolio_image-01.png',
    title: 'Adeegso',
    description:
      'A cross-platform marketplace app where users can buy and sell goods with ease. Built with a clean, intuitive UI, real-time listings, user profiles, in-app messaging, and secure authentication — all powered by Appwrite as the backend-as-a-service layer.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Appwrite'],
    category: 'Mobile App',
    githubLink: 'https://github.com/YOUR_USERNAME/adeegso',
  },
  {
    imgSrc: '/projects/portfolio_image_03.png',
    title: 'EduGlobe',
    description:
      'A fully custom WordPress education website for an international study-abroad consultancy. Features course listings, country guides, application forms, client testimonials, and a multilingual-ready layout built for conversion.',
    tags: ['WordPress', 'PHP', 'CSS', 'Elementor'],
    category: 'Web Development',
    githubLink: 'https://eduglobe.co.uk/',
    linkLabel: 'Visit Site',
  },
  {
    imgSrc: '/projects/portfolio_image_04.png',
    title: 'EMAAR Construction',
    description:
      'Welcome to EMAAR Construction and Real Estate, a dynamic design and build company that has been shaping the skyline of Somalia for the past three years. Established by a team of Innovative Founders, our company is driven by a passion for excellence in construction and a commitment to transforming visionary ideas into reality.',
    tags: ['WordPress', 'Elementor', 'PHP', 'CSS'],
    category: 'Web Development',
    githubLink: 'https://www.emaar.so/',
    linkLabel: 'Visit Site',
  },
  {
    imgSrc: '/projects/portfolio_image_05.png',
    title: 'Moon Construction',
    description:
      'A professional WordPress website for Moon Construction, a construction company based in Somalia. Features company services, project showcases, and a clean corporate layout designed to build trust and drive client inquiries.',
    tags: ['WordPress', 'Elementor', 'PHP', 'CSS'],
    category: 'Web Development',
    githubLink: 'https://moonconstruction.so/',
    linkLabel: 'Visit Site',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    title: 'Pulse Finance',
    description:
      'A beautifully designed personal finance app with budgeting tools, investment tracking, and biometric auth.',
    tags: ['React Native', 'Expo', 'Plaid'],
    category: 'Mobile App',
    githubLink: '#',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=800&q=80',
    title: 'Orbit SaaS',
    description:
      'A scalable B2B SaaS platform with role-based access, team collaboration tools, and custom onboarding flows.',
    tags: ['TypeScript', 'PostgreSQL', 'Redis'],
    category: 'Web Development',
    githubLink: '#',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    title: 'Nova Mobile App',
    description:
      'A cross-platform productivity app with offline-first sync, push notifications, and a clean minimalist UI.',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    category: 'Mobile App',
    githubLink: '#',
  },
]

const TABS: { label: string; value: ProjectCategory | 'All' }[] = [
  { label: 'All', value: 'All' },
  { label: 'Web Development', value: 'Web Development' },
  { label: 'Ecommerce', value: 'Ecommerce' },
  { label: 'Mobile App', value: 'Mobile App' },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeProject, setActiveProject] = useState<ProjectModalData | null>(null)
  const [activeTab, setActiveTab] = useState<ProjectCategory | 'All'>('All')

  const filtered = (activeTab === 'All' ? projects : projects.filter((p) => p.category === activeTab)).slice(0, 6)

  return (
    <>
      <section id="projects" className="py-24 lg:py-36 px-6 lg:px-14 bg-dark">
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
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

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                suppressHydrationWarning
                className={`relative px-5 py-2 rounded-full text-sm font-syne font-semibold transition-all duration-300 ${
                  activeTab === tab.value
                    ? 'text-dark'
                    : 'text-cream/50 border border-green/15 hover:text-cream/80 hover:border-green/30'
                }`}
              >
                {activeTab === tab.value && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-green"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    suppressHydrationWarning
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Project cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait" initial={false}>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                  suppressHydrationWarning
                >
                  <ProjectCard
                    imgSrc={project.imgSrc}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    link={project.githubLink ?? '#'}
                    linkText={project.linkLabel ?? 'View on GitHub'}
                    onClick={() => setActiveProject(project)}
                    className="h-full"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}
