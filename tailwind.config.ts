import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#6366f1', // Warna utama, biru keunguan
          '50': '#f8f8ff',
          '100': '#eef2ff',
          '200': '#e0e7ff',
          '300': '#c7d2fe',
          '400': '#a5b4fc',
          '500': '#818cf8',
          '600': '#6366f1',
          '700': '#4f46e5',
          '800': '#4338ca',
          '900': '#3730a3',
        },
        'secondary': {
          DEFAULT: '#ec4899', // Warna sekunder, pink
          '50': '#fdf2f8',
          '100': '#fce7f3',
          '200': '#fbcfe8',
          '300': '#f9a8d4',
          '400': '#f472b6',
          '500': '#ec4899',
          '600': '#db2777',
          '700': '#be185d',
          '800': '#9d174d',
          '900': '#831843',
        },
        'accent': {
          DEFAULT: '#a855f7', // Warna aksen, ungu
          '50': '#f5f3ff',
          '100': '#ede9fe',
          '200': '#ddd6fe',
          '300': '#c4b5fd',
          '400': '#a78bfa',
          '500': '#8b5cf6',
          '600': '#7c3aed',
          '700': '#6d28d9',
          '800': '#5b21b6',
          '900': '#4c1d95',
        },
        'gray-light': '#f8f8f8',
        'gray-dark': '#333333',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom right, var(--tw-color-secondary-50), var(--tw-color-accent-50), var(--tw-color-primary-50))',
      }
    },
  },
  plugins: [],
}

export default config;