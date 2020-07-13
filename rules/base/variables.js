module.exports = {
  // 允许使用的全局变量环境（node 在 ./node.js 中打开，es6 在 ./es6.js 中打开，）
  // 所有可选环境：https://eslint.org/docs/user-guide/configuring#specifying-environments
  // 变量列表：https://github.com/sindresorhus/globals/blob/master/globals.json
  env: {
    browser: true,
    mocha: true,
    jasmine: true,
    jest: true,
    jquery: true,
  },

  rules: {
    // 强制或禁止在变量声明时进行赋值
    'init-declarations': 'off',

    // 禁止 delete 变量
    'no-delete-var': 'error',

    // 禁止标签与变量同名
    'no-label-var': 'error',

    // 禁用使用特定的全局变量
    'no-restricted-globals': 'off',

    // 禁止变量与外层作用域已存在的变量同名
    // @unessential 不做强制卡点
    'no-shadow': 'error',

    // 禁止使用保留字命名变量
    'no-shadow-restricted-names': 'error',

    // 禁止使用未声明的变量
    'no-undef': 'error',

    // 不要将变量初始化成 undefined
    'no-undef-init': 'error',

    // 禁止使用 undefined
    'no-undefined': 'off',

    // 声明的变量必须被使用
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // 不要在声明前就使用变量
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
  },
};
