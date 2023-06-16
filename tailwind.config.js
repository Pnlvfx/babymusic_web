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
          orange: '#f54404',
          red: '#f54404',
          border: '#323334',
          text: '#d7dadc',
          text_darker: '#818384',
          hover: '#454546',
          blue: '#24A0ED',
        },
      },
    },
  },
  plugins: [],
}
