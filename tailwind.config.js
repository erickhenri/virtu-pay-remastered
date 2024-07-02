/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'woman-happy': 'url(/woman-happy.png)',
        mash: 'url(/mash.png)',
        footer: 'url(/footer.png)',
        'man-phone': 'url(/man-phone.png)',
        'celular-mockup': 'url(/celular-mockup.png)',
      },
      colors: {
        red: {
          500: '#BE0506',
          600: '#850304',
          900: '#4C0202',
        },
        blue: {
          600: '#0046CC',
          700: '#002366',
        },
        gray: {
          100: '#E5E5E5',
          300: '#7F7F7F',
        },
        green: {
          500: '#05BE3F',
          700: '#02581D',
        },
      },
    },
  },
  plugins: [],
}
