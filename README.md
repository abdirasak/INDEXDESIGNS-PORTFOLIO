# INDEXDESIGNS PORTFOLIO

A modern, animated portfolio site for **IndexDesigns** — a creative agency offering web development, UI/UX design, mobile apps, SEO, brand identity, and e-commerce solutions.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| 3D / Particles | Spline, tsParticles, Three.js |
| Icons | Lucide React |

---

## Features

- Animated hero section with starfield background
- Services showcase with interactive modals
- Skills, Projects, and Testimonials sections
- Contact section
- Fully responsive across all screen sizes
- Custom UI components: Spotlight, Sparkles, Laser Flow, Starfield

---

## Project Structure

```
app/
  layout.tsx          # Root layout and metadata
  page.tsx            # Main page — composes all sections
  globals.css         # Global styles and Tailwind directives

components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Services.tsx
  Skills.tsx
  Projects.tsx
  Testimonials.tsx
  Contact.tsx
  Footer.tsx
  ui/                 # Reusable UI primitives
    card.tsx
    laser-flow.tsx
    project-card.tsx
    sparkles.tsx
    splite.tsx
    spotlight.tsx
    starfield.tsx
    testimonials-columns-1.tsx

lib/
  utils.ts            # Utility helpers (cn, etc.)

public/
  logo-v2.png
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## Services

- **Web Development** — Next.js, React, TypeScript, REST & GraphQL APIs
- **UI / UX Design** — Wireframing, design systems, Figma-to-code
- **Mobile App** — Cross-platform mobile development
- **SEO Optimization** — Core Web Vitals, server-side rendering, audits
- **Brand Identity** — Logos, typography, visual identity systems
- **E-Commerce** — Online stores, payments, product management

---

## License

All rights reserved. &copy; IndexDesigns
