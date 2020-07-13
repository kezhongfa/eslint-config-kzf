module.exports = {
  plugins: ['react-hooks'],
  rules: {
    // Checks rules of Hooks
    // @unessential
    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',

    // Checks effect dependencies
    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'react-hooks/exhaustive-deps': 'warn',
  },
};
