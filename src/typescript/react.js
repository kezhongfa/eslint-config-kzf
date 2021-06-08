module.exports = {
  extends: ['./index', '../rules/react/react', '../rules/react/react-hooks', './prettier.js'].map(require.resolve),
};
