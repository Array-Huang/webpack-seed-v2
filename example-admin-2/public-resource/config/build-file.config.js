require('!!file-loader?name=index.html!../../index.html');
const config = require('coreConfigDir/build-file.config');
module.exports = Object.assign(config, {
  images: {
    'login-bg': require('!!file-loader?name=static/images/[name].[ext]!../imgs/login-bg.jpg'),
  },
});
