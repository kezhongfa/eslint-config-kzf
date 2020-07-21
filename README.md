# eslint-config-kzf

## 简介

eslint-config-kzf [ESLint 配置集](http://eslint.org/docs/developer-guide/shareable-configs.html)，支持 JavaScript、TypeScript、React、Vue 等多种项目类型。

### JavaScript 项目

| 项目类型 | 配置文件 | 依赖 parser |
| ----------- | ----------- | -----------|
| JavaScript(默认)         | eslint-config-kzf      | [babel-eslint](https://www.npmjs.com/package/babel-eslint)|
| JavaScript + React | eslint-config-kzf/react| [babel-eslint](https://www.npmjs.com/package/babel-eslint)|
| JavaScript + Vue   | eslint-config-kzf/vue  | [vue-eslint-parser](https://www.npmjs.com/package/eslint-plugin-vue)|
| JavaScript ES5     | eslint-config-kzf/es5  | ESLint 默认 parser|

### TypeScript 项目

| 项目类型 | 配置文件 | 依赖 parser |
| ----------- | ----------- | -----------|
| TypeScript         | eslint-config-kzf/typescript      | [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)|
| JavaScript + React | eslint-config-kzf/typescript/react| [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)|
| JavaScript + Vue   |eslint-config-kzf/typescript/vue  | [vue-eslint-parser](https://www.npmjs.com/package/eslint-plugin-vue)  <br /> [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)|

### 安装
```sh
npm install eslint-config-kzf -D
```
### 使用

将下面的代码保存至项目根目录，文件名为.eslintrc.json

```shell
{
  "extends": ["eslint-config-kzf"],
  "rules": {
    # put your custom rules here
  }
  # put your other custom config below
}
```
