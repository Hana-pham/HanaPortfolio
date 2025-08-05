// tailwind.config.ts
// This is 
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        "cream": "#FFF9F0",
        "dark-pink": "#F6A6B2",
        "light-pink": "#FBE4E4",
        "matcha": "#ACC8A0",
        "dark-grey": "#3F3F3F",
        "light-grey": "#7D6F71"
      },
      fontFamily: {
        body: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-cormorant)', 'serif'],
      },
      backgroundImage: {
  'strawberry': 'linear-gradient(270deg, #FFF9F0, #FBE4E4, #F6A6B2)',
},
animation: {
  'gradient-flow': 'gradientFlow 6s ease infinite',
},
keyframes: {
  gradientFlow: {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
      },
    },
    },
  },
  plugins: [],
}
export default config
