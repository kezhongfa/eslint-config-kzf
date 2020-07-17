module.exports = {
  extends: [
    './index',
    './rules/react/react',
    './rules/react/react-hooks',
  ].map(require.resolve),
};
