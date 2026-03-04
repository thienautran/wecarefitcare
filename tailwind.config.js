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
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        // WCFC brand palette
        wcfc: {
          'purple-deep': 'var(--wcfc-purple-deep)',
          'purple-mid': 'var(--wcfc-purple-mid)',
          'purple-light': 'var(--wcfc-purple-light)',
          'blue-mid': 'var(--wcfc-blue-mid)',
          'blue-light': 'var(--wcfc-blue-light)',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto', 'var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['Poppins', 'var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'wcfc-gradient': 'linear-gradient(135deg, var(--wcfc-gradient-start), var(--wcfc-gradient-end))',
        'wcfc-gradient-soft': 'linear-gradient(135deg, rgb(237 233 254), rgb(219 234 254))',
      },
      animation: {
        fade: 'fadeInUp 1s both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
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
