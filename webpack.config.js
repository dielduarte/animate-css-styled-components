const path = require('path');
const webpack = require('webpack');
const glob_entries = require('webpack-glob-entries')

module.exports = {
  entry: glob_entries('./src/**/*.js', '!./src/animations/BaseAnimation.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname),
    libraryTarget: 'umd'
  }
};
