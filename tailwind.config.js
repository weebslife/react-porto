/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#E3F2FD',
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-in-out forwards',
        fadeOut: 'fadeOut 0.3s ease-out forwards',
        slideUpContent: 'slideUpContent var(--animation-duration, 0.8s) ease-out forwards',
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        slideUpContent: {
          '0%': { 
            transform: 'translateY(20px)',
            opacity: 0 
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: 1 
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.pause-animation': {
          'animation-play-state': 'paused',
        }
      })
    }
  ],
}