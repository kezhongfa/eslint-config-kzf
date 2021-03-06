module.exports = {
  env: {
    node: true,
  },

  rules: {
    // 在 callback 后需要使用 return
    'callback-return': 'off',

    // 强制在模块顶部调用 require()
    // @off 一些 webpack 插件、条件加载等，会在代码中写 require
    'global-require': 'off',

    // 强制回调函数中有容错处理
    'handle-callback-err': 'off',

    // 禁用 Buffer() 构造函数
    'no-buffer-constructor': 'off',

    // 禁止混合常规变量声明和 require 调用
    'no-mixed-requires': 'off',

    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 'off',

    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': 'off',

    // 禁用 process.env
    'no-process-env': 'off',

    // 禁用 process.exit()
    'no-process-exit': 'off',

    // 禁用通过 require 加载的指定模块
    'no-restricted-modules': 'off',

    // 禁用同步方法
    'no-sync': 'off',
  },
};
