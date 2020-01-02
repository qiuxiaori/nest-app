## src目录结构

- common 用于存放公共的 interface、decorators
- feature 用于存放系统业务模块，用户模块、帖子模块
- core 用于存放核心的 auth、guards、interceprots
- shared 用于存放系统分享模块，分享模块可以被其他任意业务模块导入，并使用其分享出的 provider

## 开发调试

- build: 热部署， 执行npm run build后在新的窗口运行项目即可
- start: 启动项目
- start:dev: 本地环境启动
- start:debug: 调试模式启动
- start:prod: 生产环境启动