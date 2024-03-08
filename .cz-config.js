module.exports = {
  types: [
    { value: 'feat', name: 'feat: A new feature(一个新功能)' },
    { value: 'fix', name: 'fix: A bug fix(修复一个bug)' },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature(重构:既不修复错误也不添加功能的代码更改)',
    },
    {
      value: 'perf',
      name: 'perf: A code change that improves performance(提高性能的代码更改)',
    },
    {
      value: 'test',
      name: 'test: Adding missing tests or correcting existing tests(添加缺失的测试或更改已存在的测试)',
    },
    {
      value: 'chore',
      name: 'chore: Changes to the build process or auxiliary tools(构建过程或辅助工具的更改)',
    },
    {
      value: 'ci',
      name: 'ci: Modify CI/CD configuration(修改CI/CD配置)',
    },
    {
      value: 'build',
      name: 'build: Modify build-related configurations(修改构建相关配置)',
    },
    {
      value: 'docs',
      name: 'docs: Modify document(修改文档)',
    },
    {
      value: 'style',
      name: 'style: Code style changes that do not affect the meaning of the code(不影响代码含义的代码风格更改)',
    },
    {
      value: 'revert',
      name: 'revert: Revert to a commit(恢复到提交)',
    },
    {
      value: 'wip',
      name: 'wip: Work in progress(工作进行中)',
    },
    {
      value: 'init',
      name: 'init: Initialization operation(初始化操作)',
    },
  ],
  messages: {
    type: 'Please select the type of submission',
    customScope: 'Please enter the modified scope(optional)',
    subject: 'Please enter a submission description',
    body: 'Please enter a detailed description(optional)',
    footer: 'Please select the issue to close(optional)',
    confirmCommit: 'Confirm to submit using the above information?(y/n)',
  },
  skipQuestions: ['customScope', 'body', 'footer'],
  subjectLimit: 72,
};
