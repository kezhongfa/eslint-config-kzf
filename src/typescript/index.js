/**
 * TypeScript
 */

module.exports = {
  extends: ['../index.js', '../rules/typescript.js', './prettier.js'].map(require.resolve),
};
