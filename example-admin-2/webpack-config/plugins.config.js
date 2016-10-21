const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pageArr = require('./base/page-entries.config.js');
const dirVars = require('./base/dir-vars.config.js');
const configPlugins = [];

pageArr.forEach((page) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: `${page}/page.html`,
    template: path.resolve(dirVars.pagesDir, `./${page}/html.js`),
    chunks: [page, 'commons/commons'],
    hash: true, // 为静态资源生成hash值
    xhtml: true,
  });
  configPlugins.push(htmlPlugin);
});

module.exports = configPlugins;
