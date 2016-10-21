const clean = require('../../npm-scripts/clean-dirs.script.js');
const dirVars = require('../webpack-config/base/dir-vars.config.js');
clean([dirVars.buildDir]);
