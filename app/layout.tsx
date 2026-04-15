import type { Metadata } from 'next'
import { Bebas_Neue, Syne, DM_Sans, Lora } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const dm = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Index Designs — Freelance Web Developer',
  description:
    'Freelance fullstack developer crafting fast, beautiful digital experiences that drive results and leave lasting impressions.',
  keywords: ['freelance developer', 'web development', 'web design', 'UI/UX', 'Next.js', 'TypeScript'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${syne.variable} ${dm.variable} ${lora.variable}`}>
      <body className="bg-dark text-cream font-dm antialiased">{children}</body>
    </html>
  )
}
