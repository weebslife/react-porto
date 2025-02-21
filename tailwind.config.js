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
        'pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slideUp': 'slideUp 0.5s ease-in-out forwards',
        'fadeOut': 'fadeOut 0.3s ease-out forwards',
        'slideUpContent': 'slideUpContent 0.8s ease-out forwards',
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
      },
    },
  },
  plugins: [],
}