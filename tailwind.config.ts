
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-bg': '#f0f0f0',
        'neo-primary': '#ff6b6b',
        'neo-secondary': '#4ecdc4',
        'neo-accent': '#feca57',
        'neo-text': '#2d3436',
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

