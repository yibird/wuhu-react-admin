wuhu-react-admin 是基于 React18.x + ReactRouter6.x + TypeScript4.x + Antd5.x + Zustand4.x + Ahooks5.x 实现的后台管理系统。

## 项目结构

```
src-assets:用于存储静态资源。
src-components:用于存储公共组件。
src-enums:用于存储项目枚举类型。
src-layouts:用于存储页面布局相关组件。
src-router:用于存储视图路由。
src-store:用于存储全局状态管理逻辑。
src-styles:用于存储样式文件。
src-utils:用于存储工具文件。

types:用于存储全局TS类型。
```

## Component

### Table

- table 高度自适应、
- table 列设置。
- table 列导出。
- table 分页配置。
- table hook。

### Form(表单)

- Form schema 渲染组件。
- Form 表单验证联动。

### Watermark(水印)

### VirtualList(虚拟列表)

### Qrcode(二维码)

### Modal(弹窗)

- 高度自适应。
- Modal 拖拽和全屏。

### Timestamp(相对时间)

### Verify(验证组件)

- 拖拽验证。
- 图片旋转认证。

### Upload(上传)

- 基于 Antd Upload 扩展,搭配服务端支持秒传、分片上传、断点续传。

## 项目规范

### git 提交规范

git commit 格式

```
# git commit 提交格式
git commit -m "type(scope) : subject"
# 例子1
git commit -m "feat: 新增Butto组件"
```

commit 主题:

- feat:提交新功能。
- fix:修复 bug。
- perf:性能优化,提高性能的代码更改。
- style:调整代码格式,未修改代码逻辑(比如修改空格、格式化、缺少分号等)。
- docs:修改文档。
- test:添加或修改代码测试。
- refactor:代码重构文件。
- build:打包构建。
- ci:ci 配置文件和脚本的改变(如:Travis、Circle)。
- chore:对构建流程或辅助工具和依赖库(如文档生成等)的更改。
- revert:代码回退。
- wip:
- workflow:工作流相关文件修改。
- types:修改 typescript 类型。
- release:发布新版本。
