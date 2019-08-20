const webpackCommon = require('./webpack.common')

module.exports = {
    ...webpackCommon['options'],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: __dirname + '/dist',
        port: 9000
    }
}