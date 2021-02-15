const webpack = require('webpack')
const TerserPlugin = require("terser-webpack-plugin")
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: './app.js',
  output: {
    filename: './build.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      parallel: true,
    })],
  },
  devServer: {
    contentBase: '.',
    compress: true,
    port: 9000,
  },
}