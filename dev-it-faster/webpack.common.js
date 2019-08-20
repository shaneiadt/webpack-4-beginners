const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = {
    entry: {
        home: './src/index.js',
        misc: './src/a-different-entry-file.js'
    },
    plugins: [new HtmlWebpackPlugin()]
}

module.exports = {
    options
}