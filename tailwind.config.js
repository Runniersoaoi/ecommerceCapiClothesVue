/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        popins: ['Popins', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
};
