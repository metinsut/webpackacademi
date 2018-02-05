const commonPath = require("./common-path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: commonPath.appEntry,
  output: {
    filename: "main.js",
    path: commonPath.outputPath
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin()]
};

module.exports = config;
