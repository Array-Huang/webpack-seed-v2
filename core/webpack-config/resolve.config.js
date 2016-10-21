var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
module.exports = {
  // 模块别名的配置，为了使用方便，一般来说所有模块都是要配置一下别名的
  alias: {
    /* 各种目录 */
    vendorDir: dirVars.vendorDir,
    coreConfigDir: dirVars.coreConfigDir,
    dllDir: dirVars.dllDir,
    lessDir: path.resolve(dirVars.coreDir, 'less'),
    iconfontDir: path.resolve(dirVars.coreDir, 'iconfont'),

    /* vendor */
    /* bootstrap 相关 */
    metisMenu: path.resolve(dirVars.vendorDir, 'metisMenu/'),

    /* libs */
    withoutJqueryModule: path.resolve(dirVars.libsDir, 'without-jquery.module'),
    routerModule: path.resolve(dirVars.libsDir, 'router.module'),
    libs: path.resolve(dirVars.libsDir, 'libs.module'),

    /* components */

    /* layout */
    layout: path.resolve(dirVars.layoutDir, 'layout/html'),
    'layout-without-nav': path.resolve(dirVars.layoutDir, 'layout-without-nav/html'),

    /* config */
    bootstrapConfig: path.resolve(dirVars.coreConfigDir, 'bootstrap.config'),
  },

  // 当require的模块找不到时，尝试添加这些后缀后进行寻找
  extentions: ['', 'js'],
};
