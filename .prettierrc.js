module.exports = {
  // 换行的宽度
  printWidth: 100,
  // 是否在语句的末尾打印分号配置。true表示打印分号
  semi: true,
  // 代码单引号配置。true表示启用单引号配置
  singleQuote: true,
  // 代码末尾是否添加逗号策略。all表示尽可能使用代码末尾添加逗号(包括函数参数和调用)
  trailingComma: 'all',
  // 包裹markdown的文本的配置。never表示将每个文本块展开成一行
  proseWrap: 'never',
  // HTML 空白敏感性配置。strict表示所有标签周围的空格(或缺少空格)被认为是重要的
  htmlWhitespaceSensitivity: 'strict',
  // 行结束配置。auto表示保持现有的行尾
  endOfLine: 'auto',
  // 格式化package.json插件
  plugins: ['prettier-plugin-packagejson'],
  overrides: [
    {
      files: '.*rc',
      options: {
        parser: 'json',
      },
    },
  ],
};
