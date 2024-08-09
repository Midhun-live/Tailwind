/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#429cf5",
        primary_2: "#948b0d",
        secondary: {
          100: "#afbbc7",
          200: "#38414a",
        },
      },
      fontFamily: {
        body: "Gupter",
      },
    },
  },
  plugins: [],
};
