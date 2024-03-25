/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: '#E5E3DC',
        dark: '#0E0B16',
        primary: '#4717F6',
        secondary: '#A239CA',
        default: '#E5E3DC'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
