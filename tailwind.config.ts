import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      cursor: {
        pointer: 'pointer',
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
