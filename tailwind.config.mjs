import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        'custom-light': {
          primary: '#0D3B66',
          secondary: '#ffeca9',
          accent: '#f4d35e',
          neutral: '#3d4451',
          'base-100': '#ffffff',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
      'light', // Keep default light theme
      'dark', // Keep default dark theme
    ],
  },
};
