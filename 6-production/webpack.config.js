var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        bundle1: "./entry1.js",
        bundle2: "./entry2.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js",
        publicPath: "/public/",
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    },
    plugins: [
        // new webpack.NoErrorsPlugin(),
        //new webpack.optimize.UglifyJsPlugin([options]),

        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin("commons", "commons.js")
    ]
}
