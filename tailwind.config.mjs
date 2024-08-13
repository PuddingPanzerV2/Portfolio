import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
        mono: ["Bebas Neue"],
      },
      fontSize: {
        xxs: "0.5rem",
        mega: ["14rem", "25rem"],
      },
    },
  },
  plugins: [],
};
