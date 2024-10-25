/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        alumni: ["Alumni Sans", "sans-serif"],
        monoton: ['Monoton', 'cursive'],
        orbitron: ["Orbitron", "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"],
        jersey: ["'Jersey 10'", "sans-serif"],
        jersey2: ["'Jersey 20'", "sans-serif"],
        rubik: ["'Rubik Glitch'", "sans-serif"],
        saira: ["'Saira Stencil One'", "sans-serif"],
        gudea: ["'Gudea'", "sans-serif"],
        rubik2: ["'Rubik 80s Fade'", "sans-serif"],
      },
      textShadow: {
        custom: "0px 0px 15px rgb(31, 96, 212)",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 100, 100, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors: {
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "scroll": {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "beam": {
          '0%': { borderWidth: '2px', borderColor: 'transparent' },
          '50%': { borderWidth: '2px', borderColor: '#07CBE7' },
          '100%': { borderWidth: '2px', borderColor: 'transparent' },
        },
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "beam": 'beam 1.5s linear infinite',
        "scroll":"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        'spin-slow': 'spin 10s linear infinite',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-textshadow")],
};
