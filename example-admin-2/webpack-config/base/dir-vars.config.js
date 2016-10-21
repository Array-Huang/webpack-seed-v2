var path = require('path');
var mE = require('../../../core/webpack-config/base/dir-vars.config.js');

/**/mE.srcRootDir = path.resolve(mE.staticRootDir, './example-admin-2'); // 项目业务代码根目录
/**//**/mE.buildDir = path.resolve(mE.srcRootDir, './build'); // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）
/**//**/mE.pagesDir = path.resolve(mE.srcRootDir, './pages'); // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
/**//**/mE.publicDir = path.resolve(mE.srcRootDir, './public-resource'); // 存放各个页面使用到的公共资源
/**//**//**/mE.logicDir = path.resolve(mE.publicDir, './logic'); // 存放公用的业务逻辑
/**//**//**/mE.configDir = path.resolve(mE.publicDir, './config'); // 存放项目的各种配置文件

module.exports = mE;
