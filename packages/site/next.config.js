const withPlugins = require('next-compose-plugins')
const withTM = require('./withTM')(['@nextapp/sample'], {
    unstable_webpack5: true
});


module.exports = withPlugins([withTM], {

});
