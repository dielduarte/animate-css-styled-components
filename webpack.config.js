var path = require('path');

module.exports = {
  entry: './src/index.js',
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
    filename: 'index.js',
    path: path.resolve(__dirname),
    libraryTarget: 'umd'
  }
};
