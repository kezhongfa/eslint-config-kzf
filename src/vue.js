module.exports = {
  extends: ['./index', './rules/vue', './prettier.js'].map(require.resolve),
  parserOptions: {
    // https://github.com/mysticatea/vue-eslint-parser#parseroptionsparser
    parser: 'babel-eslint',
  },
};
