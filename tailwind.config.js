/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Deep navy-black base — not pure black, keeps the brand blue in the shadows
        ink: {
          950: '#070B16',
          900: '#0A0F1E',
          800: '#111827',
          700: '#1B2436',
        },
      },
      boxShadow: {
        glow: '0 0 40px -12px rgba(56, 189, 248, 0.45)',
      },
    },
  },
  plugins: [],
};
