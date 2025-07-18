// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cream-cloud": "#FFF9F0",
        "sakura": "#F5B7B1",
        "matcha": "#C7D8C3",
        "warm-sand": "#E7D8C9",
        "graphite-gray": "#3F3F3F",
        "plum-smoke": "#7D6F71",
      },
      fontFamily: {
        sans: ["'Lora'", "sans-serif"],
        heading: ["'Fraunces'", "serif"],
      },
    },
  },
  plugins: [],
}
export default config
