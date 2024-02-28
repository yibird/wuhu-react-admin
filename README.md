<h1 align="center">wuhu-react-admin</h1>
**English** | [中文](README.zh-CN.md)

## introduction

## 项目结构

```
- src/assets:静态资源存放目录。
- src/common:公用配置存放目录,包含左侧菜单等配置。
- src/components:公共组件存放目录。
- src/enums:枚举类型存放目录。
- src/hooks:公用Hooks存放目录。
- src/layout:页面布局目录。
- src/locales:多语言包存储目录。
- src/router:路由相关目录。
- src/store:全局状态管理目录。
- src/styles:全局样式文件目录。
- src/utils:通用工具目录。
- src/views:页面视图文件存放目录。
- types:全局TS类型声明目录。
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

git commit 格式:

```
# git commit 提交格式
git commit -m "type(scope) : subject"
# 例子1
git commit -m "feat: 新增Butto组件"
```

commit 主题:

- feat(feature):表示添加新功能或功能增强。
- fix:表示修复bug或问题。
- docs:表示只涉及文档的更改,如更新文档、添加注释等。
- style:表示对代码风格、格式进行修改,不影响代码逻辑(例如，空格、缩进、分号等的更改)。
- refactor:表示对代码进行重构,既不是修复bug也不是添加新功能的修改。
- perf(performance):表示性能优化的修改。
- test:表示添加、修改或删除测试相关的代码。
- chore:表示对构建过程或辅助工具和库的更改,不影响生产代码(例如，更新构建脚本、配置文件等)。
- build:表示与构建系统相关的更改,如更新依赖、版本管理工具的更改等。
- ci(continuous integration):表示与持续集成流程相关的更改。
- revert:表示撤销之前的提交。
- merge:表示合并分支的工作流类型,通常用于合并开发分支或特性分支到主分支。
- release:表示发布工作流类型,用于版本发布或管理。
- hotfix:表示热修复工作流类型,通常用于紧急修复生产环境中的问题。
- init:表示初始化工作流类型,用于项目初始化或初始提交。
- workflow:表示提交的工作流或过程类型,以便更好地理解提交的上下文和目的。
- wip:wip是Work In Progress的缩写,即工作正在进行中。表示提交仍然处于开发或尚未完成的状态。
