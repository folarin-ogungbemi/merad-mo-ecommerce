/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '100' },
      },
    },
    animation: {
      'bg-opacity': 'fade-in 1s ease-in-out', // This maps to the 'fade-in' keyframe
    },
      textColor:{
        skin:{
          text_col:'var(--text-col)',
          text_col_hover:'var(--text-col-hover)',
        }
    },
  },
},
  plugins: [],
}
