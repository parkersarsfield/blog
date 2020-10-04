module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-start infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1.0' },
          '50%': { opacity: '0.0' },
        },
      },
    },
  },
  variants: {
    margin: ['responsive', 'last'],
    padding: ['responsive', 'last'],
  },
  plugins: [],
};
