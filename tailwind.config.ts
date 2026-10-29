import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "var(--bg-primary)",
          card: "var(--bg-card)",
          elevated: "var(--bg-elevated)",
          navy: "rgb(var(--brand-blue) / <alpha-value>)",
          primary: {
            DEFAULT: "#1A2842",
            hover: "#243656",
            active: "#131E33",
            subtle: "rgba(26, 40, 66, 0.25)",
          },
          accent: "var(--accent-blue)",
          cyan: "var(--accent-cyan)",
          text: "var(--text-primary)",
          muted: "var(--text-muted)",
          border: "var(--border-color)",
          "border-subtle": "var(--border-subtle)",
          "glow-blue": "var(--glow-blue)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(circle at 50% 0%, var(--glow-blue), transparent 70%)",
        "radial-accent": "radial-gradient(circle at 100% 50%, var(--border-subtle), transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
