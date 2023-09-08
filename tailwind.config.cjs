/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        blurIn: {
          "0%": { filter: "blur(5px)" },
          "100%": { filter: "blur(0px)" },
        },
        blurOut: {
          "0%": { filter: "blur(0px)" },
          "100%": { filter: "blur(5px)" },
        },
      },
      animation: {
        blurIn: "blurIn 200ms linear forwards",
        blurOut: "blurOut 200ms linear forwards",
      },
      backgroundImage: (theme) => ({
        "gradient-accent":
          "linear-gradient(to left bottom, rgb(103, 232, 249), rgb(16, 185, 129), rgb(147, 197, 253))",
      }),
    },
  },
  plugins: [],
};
