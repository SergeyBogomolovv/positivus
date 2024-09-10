import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B9FF66",
        dark: "#191A23",
        gray: "#F3F3F3",
      },
    },
  },
  plugins: [],
};

export default config;
