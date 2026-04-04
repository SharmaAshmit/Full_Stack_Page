import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        brand: {
          blue: "#0ea5e9",
          darkblue: "#0369a1",
          navy: "#0c1f3f",
          steel: "#64748b",
          light: "#f0f9ff",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0c1f3f 0%, #1e40af 50%, #0ea5e9 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
        "card-gradient":
          "linear-gradient(135deg, rgba(14,165,233,0.1), rgba(30,64,175,0.05))",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        "glass-hover": "0 16px 48px 0 rgba(31, 38, 135, 0.25)",
        card: "0 4px 24px rgba(14, 165, 233, 0.12)",
        "card-hover": "0 12px 40px rgba(14, 165, 233, 0.25)",
        premium: "0 20px 60px rgba(30, 64, 175, 0.2)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
