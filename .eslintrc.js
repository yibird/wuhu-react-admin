const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // ESLint解析器选项配置
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // 指示要使用哪些其他语言功能的对象
    ecmaFeatures: {
      jsx: true,
    },
    // ecma版本,ESLint解析器使用它来确定如何执行范围分析
    ecmaVersion: 2020,
    // 配置模块类型,如果代码位于ECMAScript模块中,请设置为"script"（默认）或“module”。
    sourceType: 'module',
    jsxPragma: 'React',
  },
  // 定义全局变量
  globals: {},
  // 一个配置文件可以被基础配置中的已启用的规则继承
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-useless-escape': 2,
    'space-before-function-paren': 'off',
  },
});
