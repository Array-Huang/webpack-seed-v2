var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var dirVars = require('../base/dir-vars.config.js');

var configPlugins = [
  /* 全局shimming */
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
  }),
  /* 抽取出所有通用的部分 */
  new webpack.optimize.CommonsChunkPlugin({
    name: 'commons/commons',      // 需要注意的是，chunk的name不能相同！！！
    filename: '[name]/bundle.js',
    minChunks: 4,
  }),
  /* 抽取出chunk的css */
  new ExtractTextPlugin('[name]/styles.css'),
  /* 配置好Dll */
  new webpack.DllReferencePlugin({
    context: dirVars.staticRootDir, // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
    manifest: require('../../manifest.json'), // 指定manifest.json
    name: 'dll',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  }),
];

module.exports = configPlugins;
