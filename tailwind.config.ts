import type { Config } from 'tailwindcss';

export default <Config>{
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  safelist: [
    // Grid columns - basic classes
    { pattern: /grid-cols-\d+/ },
    { pattern: /col-span-\d+/ },
    { pattern: /col-start-\d+/ },
    { pattern: /gap-\d+/ },
    { pattern: /gap-x-\d+/ },
    { pattern: /gap-y-\d+/ },

    // Responsive variants with correct format
    { pattern: /grid-cols-\d+/, variants: ['sm', 'md', 'lg', 'xl'] },
    { pattern: /col-span-\d+/, variants: ['sm', 'md', 'lg', 'xl'] },
    { pattern: /col-start-\d+/, variants: ['sm', 'md', 'lg', 'xl'] },

    // Special grid classes
    'grid', 'col-auto', 'grow', 'col-span-full',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4361ee',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.8125rem', // 13px
        base: '0.875rem', // 14px
        md: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 60px
        '7xl': '4.5rem', // 72px
        '8xl': '6rem', // 96px
        '9xl': '8rem', // 128px
      },
      lineHeight: {
        none: '1',
        tighter: '1.125',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        extra: '2.25',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
};
