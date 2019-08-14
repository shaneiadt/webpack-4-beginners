const webpackCommon = require('./webpack.common')

module.exports = {
    ...webpackCommon['options'],
    mode: 'development'
}