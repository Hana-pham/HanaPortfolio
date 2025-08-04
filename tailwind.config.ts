// tailwind.config.ts
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
        "light-pink": "FBE4E4",
        "matcha": "#ACC8A0",
        "dark-grey": "3F3F3F",
        "light-grey": "7D6F71"
      },
      fontFamily: {
        body: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-cormorant)', 'serif'],
}

    },
  },
  plugins: [],
}
export default config
