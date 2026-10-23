/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        coffee: {
          50: '#f8f2ec', 100: '#eee1d4', 200: '#ddc3a8', 300: '#c79d76',
          400: '#ae7b52', 500: '#94613c', 600: '#75492e', 700: '#5c3927',
          800: '#3d2920', 900: '#251c18', 950: '#171412'
        }
      },
      boxShadow: { soft: '0 10px 30px rgba(33, 24, 19, .06)' }
    },
  },
  plugins: [],
}