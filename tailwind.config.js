/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern Clean White & Warm Canvas Palette
        background: '#FFFFFF',
        surface: '#F8FAFC',
        'surface-elevated': '#FFFFFF',
        'surface-warm': '#FAF9F6',
        card: '#FFFFFF',
        'card-border': '#E2E8F0',
        'card-border-subtle': '#F1F5F9',
        
        // Brand Primary Orange & Tones
        brand: {
          orange: '#FF6B00',
          'orange-hover': '#EA580C',
          'orange-50': '#FFF7ED',
          'orange-100': '#FFEDD5',
          'orange-200': '#FED7AA',
          'orange-500': '#FF6B00',
          'orange-600': '#EA580C',
          'orange-700': '#C2410C',
        },
        
        // Charcoal & Neutral Typography
        charcoal: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#090D16',
        },

        // Backward compatibility mappings
        primary: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          500: '#FF6B00',
          600: '#EA580C',
          700: '#C2410C',
        },
        accent: {
          orange: '#FF6B00',
          cyan: '#FF6B00', // Redirected to orange for consistent branding
          neon: '#FF8533',
          purple: '#FF6B00',
          amber: '#F59E0B',
          emerald: '#10B981',
        },
        slate: {
          850: '#0F172A',
          900: '#0F172A',
          950: '#090D16',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(255, 107, 0, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
        'card-glow': 'linear-gradient(180deg, rgba(255, 107, 0, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF6B00 0%, #FF8533 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        13: '3.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        'xs': '0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        'ring-orange': '0 0 0 1px rgba(255, 107, 0, 0.35), 0 24px 48px -12px rgba(255, 107, 0, 0.25)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02)',
        'card-hover': '0 20px 35px -5px rgba(15, 23, 42, 0.08), 0 8px 16px -3px rgba(255, 107, 0, 0.06)',
        'orange': '0 10px 25px -5px rgba(255, 107, 0, 0.25)',
        'orange-sm': '0 4px 12px -2px rgba(255, 107, 0, 0.2)',
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
};
