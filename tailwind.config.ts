import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      aktiv: ["aktiv-grotesk-extended", "ui-serif", "Georgia"],
      inter: ["Inter", "ui-sans-serif", "system-ui"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        "custom-red": {
          middle: "#FF003D",
          dark: "#660018",
        },
        "custom-grey": {
          lightest: "#A6A7B2",
          lighter: "#D4D6DC",
          light: "#494B5E",
          middle: "#1D1E26",
          dark: "#0F0F13",
        },
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        17: "repeat(17, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
      },
      boxShadow: {
        custom: "0px 16px 40px rgba(68, 238, 212, 0.3)",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-debug-screens")],
} satisfies Config;
