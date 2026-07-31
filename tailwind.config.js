/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-elevated': 'rgb(var(--surface-elevated) / <alpha-value>)',
        'surface-variant': 'rgb(var(--surface-variant) / <alpha-value>)',
        'on-surface': 'rgb(var(--on-surface) / <alpha-value>)',
        'on-surface-variant': 'rgb(var(--on-surface-variant) / <alpha-value>)',
        outline: 'rgb(var(--outline) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'primary-strong': 'rgb(var(--primary-strong) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--tertiary) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      borderRadius: {
        'md3-xs': '6px',
        'md3-sm': '10px',
        'md3-md': '14px',
        'md3-lg': '20px',
        'md3-xl': '28px',
        'md3-full': '9999px',
      },
      boxShadow: {
        'md3-1': '0 1px 2px 0 rgba(0,0,0,0.4)',
        'md3-2': '0 2px 6px 1px rgba(0,0,0,0.4)',
        'md3-3': '0 4px 10px 2px rgba(0,0,0,0.4)',
        'md3-4': '0 6px 16px 4px rgba(0,0,0,0.45)',
        'md3-5': '0 10px 24px 6px rgba(0,0,0,0.5)',
        glow: '0 8px 30px -6px rgba(99, 102, 241, 0.45)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'gradient-x': 'gradientX 6s ease infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
        'drift-slow': 'drift 20s ease-in-out infinite',
        ticker: 'ticker 40s linear infinite',
        watermark: 'watermark 12s ease-in-out infinite',
        rise: 'rise 24s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.8' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-3deg)' },
          '25%': { transform: 'translate(18px, -22px) rotate(2deg)' },
          '50%': { transform: 'translate(-14px, -30px) rotate(4deg)' },
          '75%': { transform: 'translate(10px, 14px) rotate(-2deg)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        watermark: {
          '0%, 100%': { opacity: '1', transform: 'rotate(-6deg) scale(1)' },
          '50%': { opacity: '0.35', transform: 'rotate(4deg) scale(1.04)' },
        },
        rise: {
          '0%': { transform: 'translateY(110vh) rotate(-6deg)', opacity: '0' },
          '15%': { opacity: '0.1' },
          '50%': { opacity: '0.12' },
          '85%': { opacity: '0.1' },
          '100%': { transform: 'translateY(-20vh) rotate(6deg)', opacity: '0' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
