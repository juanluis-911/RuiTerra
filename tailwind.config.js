/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F2A44',
        'primary-hover': '#133657',
        secondary: '#1F7A4C',
        'secondary-hover': '#24915A',
        bg: '#F5F7FA',
        border: '#E5E7EB',
        'text-light': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '12px',
      },
    },
  },
  plugins: [],
}
