import { type Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/static/patterns/hero-pattern.png')",
      }
    }
  },
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",

  ],
} satisfies Config;
