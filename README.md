# webpack-seed-v2

## 注意了，本项目不再维护，因为作者我还是打算做回一条复制粘贴开新项目的咸鱼了，请前往[本项目的单项目版本 —— webpack-seed](https://github.com/Array-Huang/webpack-seed)，谢谢。

## 项目介绍
本项目是一个利用webpack架构的**web app**脚手架，其特点如下：
- 多个项目可以共用同一套架构/基础设施。
- 更适合**多页应用**。
- 既可实现全后端分离，也可以生成后端渲染所需要的模板。
- 引入layout和component的概念，方便多页面间对布局、组件的重用，妈妈再也不用担心我是选SPA呢还是Iframe了，咱们都！不！需！要！
- 编译后的程序不依赖于外部的资源（包括css、font、图片等资源都做了迁移），可以整体放到CDN上。
- 已整合兼容IE8+的[跨域方案](https://github.com/jpillora/xdomain)。
- 整合Bootstrap3(利用webpack按需打包)及主题SB-Admin，但其实换掉也很简单，或者干脆不用CSS框架也行。
- 不含Js框架（jQuery不算框架，谢谢）。在我原本的项目中，是用avalon2作为Js框架的，但考虑到脚手架本身并不需要Js框架，同时我也希望这个项目保持精简，因此决定剔除掉avalon2的部分。
- 整合[iconfont](http://www.iconfont.cn/)作为字体图标方案，需要什么图标就自己上iconfont那打包下载下来，替换掉`core/iconfont`内的文件。
- 本项目基于**webpack v1**和**webpack-dev-server v1**，全局和项目局部依赖都一样。


## 使用说明
- 本项目使用包管理工具NPM，因此需要先把本项目所依赖的包下载下来：

```bash
$ npm install
```

- 进入到示例项目**example-admin-1**目录里（与项目相关的npm scripts都定义在项目内部的`package.json`里了）

```bash
$ cd ./example-admin-1
```

- 编译程序，生成的所有代码在`build`目录内。

```bash
$ npm run build # 生成生产环境的代码。用npm run watch或npm run dev可生成开发环境的代码
```

- 启动服务器，推荐直接使用webpack-dev-server

```bash
$ npm run start
```

- 打开浏览器，在地址栏里输入`http://localhost:8080`，Duang！页面就出来了！

## CLI命令(npm scripts)

### 在具体项目的目录(如`example-admin-1`目录)中执行的CLI命令
| 命令            | 作用&效果          |
| --------------- | ------------- |
| npm run build   | 根据`webpack.config.js`，build出一份生产环境的代码 |
| npm run dev     | 根据`webpack.dev.config.js`，build出一份开发环境的代码 |
| npm run watch   | 在`npm run dev`的基础上添加`-- watch`，实时监控源文件，建议开发时使用这项 |
| npm run start   | 开启webpack-dev-server，然后就可以在 http://localhost:8080/ 查看成品了 |
| npm run profile | 显示编译过程中每一项资源的耗时，用来调优的 |


### 在基础设施/架构核心(`core`目录)中执行的CLI命令
| 命令            | 作用&效果          |
| --------------- | ------------- |
| npm run dll     | 生成Dll文件，每次升级第三方库时都需要重新执行一遍 |

## 更新日志

### 2.0.0 (2016-10-21)
在1.x版本的基础上抽离出基础设施，以达到多个项目**共用同一套架构/基础设施**的目的。

### 1.x
本脚手架项目的1.x版本（[Array-Huang/webpack-seed](https://github.com/Array-Huang/webpack-seed)），因为架构比较简单，所以也比较好上手，但无法实现多项目共用同一套架构/基础设施。
