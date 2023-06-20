/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bbaby: {
          dark: '#030303',
          brighter: '#1a1a1b',
          brightest: '#272729',
          border: '#323334',
          text_darker: '#818384',
        },
      },
    },
  },
  plugins: [],
}
