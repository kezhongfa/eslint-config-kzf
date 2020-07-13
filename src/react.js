module.exports = {
  extends: [
    './index',
    './rules/react/base',
    './rules/react/react-a11y',
    './rules/react/react-hooks',
  ].map(require.resolve),
};
