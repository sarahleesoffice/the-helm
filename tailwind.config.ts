import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#040a0f',
        teal: '#0f2a33',
        gold: '#c9a84c',
        goldSoft: '#f0d99a',
      },
      boxShadow: {
        glow: '0 0 60px rgba(201,168,76,0.18)',
        glass: '0 24px 80px rgba(0,0,0,0.38)'
      },
      backgroundImage: {
        'helm-radial': 'radial-gradient(circle at top, rgba(201,168,76,0.16), transparent 36%), radial-gradient(circle at 80% 20%, rgba(31,97,111,0.22), transparent 24%), radial-gradient(circle at 50% 100%, rgba(9,34,48,0.85), transparent 45%)'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        float: 'float 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
