/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        monarch: {
          blue: {
            DEFAULT: '#003B95',
            50: '#F0F5FF',
            100: '#E0EBFF',
            200: '#BAD3FF',
            500: '#1D62DE',
            600: '#0B47B8',
            700: '#003B95',
            800: '#002E78',
            900: '#002054',
          },
          green: {
            DEFAULT: '#22A038',
            50: '#F0FBF2',
            100: '#DBF6DF',
            500: '#22A038',
            600: '#1B852E',
            700: '#146824',
          },
          orange: {
            DEFAULT: '#F26522',
            500: '#F26522',
            600: '#D94E0F',
          },
          dark: '#0F172A',
          muted: '#64748B',
          light: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        script: ['"Caveat"', 'cursive', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 59, 149, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(0, 59, 149, 0.15), 0 4px 12px -2px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
