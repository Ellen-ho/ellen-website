import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: ['./src/**/*.{tsx,css}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  daisyui: {
    themes: ['retro', 'night'],
    darkTheme: 'night',
  },
  plugins: [daisyui],
};

export default config;
