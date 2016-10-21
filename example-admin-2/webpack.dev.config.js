const config = Object.assign(require('../core/_webpack.dev.config.js'), {
  entry: require('./webpack-config/entry.config.js'),
  output: require('./webpack-config/output.config.js'),
});

config.resolve.alias = Object.assign(config.resolve.alias, require('./webpack-config/alias.config.js'));
config.plugins = config.plugins.concat(require('./webpack-config/plugins.config.js'));
config.module.preLoaders = config.module.preLoaders.concat(require('./webpack-config/module/pre-loaders.config.js'));
config.module.loaders = config.module.loaders.concat(require('./webpack-config/module/loaders.config.js'));

module.exports = config;
