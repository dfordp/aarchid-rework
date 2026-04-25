import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      Lufga: ['Lufga', 'sans-serif'],
      sans: ['Lufga', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
export default config
