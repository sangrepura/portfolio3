import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // Use CSS variable for ocean colors
        oceanLightBlue: 'var(--ocean-light-blue)',
        oceanMediumBlue: 'hsl(var(--ocean-medium-blue) / <alpha-value>)',
        oceanSkyBlue: 'hsl(var(--ocean-sky-blue) / <alpha-value>)',
        oceanTeal: 'hsl(var(--ocean-teal) / <alpha-value>)',
        oceanDeepTeal: 'hsl(var(--ocean-deep-teal) / <alpha-value>)',
        oceanPaleBlue: 'hsl(var(--ocean-pale-blue) / <alpha-value>)',
        lightBlue: '#8db7fc',
        darkBlue: '#60a5fa',
        darkBg: '#0a0908',
        darkBeige: '#ddbea9',
        darkOcean: '#22333B',
        lightBeige: '#ffcbb4',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      backgroundSize: {
        '200': '200% 200%',
        '400': '400% 400%',
        '600': '600% 600%',
        '800': '800% 800%'
      },
      keyframes: {
        bubbles: {
          '0%': {
            bottom: '-10%',
            'background-position': '-200% 0',
            transform:
              'translateX(0) translateY(0) scaleX(0.8) scaleY(1) rotate(0deg)',
            opacity: 'var(--initial-opacity, 0.5)',
            filter: 'blur(0px)' // Start with no blur
          },
          '12.5%': {
            transform:
              'translateX(15px) translateY(20px) scaleX(0.9) scaleY(1.2) rotate(45deg)',
            opacity: 'calc(var(--initial-opacity, 0.5) + 0.2)',
            filter: 'blur(1px)' // Introduce slight blur
          },
          '25%': {
            transform: 'translateX(30px) scaleX(1.1) scaleY(0.8) rotate(90deg)',
            opacity: 'calc(var(--initial-opacity, 0.5) + 0.4)',
            filter: 'blur(2px)' // Increase blur
          },
          '37.5%': {
            transform:
              'translateX(45px) scaleX(1.3) scaleY(1.1) rotate(135deg)',
            opacity: 'calc(var(--initial-opacity, 0.5) + 0.6)',
            filter: 'blur(1px)' // Slightly reduce blur
          },
          '50%': {
            transform:
              'translateX(70px) scaleX(1.2) scaleY(1.3) rotate(180deg)',
            opacity: 'calc(var(--initial-opacity, 0.5) + 0.4)',
            filter: 'blur(3px)' // Increase blur at mid-point
          },
          '62.5%': {
            transform:
              'translateX(95px) scaleX(1.1) scaleY(0.9) rotate(225deg)',
            opacity: 'calc(var(--initial-opacity, 0.5) + 0.6)',
            filter: 'blur(2px)' // Decrease blur as it rises
          },
          '75%': {
            transform:
              'translateX(110px) scaleX(0.9) scaleY(1.2) rotate(270deg)',
            opacity: 'calc(var(--initial-opacity, 0.5) + 0.2)',
            filter: 'blur(1px)' // Reduce blur as it reaches top
          },
          '87.5%': {
            transform: 'translateX(15px) scaleX(1.2) scaleY(1) rotate(315deg)',
            opacity: 'calc(var(--initial-opacity, 0.5) + 0.1)',
            filter: 'blur(0.5px)' // Almost clear
          },
          '100%': {
            bottom: '120%',
            'background-position': '200% 0',
            transform:
              'translateX(-120px) scaleX(0.8) scaleY(1.3) rotate(360deg)',
            opacity: 'var(--initial-opacity, 0.5)',
            filter: 'blur(0px)' // Clear as it exits
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        fadeOut: {
          '0%': {
            opacity: '1'
          },
          '95%': {
            opacity: '.5'
          },
          '99%': {
            opacity: '.2'
          },
          '100%': {
            opacity: '0'
          }
        },
        gradient: {
          '0%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
          '100%': { backgroundPosition: '0% 0%' }
        }
      },
      animation: {
        bubbles: 'bubbles 12s infinite ease-in-out',
        gradient: 'gradient 5s ease infinite',
        'fade-out': 'fadeOut 4500ms 2s ease-in forwards',
        'fade-in': 'fadeIn ease forwards'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}

export default config
