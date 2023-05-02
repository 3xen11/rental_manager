/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/*.js", "./src/pages/*.html"],
  theme: {
    screens: {
      xs: "375px",
      xsm: "412px",
      ssm: "542px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
