import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 全体的な背景色
        background: "hsl(var(--background))",

        // 全体的な文字色
        foreground: "hsl(var(--foreground))",

        // サブ的要素の背景色、文字色
        muted: {
          // 背景色
          DEFAULT: "hsl(var(--muted))",

          // 文字色
          foreground: "hsl(var(--muted-foreground))",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
