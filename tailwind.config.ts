import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        traffic: ['"B_Traffic"', "sans-serif"],
        yekan: ['"BYekan"', "sans-serif"],
        aleo: ['"Aleo"', "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
