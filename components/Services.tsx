'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { X, ArrowRight } from 'lucide-react'

type Service = {
  title: string
  description: string
  detail: string
  bullets: string[]
  image: string
  overlayImage: string
}

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'High-performance sites and apps built with Next.js, React, and TypeScript.',
    detail: 'I build fast, scalable, and accessible websites and web applications from the ground up. Every project is architected for performance — optimised load times, clean code, and seamless user experiences across all devices and browsers.',
    bullets: [
      'Custom Next.js & React applications',
      'REST & GraphQL API integration',
      'Authentication, payments & third-party APIs',
      'SEO-friendly server-side rendering',
      'Performance audits & Core Web Vitals optimisation',
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    overlayImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
  },
  {
    title: 'UI / UX Design',
    description: 'User-centered interfaces that balance aesthetics, function, and conversion.',
    detail: 'Great design is more than aesthetics — it\'s a strategy. I craft intuitive interfaces grounded in user research and data, ensuring every interaction feels effortless while driving measurable business outcomes.',
    bullets: [
      'Wireframing & interactive prototyping',
      'Design systems & component libraries',
      'User journey mapping & usability testing',
      'Figma-to-code pixel-perfect delivery',
      'Accessibility (WCAG) compliance',
    ],
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80',
    overlayImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80',
  },
  {
    title: 'Mobile App',
    description: 'Cross-platform mobile applications delivering seamless iOS and Android experiences.',
    detail: 'Using React Native, I build cross-platform mobile apps that look and feel native on both iOS and Android — sharing a single codebase without compromising on performance or user experience.',
    bullets: [
      'React Native cross-platform development',
      'iOS & Android app store publishing',
      'Offline-first & push notifications',
      'Native device API integration',
      'App performance profiling & optimisation',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    overlayImage: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&q=80',
  },
  {
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies that boost rankings, drive traffic, and grow revenue.',
    detail: 'I implement technical and content SEO strategies that get your site found. From structured data and Core Web Vitals to keyword strategy and link architecture — I help you rank higher and convert more.',
    bullets: [
      'Technical SEO audits & fixes',
      'Core Web Vitals & page speed optimisation',
      'Structured data & schema markup',
      'Keyword research & on-page optimisation',
      'Google Search Console & Analytics setup',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    overlayImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    title: 'Brand Identity',
    description: 'Complete brand systems — from logo to visual guidelines — built to last.',
    detail: 'Your brand is your first impression. I create cohesive visual identities that communicate your values, build trust, and stand out in a crowded market — from logo design to full brand guidelines.',
    bullets: [
      'Logo design & brand mark creation',
      'Typography & colour palette systems',
      'Brand guidelines & style documentation',
      'Social media & marketing asset design',
      'Brand refresh & identity evolution',
    ],
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80',
    overlayImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80',
  },
  {
    title: 'E-Commerce',
    description: 'End-to-end online stores with optimised checkout flows and secure payment integration.',
    detail: 'I build e-commerce experiences that convert browsers into buyers. From product catalogues and inventory management to checkout optimisation and payment gateways — I deliver stores that are fast, secure, and built to scale.',
    bullets: [
      'Custom Shopify & WooCommerce builds',
      'Stripe, PayPal & payment gateway integration',
      'Product management & inventory systems',
      'Cart abandonment & conversion optimisation',
      'Order tracking & customer dashboards',
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    overlayImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<Service | null>(null)

  return (
    <>
      <section id="services" className="py-24 lg:py-36 px-6 lg:px-14 bg-dark">
        <div className="max-w-7xl mx-auto" ref={ref}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="section-tag mb-4 justify-center">What I Do</div>
            <h2 className="font-lora font-bold text-4xl sm:text-5xl lg:text-6xl text-cream tracking-tight mb-4">
              How Can I Help?
            </h2>
            <p className="text-cream-dim text-lg font-dm font-light">
              Let&apos;s turn your vision into something extraordinary.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(service)}
                className="group relative bg-dark-2 border border-green/10 rounded-3xl p-6 flex flex-col h-[320px] transition-all duration-300 hover:border-green/30 hover:bg-dark-3 overflow-hidden cursor-pointer"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(162,242,75,0.06) 0%, transparent 70%)' }}
                />

                {/* Stacked images */}
                <div className="relative flex-grow flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute w-44 h-auto rounded-xl shadow-lg object-cover -rotate-6 transition-all duration-500 group-hover:-rotate-[10deg] group-hover:scale-105"
                    loading="lazy"
                  />
                  <img
                    src={service.overlayImage}
                    alt={service.title}
                    className="absolute w-44 h-auto rounded-xl shadow-xl object-cover rotate-3 transition-all duration-500 group-hover:rotate-[6deg] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Footer */}
                <div className="relative z-10 flex items-end justify-between mt-auto pt-4 border-t border-green/10">
                  <div>
                    <h3 className="font-lora font-semibold text-cream text-lg leading-tight group-hover:text-green transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-cream-dim text-xs font-dm mt-1 leading-relaxed max-w-[220px]">
                      {service.description}
                    </p>
                  </div>
                  <span className="text-green text-xl opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 shrink-0 ml-3">
                    →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <>
            {/* Backdrop + centering wrapper */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-dark/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setActive(null)}
            >
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl my-auto bg-dark-2 border border-green/20 rounded-3xl overflow-hidden shadow-2xl shadow-green/5"
            >
              {/* Image strip */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={active.overlayImage}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/40 to-dark-2" />

                {/* Close button */}
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-dark/70 border border-green/20 rounded-full flex items-center justify-center text-cream hover:text-green hover:border-green/50 transition-all backdrop-blur-sm"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-6">
                  <p className="text-green text-xs font-syne font-semibold uppercase tracking-widest mb-1">Service</p>
                  <h3 className="font-lora font-bold text-2xl text-cream">{active.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <p className="text-cream-dim text-sm leading-relaxed mb-6 font-dm">
                  {active.detail}
                </p>

                <div className="mb-8">
                  <p className="text-cream font-syne font-semibold text-xs uppercase tracking-widest mb-4">
                    What&apos;s included
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {active.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-cream-dim font-dm">
                        <span className="text-green mt-0.5 shrink-0">✦</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  onClick={() => setActive(null)}
                  className="inline-flex items-center gap-3 bg-green text-dark px-6 py-3 font-syne font-bold text-xs uppercase tracking-wider hover:bg-cream transition-all group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
