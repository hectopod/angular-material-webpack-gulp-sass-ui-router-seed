var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /\.html$/, loader: 'html' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]
};