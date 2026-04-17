/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-fixed-dim": "#ffb59d",
        "on-primary-container": "#5f1900",
        "tertiary-container": "#b59189",
        "background": "#fff8f1",
        "primary-fixed": "#ffdbd0",
        "on-error-container": "#93000a",
        "inverse-on-surface": "#f7f0e8",
        "on-primary": "#ffffff",
        "secondary-fixed-dim": "#ffb3b1",
        "on-secondary": "#ffffff",
        "surface": "#fff8f1",
        "on-surface": "#1e1b17",
        "surface-container-lowest": "#ffffff",
        "on-background": "#1e1b17",
        "error": "#ba1a1a",
        "on-tertiary": "#ffffff",
        "surface-container": "#f4ede5",
        "primary": "#ab3500",
        "on-tertiary-container": "#442b25",
        "outline": "#8d7168",
        "surface-variant": "#e8e1da",
        "on-primary-fixed": "#390c00",
        "on-tertiary-fixed": "#2b1611",
        "primary-container": "#ff6b35",
        "on-secondary-fixed": "#410007",
        "tertiary-fixed": "#ffdad2",
        "secondary-container": "#de2c3c",
        "surface-container-high": "#eee7df",
        "surface-bright": "#fff8f1",
        "on-secondary-fixed-variant": "#92001b",
        "on-primary-fixed-variant": "#832600",
        "on-secondary-container": "#fffbff",
        "inverse-primary": "#ffb59d",
        "surface-container-low": "#f9f3eb",
        "inverse-surface": "#33302b",
        "tertiary-fixed-dim": "#e5beb5",
        "tertiary": "#755750",
        "outline-variant": "#e1bfb5",
        "secondary": "#ba0627",
        "surface-tint": "#ab3500",
        "surface-container-highest": "#e8e1da",
        "surface-dim": "#dfd9d1",
        "on-surface-variant": "#594139",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-tertiary-fixed-variant": "#5c403a",
        "secondary-fixed": "#ffdad8"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Lexend", "sans-serif"],
        "body": ["Plus Jakarta Sans", "sans-serif"],
        "label": ["Plus Jakarta Sans", "sans-serif"]
      },
      boxShadow: {
        "ambient": "0 32px 32px -4px rgba(89,65,57,0.06)",
        "recipe-card": "0 32px 32px -4px rgba(89,65,57,0.06)"
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
