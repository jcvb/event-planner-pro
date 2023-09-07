import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'epp-primary': '#1D04BF',
      'epp-secondary': '#04D9D9',
      'epp-accent': '#CEE1F2',
      'epp-primary-light': '#2E34A6',
      'epp-primary-dark': '#15038C',
      'epp-gray': '#cccccc'
    },
  },
  plugins: [],
}
export default config
