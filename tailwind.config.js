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
        // Acento semántico: cambia con el tema (variables en src/index.css)
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          strong: 'rgb(var(--accent-strong) / <alpha-value>)',
        },
      },
      borderRadius: {
        card: '1rem', // = rounded-2xl
        chip: '0.5rem', // = rounded-lg
      },
      boxShadow: {
        glow: '0 0 40px -12px rgb(var(--accent) / 0.45)',
        card: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // = shadow-md (reposo de tarjetas)
        'card-hover': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', // = shadow-xl (hover de tarjetas)
      },
      scale: {
        102: '1.02', // reemplaza hover:scale-[1.02]
      },
    },
  },
  plugins: [],
};
