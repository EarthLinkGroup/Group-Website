import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0b1d35",
        green: "#25845f",
        mist: "#f4f6fa",
      },
    },
  },
  plugins: [],
};

export default config;
