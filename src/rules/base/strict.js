module.exports = {
  rules: {
    // 禁止使用严格模式
    // @off 经 Babel 处理的 ES6 代码，会自动加 use strict，无需手动添加；但不少 Node.js 的场景需要加 use strict
    // 因此本包不做限制，依赖本包的业务包可根据情况开启这条
    strict: 'off',
  },
};
