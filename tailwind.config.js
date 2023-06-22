/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#D99A08',
      'white': '#FDFBFA',
      'accent-1': '#339958',
      'accent-2': '#E04D59'
    },
    fontFamily: {
      headings: ['Roboto', 'sans-serif'],
      body: ['Montserrat', 'sans-serif']
    },
    fontSize: {
      'main': ['130px', {
        lineHeight: '99.67px',
        letterSpacing: '-6.5px',
        fontWeight: '700',
      }],
      'main-m': ['80px', {
        lineHeight: '99.67px',
        letterSpacing: '-6.5px',
        fontWeight: '700',
      }],
      'h2': ['48px', {
        lineHeight: '56.25px',
        letterSpacing: '0px',
        fontWeight: '700',
      }],
      'card': ['24px', {
        lineHeight: '33.6px',
        letterSpacing: '0px',
        fontWeight: '700',
      }],
      'red-heading': ['20px', {
        lineHeight: '28px',
        letterSpacing: '0px',
        fontWeight: '700',
      }],
      'body': ['20px', {
        lineHeight: '18px',
        letterSpacing: '0px',
        fontWeight: '400',
      }],
      'button': ['18px', {
        lineHeight: '26px',
        letterSpacing: '0.46',
        fontWeight: '700',
      }],
      'footer-h': ['16px', {
        lineHeight: '24px',
        letterSpacing: '0px',
        fontWeight: '600',
      }],
      'footer-b': ['14px', {
        lineHeight: '21px',
        letterSpacing: '0px',
        fontWeight: '400',
      }],
      'navbar': ['16px', {
        lineHeight: '24px',
        letterSpacing: '0px',
        fontWeight: '400',
      }]
    },
    borderRadius: {
      'none': '0',
      'button': '30px',
      'card': '30px'
    },
    padding: {
      '100': '100px',
      '64': '64px',
      '48': '48px',
      '24': '24px',
      '20': '20px'
    },
    gap: {
      '8': '8px',
      '16': '16px',
      '25': '25px',
      '24': '24px',
      '48': '48px',
      '82': '82px',
    },
    height: {
      'button': '56px'
    },
    extend: {
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-500px)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-500px)' },
          '100%': { transform: 'translateX(0px)' },
        },

      },
      animation: {
        'slide-left': 'slide-left 10s linear infinite alternate-reverse forwards',

        'slide-right': 'slide-right 10s linear infinite alternate-reverse forwards',


      },

    }

  },

  plugins: [],
}