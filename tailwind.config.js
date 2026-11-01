/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#123B66',
          royal: '#2563EB',
          royalDark: '#1D4ED8',
          bgLight: '#F4F8FC',
          accentLight: '#E8F1FC',
          primary: '#002548',
          primaryContainer: '#123b66',
          secondary: '#0051d5',
          secondaryContainer: '#316bf3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(18, 59, 102, 0.08), 0 1px 4px -1px rgba(18, 59, 102, 0.04)',
        'card-hover': '0 12px 24px -6px rgba(18, 59, 102, 0.12), 0 4px 8px -2px rgba(18, 59, 102, 0.06)',
      }
    },
  },
  plugins: [],
}

