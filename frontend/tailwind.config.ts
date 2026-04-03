import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#060816",
        surface: "#0c1330",
        border: "rgba(125, 211, 252, 0.16)",
        neon: {
          blue: "#38bdf8",
          purple: "#8b5cf6",
          cyan: "#22d3ee"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.16)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
