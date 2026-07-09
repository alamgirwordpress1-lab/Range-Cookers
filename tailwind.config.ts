import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ── Pure black & white brand palette ──────────────────────────
        // Built from #FFFFFF and #000000 only, with an achromatic grey
        // ramp for hairlines and muted text. Legacy token names are kept
        // and remapped to greyscale so the whole page flips in one place.
        white: "#FFFFFF",
        black: "#000000",

        // surfaces
        cream: "#FFFFFF", // cards / primary surface
        porcelain: "#FFFFFF", // page background
        linen: "#F5F5F5", // subtle alternate panel
        sand: "#E6E6E6", // hairline borders
        taupe: "#D6D6D6",
        clay: "#8A8A8A",

        // text ramp
        stone: {
          500: "#7A7A7A",
          600: "#565656",
          700: "#3A3A3A",
        },

        // ink / dark surfaces (all true black)
        ink: "#000000",
        espresso: "#000000",
        charcoal: "#000000",

        // accents — black on light, white on dark
        brass: {
          DEFAULT: "#000000",
          light: "#FFFFFF",
          dark: "#000000",
          soft: "#D6D6D6",
        },
        amber: {
          glow: "#FFFFFF",
        },

        // shadcn/ui token layer (drives dropped-in shadcn components)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        kicker: "0.22em",
      },
      // Full 0–100 opacity scale so every `/NN` colour modifier resolves.
      opacity: Object.fromEntries(
        Array.from({ length: 101 }, (_, i) => [i, String(i / 100)])
      ),
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -14px rgba(0,0,0,0.14)",
        lift: "0 2px 4px rgba(0,0,0,0.05), 0 26px 50px -22px rgba(0,0,0,0.28)",
        panel: "0 40px 90px -45px rgba(0,0,0,0.7)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.28s ease-out",
        "accordion-up": "accordion-up 0.28s ease-out",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 34s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
