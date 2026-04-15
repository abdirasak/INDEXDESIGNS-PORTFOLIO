import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D0D0D',
        'dark-2': '#141414',
        'dark-3': '#1E1E1E',
        green: '#A2F24B',
        cream: '#F5F0E8',
        'cream-dim': '#7A756E',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'cursive'],
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
        lora: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'marquee-rev': 'marqueeRev 35s linear infinite',
        float: 'float 5s ease-in-out infinite',
        spotlight: 'spotlight 2s ease 0.75s 1 forwards',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        marqueeRev: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
