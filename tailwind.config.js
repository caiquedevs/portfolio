module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // false, class, media
  theme: {
    fontFamily: {
      poppins: ['poppins', 'sans-serif'],
      roboto: ['roboto', 'sans-serif'],
      roboto: ['archivo', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#0EE6B7',
        secondary: '#74DCFF',
      },
      fontSize: {
        '2.5xl': '1.7rem',
        '100px': '100px',
        '45px': '45px',
        '41px': '41px',
      },
      letterSpacing: {
        full: '0.67em',
        min: '0.01em',
      },
      gridTemplateColumns: {},
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      minWidth: {
        '400px': '400px',
      },
    },
  },
  plugins: [],
};
