/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#18122B',
        'medium-dark-purple': '#393053',
        'medium-light-purple': '#443C68',
        'light-purple': '#635985',
        'light-blue': '#2C74B3',
        'medium-light-blue': '#205295',
        'medium-dark-purple': '#144272',
        'dark-blue': '#0A2647'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
