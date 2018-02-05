const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: "source-map",
    module: {
        rules: [
            {
                test:/\.css/,
                use: ExtractTextWebpackPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin("style.css"),
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
};