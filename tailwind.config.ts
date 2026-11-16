import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { cream: "#ECE5DB", ink: "#0B0B0B", amber: "#E0A060" },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "1152px" },
    },
  },
  plugins: [],
};
export default config;
