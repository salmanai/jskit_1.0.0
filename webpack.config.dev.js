// import webpack from 'webpack';
var webpack = require('webpack')
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [path.resolve(__dirname, 'public/index')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    // new webpack.LoaderOptionsPlugin({
    //   debug: false,
    //   noInfo: true
    // })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
};
