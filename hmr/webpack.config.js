var path = require('path');
var webpack = require("webpack");
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

// console.log("webpack.HotModuleReplacementPlugin", webpack.HotModuleReplacementPlugin);

module.exports = {
    entry: ["./entry.js"],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }]
    }
}
