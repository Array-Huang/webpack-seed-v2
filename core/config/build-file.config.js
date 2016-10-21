module.exports = {
  js: {
    xdomain: require('!!file-loader?name=static/js/[name].[ext]!vendorDir/ie-fix/xdomain.all.js'),
    html5shiv: require('!!file-loader?name=static/js/[name].[ext]!vendorDir/ie-fix/html5shiv.min.js'),
    respond: require('!!file-loader?name=static/js/[name].[ext]!vendorDir/ie-fix/respond.min.js'),
  },
  dll: {
    js: require('!!file-loader?name=dll/dll.js!dllDir/dll.js'),
    css: require('!file-loader?name=dll/dll.css!dllDir/dll.css'),
  },
};
