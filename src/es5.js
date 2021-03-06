module.exports = {
  extends: [
    './rules/base/best-practices',
    './rules/base/possible-errors',
    './rules/base/node',
    './rules/base/style',
    './rules/base/variables',
    './rules/es5',
    './prettier.js',
  ].map(require.resolve),
};
