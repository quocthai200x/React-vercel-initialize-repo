const plugin = require('tailwindcss/plugin');

const baseFontSize = 10;

const convert = value => {
  return (16 * value) / baseFontSize + 'rem';
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /** Create variables for transparent colors */
        transparent: {
          ...['primary', 'calming-green', 'secondary', 'grey'].reduce(
            (acc, colorItem) => {
              const alphas = [0];
              for (let i = 4; i <= 52; i += 6) {
                alphas.push(i);
              }
              alphas.forEach((alphaItem, idx) => {
                const key = `${colorItem}-${alphaItem}`;
                acc[key] = `var(--color-transparent-${key})`;

                if (idx !== 0) {
                  const key2 = `${colorItem}-${(idx + 1) * 100}a`;
                  acc[key2] = `var(--color-transparent-${key2})`;
                }
              });
              return acc;
            },
            {}
          ),
          DEFAULT: 'rgba(0,0,0,0)',
        },
        /** Create variables for base colors */
        ...Object.fromEntries(
          [
            'grey',
            'green',
            'red',
            'yellow',
            'orange',
            'purple',
            'moss',
            'blue',
            'blue-dark',
            'blue-light',
            'cyan',
            'indigo',
            'teal',
            'green-light',
            'brand-primary',
            'brand-secondary',
            'brand-calming-green',
            'rose',
            'ocean-blue',
            'sky-blue',
            'warm-beige',
            'calming-green',
            'primary',
            'secondary',
          ].map(colorName => [
            colorName,
            {
              darker: `var(--color-${colorName}-700)`,
              dark: `var(--color-${colorName}-600)`,
              DEFAULT: `var(--color-${colorName}-500)`,
              light: `var(--color-${colorName}-400)`,
              lighter: `var(--color-${colorName}-100)`,
              50: `var(--color-${colorName}-50)`,
              100: `var(--color-${colorName}-100)`,
              200: `var(--color-${colorName}-200)`,
              300: `var(--color-${colorName}-300)`,
              400: `var(--color-${colorName}-400)`,
              500: `var(--color-${colorName}-500)`,
              600: `var(--color-${colorName}-600)`,
              700: `var(--color-${colorName}-700)`,
              800: `var(--color-${colorName}-800)`,
              900: `var(--color-${colorName}-900)`,
            },
          ])
        ),
        /** Create variables for solid color */
        ...Object.fromEntries(
          [
            'background-button-grey',
            'background-button-primary',
            'background-button-primary-light',
            'background-button-light',
            'background-button-light-inverse',
            'background-button-link',
            'background-button-danger',
            'background-button-warning',
            'background-button-success',
            'background-button-info',
          ].map(colorName => [
            colorName,
            {
              DEFAULT: `var(--color-background-${colorName})`,
              hovered: `var(--color-${colorName})-hovered`,
              pressed: `var(--color-${colorName})-pressed`,
              disabled: `var(--color-${colorName})-disabled`,
              'selected-hovered': `var(--color-${colorName})-selected-hovered`,
            },
          ])
        ),
        ...Object.fromEntries(
          [
            'brand-default',
            'brand-disabled',
            'inverse',
            'success',
            'danger',
            'warning',
            'link',
            'link-pressed',
            'link-disabled',
            'link-pressed',
            'grey-primary',
            'grey-secondary',
            'grey-tertiary',
            'grey-quaternary',
            'neutral-tertiary',
            'icon-info',
            'icon-success',
            'icon-warning',
            'icon-danger',
            'icon-inverse',
            'icon-grey-primary',
            'icon-grey-secondary',
            'icon-grey-tertiary',
            'icon-grey-quaternary',
          ].map(colorName => [
            colorName,
            {
              DEFAULT: `var(--color-${colorName})`,
            },
          ])
        ),
        /** Other colors */
        info: {
          DEFAULT: 'var(--color-calming-green)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
        },
        /**
         * NOTE: new color of the border-default
         */
        default2: 'var(--border-color-default)',
      },
      spacing: () =>
        Object.fromEntries(
          Array.from({ length: 100 / 0.5 + 1 }, (_, index) => [
            (index * 0.5).toString(),
            `${(index * 0.2).toFixed(1)}rem`,
          ])
        ),
      width: () =>
        Object.fromEntries(
          Array.from({ length: 100 / 0.5 + 1 }, (_, index) => [
            (index * 0.5).toString(),
            `${(index * 0.2).toFixed(1)}rem`,
          ])
        ),
      fontSize: {
        xs: [
          `${convert(0.75)}` /* 12px */,
          {
            lineHeight: `${convert(1)}` /* 16px */,
          },
        ],
        sm: [
          `${convert(0.875)}` /* 14px */,
          {
            lineHeight: `${convert(1.25)}` /* 20px */,
          },
        ],
        base: [
          `${convert(1)}` /* 16px */,
          {
            lineHeight: `${convert(1.5)}` /* 24px */,
          },
        ],
        lg: [
          `${convert(1.125)}` /* 18px */,
          {
            lineHeight: `${convert(1.75)}` /* 28px */,
          },
        ],
        xl: [
          `${convert(1.25)}` /* 20px */,
          {
            lineHeight: `${convert(1.75)}` /* 28px */,
          },
        ],
        '2xl': [
          `${convert(1.5)}` /* 24px */,
          {
            lineHeight: `${convert(2)}` /* 32px */,
          },
        ],
        '3xl': [
          `${convert(1.875)}` /* 30px */,
          {
            lineHeight: `${convert(2.25)}` /* 36px */,
          },
        ],
        '4xl': [
          `${convert(2.25)}` /* 36px */,
          {
            lineHeight: `${convert(2.5)}` /* 40px */,
          },
        ],
        '5xl': [
          `${convert(3)}` /* 48px */,
          {
            lineHeight: 4 / 3,
          },
        ],
        '6xl': [
          `${convert(3.75)}` /* 60px */,
          {
            lineHeight: `${convert(1)}`,
          },
        ],
        '7xl': [
          `${convert(4.5)}` /* 72px */,
          {
            lineHeight: `${convert(1)}`,
          },
        ],
        '8xl': [
          `${convert(6)}` /* 96px */,
          {
            lineHeight: `${convert(1)}`,
          },
        ],
        '9xl': [
          `${convert(8)}` /* 128px */,
          {
            lineHeight: `${convert(1)}`,
          },
        ],
      },
      lineHeight: {
        3: `${convert(0.75)}` /* 12px */,
        4: `${convert(1)}` /* 16px */,
        5: `${convert(1.25)}` /* 20px */,
        6: `${convert(1.5)}` /* 24px */,
        7: `${convert(1.75)}` /* 28px */,
        8: `${convert(2)}` /* 32px */,
        9: `${convert(2.25)}` /* 36px */,
        10: `${convert(2.5)}` /* 40px */,
      },
      borderRadius: {
        sm: `${convert(0.125)}` /* 2px */,
        DEFAULT: `${convert(0.25)}` /* 4px */,
        md: `${convert(0.375)}` /* 6px */,
        lg: `${convert(0.5)}` /* 8px */,
        xl: `${convert(0.75)}` /* 12px */,
        '2xl': `${convert(1)}` /* 16px */,
        '3xl': `${convert(1.5)}` /* 24px */,
      },
      minWidth: theme => ({
        ...theme('spacing'),
        0: '0rem',
        xs: `${convert(20)}` /* 320px */,
        sm: `${convert(24)}` /* 384px */,
        md: `${convert(28)}` /* 448px */,
        lg: `${convert(32)}` /* 512px */,
        xl: `${convert(36)}` /* 576px */,
        '2xl': `${convert(42)}` /* 672px */,
        '3xl': `${convert(48)}` /* 768px */,
        '4xl': `${convert(56)}` /* 896px */,
        '5xl': `${convert(64)}` /* 1024px */,
        '6xl': `${convert(72)}` /* 1152px */,
        '7xl': `${convert(80)}` /* 1280px */,
      }),
      maxWidth: theme => ({
        ...theme('spacing'),
        0: '0rem',
        xs: `${convert(20)}` /* 320px */,
        sm: `${convert(24)}` /* 384px */,
        md: `${convert(28)}` /* 448px */,
        lg: `${convert(32)}` /* 512px */,
        xl: `${convert(36)}` /* 576px */,
        '2xl': `${convert(42)}` /* 672px */,
        '3xl': `${convert(48)}` /* 768px */,
        '4xl': `${convert(56)}` /* 896px */,
        '5xl': `${convert(64)}` /* 1024px */,
        '6xl': `${convert(72)}` /* 1152px */,
        '7xl': `${convert(80)}` /* 1280px */,
      }),
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 },
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
      },
      boxShadow: {
        'overlay-l': 'var(--shadow-overlay-l)',
        'overlay-xs': 'var(--shadow-overlay-xs)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hidden': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',

          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
