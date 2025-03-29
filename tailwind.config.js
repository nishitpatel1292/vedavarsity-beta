const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['AvertaStd', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '22px': '1.375rem',
        '28px': '1.75rem',
        '32px': '2rem',
        '38px': '2.375rem'
      },
      colors: {
        primary: {
          DEFAULT: '#004AAD',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: '#feea29',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        coral: {
          500: '#FF7F6A'
        },
        navy: 'hsl(var(--navbar-banner))',
        cloud: '#FCFCFC',
        ice: '#F5F8FE',
        mist: '#E9EEF2CC',
        sun: '#FFAD3BE5',
        darkcloud: '#f7f7f7',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
        },
        'color-1': 'hsl(var(--color-1))',
        'color-2': 'hsl(var(--color-2))',
        'color-3': 'hsl(var(--color-3))',
        'color-4': 'hsl(var(--color-4))',
        'color-5': 'hsl(var(--color-5))'
      },
      screens: {
        'x-md': '780px'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-pattern.png')",
        'explore-hero': "url('/images/explore-hero.png')",
        bandana: "url('/images/bandana.png')",
        pattern: "url('/images/pattern.png')"
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      animation: {
        rainbow: 'rainbow var(--speed, 2s) infinite linear'
      },
      keyframes: {
        rainbow: {
          '0%': {
            'background-position': '0%'
          },
          '100%': {
            'background-position': '200%'
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')]
};
