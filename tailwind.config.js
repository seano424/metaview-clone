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
    debugScreens: {
      position: ['bottom', 'right'],
      style: {
        backgroundColor: '#262626e6',
        borderRadius: '4px',
        boxShadow: 'none',
        color: 'white',
        padding: '8px',
        margin: '18px 16px',
        opacity: '100%',
      },
    },
    container: {
      center: true,
      padding: '3.5rem',
    }
  },
  plugins: [require('tailwindcss-debug-screens')],
}
