'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, Code2 } from 'lucide-react'

export type ProjectCategory = 'Web Development' | 'Ecommerce' | 'Mobile App'

export interface ProjectModalData {
  imgSrc: string
  title: string
  description: string
  tags: string[]
  category: ProjectCategory
  githubLink?: string
  liveLink?: string
  linkLabel?: string
}

interface ProjectModalProps {
  project: ProjectModalData | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-green/15 bg-dark-2 shadow-2xl shadow-black/60">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-green/20 bg-dark text-cream/60 transition-all hover:border-green/50 hover:text-green"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Image */}
              <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-syne font-semibold uppercase tracking-wider border border-green/20 text-green/70 px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="font-lora font-bold text-2xl lg:text-3xl text-cream mb-4">
                  {project.title}
                </h2>

                <p className="font-dm text-cream-dim text-sm leading-relaxed mb-7">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  {project.githubLink && project.githubLink !== '#' && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-green/30 bg-green/5 px-5 py-2.5 text-sm font-syne font-semibold text-green transition-all hover:bg-green/10 hover:border-green/60"
                    >
                      <Code2 className="h-4 w-4" />
                      {project.linkLabel ?? 'View on GitHub'}
                    </a>
                  )}
                  {project.liveLink && project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-cream/10 px-5 py-2.5 text-sm font-syne font-semibold text-cream/70 transition-all hover:border-cream/30 hover:text-cream"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
