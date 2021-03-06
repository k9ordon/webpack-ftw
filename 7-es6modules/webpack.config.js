var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ["./entry.es6.js"],
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.es6\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
        }]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
    ]
}
