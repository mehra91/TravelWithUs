/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1F3D2B',
          light: '#2E5A3D',
        },
        gold: {
          DEFAULT: '#D9A73B',
          soft: '#F1E2B8',
        },
        cream: '#FAF6EC',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        cursive: ['Pacifico', 'cursive'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
