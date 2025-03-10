import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      lineClamp:{
        4:"4"
      }
    },
  },
  plugins: [typography],
} satisfies Config;
