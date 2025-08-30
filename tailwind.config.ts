import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        primaryColor: {
          '50': 'var(--primary-color-50)',
          '100': 'var(--primary-color-100)',
          '200': 'var(--primary-color-200)',
          '300': 'var(--primary-color-300)',
          '400': 'var(--primary-color-400)',
          '500': 'var(--primary-color-500)',
          '600': 'var(--primary-color-600)',
          '700': 'var(--primary-color-700)',
          '800': 'var(--primary-color-800)',
          '900': 'var(--primary-color-900)',
          '950': 'var(--primary-color-950)',
          DEFAULT: 'var(--primary-color-500)',
        },
        secondaryColor: {
          '50': 'var(--secondary-color-50)',
          '100': 'var(--secondary-color-100)',
          '200': 'var(--secondary-color-200)',
          '300': 'var(--secondary-color-300)',
          '400': 'var(--secondary-color-400)',
          '500': 'var(--secondary-color-500)',
          '600': 'var(--secondary-color-600)',
          '700': 'var(--secondary-color-700)',
          '800': 'var(--secondary-color-800)',
          '900': 'var(--secondary-color-900)',
          '950': 'var(--secondary-color-950)',
          DEFAULT: 'var(--secondary-color-500)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      backgroundImage: {
        'my-gradient-1': 'linear-gradient(to right, var(--primary-color-500), var(--primary-color-700))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
export default config;
