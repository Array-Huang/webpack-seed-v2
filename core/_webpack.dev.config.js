/* 整理基础设施的webpack配置，供具体项目继承 */
module.exports = {
  module: require('./webpack-config/module.config.js'),
  resolve: require('./webpack-config/resolve.config.js'),
  plugins: require('./webpack-config/plugins.dev.config.js'),
  eslint: require('./webpack-config/vendor/eslint.config.js'),
  postcss: require('./webpack-config/vendor/postcss.config.js'),
};
