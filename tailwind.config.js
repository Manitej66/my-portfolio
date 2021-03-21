module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,svelte}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
