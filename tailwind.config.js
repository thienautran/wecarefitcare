import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        brand: {
          50: 'rgb(var(--pfc-brand-50) / <alpha-value>)',
          100: 'rgb(var(--pfc-brand-100) / <alpha-value>)',
          200: 'rgb(var(--pfc-brand-200) / <alpha-value>)',
          300: 'rgb(var(--pfc-brand-300) / <alpha-value>)',
          400: 'rgb(var(--pfc-brand-400) / <alpha-value>)',
          500: 'rgb(var(--pfc-brand-500) / <alpha-value>)',
          600: 'rgb(var(--pfc-brand-600) / <alpha-value>)',
          700: 'rgb(var(--pfc-brand-700) / <alpha-value>)',
          800: 'rgb(var(--pfc-brand-800) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'var(--aw-color-accent)',
          50: 'rgb(var(--pfc-accent-50) / <alpha-value>)',
          100: 'rgb(var(--pfc-accent-100) / <alpha-value>)',
          200: 'rgb(var(--pfc-accent-200) / <alpha-value>)',
          300: 'rgb(var(--pfc-accent-300) / <alpha-value>)',
          400: 'rgb(var(--pfc-accent-400) / <alpha-value>)',
          500: 'rgb(var(--pfc-accent-500) / <alpha-value>)',
          600: 'rgb(var(--pfc-accent-600) / <alpha-value>)',
          700: 'rgb(var(--pfc-accent-700) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto', 'var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['Poppins', 'var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'pfc-gradient': 'linear-gradient(135deg, var(--pfc-gradient-start), var(--pfc-gradient-end))',
        'pfc-gradient-soft': 'linear-gradient(135deg, rgb(237 233 254), rgb(219 234 254))',
      },
      animation: {
        fade: 'fadeInUp 1s both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
