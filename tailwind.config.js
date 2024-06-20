/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#eff0f3",
        primary: "#ff8e3c",
        secondary: "#fffffe",
        tertiary: "#d9376e",
        notblack: "#2a2a2a",
        stroke: "#0d0d0d",
      },
      fontFamily: {
        telegraf: "telegraf",
        goodtimes: "goodtimes",
        varelaround: "varelaround",
        raleway: "raleway",
      },
    },
  },
  plugins: [],
};
