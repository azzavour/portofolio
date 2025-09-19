// tailwind.config.ts
import type { Config } from "tailwindcss"; // <-- Perbaikan ada di baris ini

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        background: "#0a0a0a",
        primary: "#fafafa",
        secondary: "#888888",
        accent: {
          DEFAULT: "#7c3aed", // Ungu
          hover: "#6d28d9",
        },
        border: "rgba(250, 250, 250, 0.1)",
        card: "#121212",
      },
      animation: {
        "gradient-bg": "gradient-bg 15s ease infinite",
      },
      keyframes: {
        "gradient-bg": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;