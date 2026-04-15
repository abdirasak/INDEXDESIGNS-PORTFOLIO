'use client'

import { motion } from 'motion/react'
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1'

const testimonials = [
  {
    text: "Index Designs transformed our digital presence completely. The website they built drove a 3× increase in conversions within the first month.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Mitchell",
    role: "CEO, TechFlow Solutions",
  },
  {
    text: "Working with Index was effortless. They understood our brand instantly and delivered a product that exceeded every expectation.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "James Rodriguez",
    role: "Founder, Lumina Collective",
  },
  {
    text: "The attention to detail is extraordinary. Every interaction on our new site feels intentional and polished.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Emma Chen",
    role: "CTO, NexaStart",
  },
  {
    text: "They delivered our e-commerce platform two weeks ahead of schedule. Revenue grew 40% in the quarter after launch.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Hassan",
    role: "CEO, Bloom Retail",
  },
  {
    text: "Our SaaS dashboard went from clunky to world-class. Users love the new interface and churn dropped significantly.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Priya Sharma",
    role: "Product Manager, Nexus Analytics",
  },
  {
    text: "Index Designs doesn't just build websites — they craft experiences. The quality of work is simply unmatched.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Lucas Weber",
    role: "Creative Director, Studio Arc",
  },
  {
    text: "From discovery to deployment, the process was smooth and transparent. We felt like true partners throughout.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Alicia Torres",
    role: "Marketing Director, Pulse Brand",
  },
  {
    text: "The mobile app they built for us has a 4.9-star rating. Users constantly compliment how smooth and beautiful it is.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Daniel Kim",
    role: "CTO, Finflow App",
  },
  {
    text: "Best investment we made this year. The site redesign paid for itself in increased leads within 6 weeks.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Amara Diallo",
    role: "Head of Growth, CloudBase",
  },
]

const firstColumn  = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn  = testimonials.slice(6, 9)

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-36 bg-dark-2 border-y border-green/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-xl mx-auto mb-14"
        >
          <div className="section-tag mb-4 justify-center">Client Voices</div>
          <h2 className="font-lora font-bold text-4xl lg:text-5xl text-cream leading-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-cream-dim text-sm lg:text-base leading-relaxed">
            Don&apos;t take our word for it — hear directly from the brands we&apos;ve helped grow.
          </p>
        </motion.div>

        {/* Scrolling columns */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn}  duration={18} />
          <TestimonialsColumn testimonials={secondColumn} duration={23} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn}  duration={20} className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
