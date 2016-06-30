var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    output: {
        filename: 'bundle.min.js'
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /\.html$/, loader: 'html' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!sass-loader') }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.min.css"),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: { warnings: false }
        })
    ]
};