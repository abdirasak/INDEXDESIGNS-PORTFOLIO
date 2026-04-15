'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  radius: number
  opacity: number
  opacityDir: number
  opacitySpeed: number
}

interface StarFieldProps {
  className?: string
  color?: string
  count?: number
}

export function StarField({ className, color = '#A2F24B', count = 300 }: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId: number
    let particles: Particle[] = []

    // Parse hex color to r,g,b so we can set alpha separately
    const r = parseInt(color.slice(1, 3), 16)
    const g = parseInt(color.slice(3, 5), 16)
    const b = parseInt(color.slice(5, 7), 16)

    const setup = () => {
      const dpr = window.devicePixelRatio || 1
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        // Very small radii — matches the star-like dots in the reference
        radius: Math.random() * 0.6 + 0.2,
        opacity: Math.random(),
        opacityDir: Math.random() > 0.5 ? 1 : -1,
        opacitySpeed: Math.random() * 0.008 + 0.003,
      }))
    }

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        // Twinkle
        p.opacity += p.opacityDir * p.opacitySpeed
        if (p.opacity >= 1) { p.opacity = 1; p.opacityDir = -1 }
        if (p.opacity <= 0) { p.opacity = 0; p.opacityDir = 1 }

        ctx.beginPath()
        // ctx.arc guarantees a circle — no square fallback possible
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${p.opacity})`
        ctx.fill()
      }

      rafId = requestAnimationFrame(draw)
    }

    setup()
    draw()

    const ro = new ResizeObserver(setup)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [color, count])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  )
}
