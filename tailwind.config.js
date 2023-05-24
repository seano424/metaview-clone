/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      light: '#f9f7f2',
      dark: '#0d0c0d',
      blue: '#0f33fe',
      green: '#4cff99',
    },
  },
  plugins: [],
}
