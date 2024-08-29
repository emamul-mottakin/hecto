/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom: {
          pink: "#FB2E86",
          red: "#FB2448",
          blue50: "#F1F0FF",
          blue100: "#3F509E",
          blue200: "#2F1AC4",
          blue300: "#151875",
          purple50: "#E0D3F5",
          purple100: "#7E33E0",
          offPurple: "#9F63B5",
          subText: "#8A8FB9",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
