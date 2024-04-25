import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "wiggle-right": {
          "0% 100%": { transform: "rotate(-50deg)" },
          "50%": { transform: "rotate(50deg)" },
        },
        "wiggle-left": {
          "0% 100%": { transform: "rotate(50deg)" },
          "50%": { transform: "rotate(-50deg)" },
        },
      },
      animation: {
        "wiggle-right": "wiggle-right 0.2s ease-in-out",
        "wiggle-left": "wiggle-left 0.2s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
  darkMode: "selector",
};
export default config;
