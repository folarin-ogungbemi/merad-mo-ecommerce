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
          pry_text:'var(--pry-col)',
          sec_text:'var(--sec-col)',
          links:'var(--links)',
          links_hover:'var(--links-hover)',
          text_col:'var(--text-col)',
          text_col_hover:'var(--text-col-hover)',
          button_text:'var(--button-text-col)',
          button_text_hover:'var(--button-text-col-hover)',
          button_bg:'var(--button-bg-col)',
          button_bg_hover:'var(--button-bg-col-hover)',
        }
    },
      borderColor:{
        skin:{
          section_divide:'var(--section-divide)'
        }
      },
      backgroundColor:{
        skin:{
          auto_bg:'var(--auto-col)',
          button_bg:'var(--button-bg-col)',
          button_bg_hover:'var(--button-bg-col-hover)',
          pry_bg:'var(--pry-col)',
          sec_bg:'var(--sec-col)',
          
        }
    },
  },
},
  plugins: [],
}
