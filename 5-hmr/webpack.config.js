var webpack = require("webpack");

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
            test: /\.scss$/,
            loaders: ["style", "css?sourceMap", "sass?sourceMap"]
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("commons", "commons.js")
    ]
}
