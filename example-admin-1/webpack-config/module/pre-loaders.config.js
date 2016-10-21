const dirVars = require('../base/dir-vars.config.js');
const includeDirs = [dirVars.srcRootDir];

module.exports = [{
  test: /\.js$/,
  loader: 'eslint',
  include: includeDirs,
  exclude: [/bootstrap/],
}];
