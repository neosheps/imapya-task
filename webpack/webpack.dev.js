const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    host: 'localhost',
    historyApiFallback: true,
    inline: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});