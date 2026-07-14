/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d4aa',
        'on-primary': '#0f111a',
        'primary-container': '#00382c',
        'on-primary-container': '#00d4aa',
        secondary: '#7c5cfc',
        'on-secondary': '#0f111a',
        'secondary-container': '#2d1b69',
        tertiary: '#ff6b9d',
        surface: '#1a1d2e',
        'on-surface': '#e6e8f0',
        'surface-variant': '#262a40',
        'on-surface-variant': '#b0b3c4',
        background: '#0f111a',
        'on-background': '#e6e8f0',
        outline: '#3d4160',
        'terminal-green': '#7ee787',
        'neon-cyan': '#79d7ff',
      },
      fontFamily: {
        display: ['"JetBrains Mono"', 'monospace'],
        body: ['"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'md3-xs': '4px',
        'md3-sm': '8px',
        'md3-md': '12px',
        'md3-lg': '16px',
        'md3-xl': '28px',
        'md3-full': '9999px',
      },
      boxShadow: {
        'md3-1': '0 1px 3px 1px rgba(0,0,0,0.3), 0 1px 2px 0 rgba(0,0,0,0.4)',
        'md3-2': '0 2px 6px 2px rgba(0,0,0,0.3), 0 1px 2px 0 rgba(0,0,0,0.4)',
        'md3-3': '0 4px 8px 3px rgba(0,0,0,0.3), 0 1px 3px 0 rgba(0,0,0,0.4)',
        'md3-4': '0 6px 10px 4px rgba(0,0,0,0.3), 0 2px 4px 0 rgba(0,0,0,0.4)',
        'md3-5': '0 8px 12px 6px rgba(0,0,0,0.3), 0 4px 4px 0 rgba(0,0,0,0.4)',
        glow: '0 0 20px rgba(0, 212, 170, 0.15)',
        'glow-strong': '0 0 30px rgba(0, 212, 170, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        blink: 'blink 1s step-end infinite',
        'code-rain': 'codeRain 20s linear infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        'terminal-type': 'terminalType 3s steps(40) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        codeRain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        terminalType: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
