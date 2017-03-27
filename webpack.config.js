const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    app: './app.js',
    vendor: './vendor.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss|.css$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {test: /\.html$/, loader: 'html'},
      {test: /\.json$/, loader: 'json'},
      {test: /(\.(?:eot|woff|woff2|ttf|svg))/, loader: 'file-loader?name=font/[name].[ext]'},
      {test: /\.(jpe?g|png|gif)$/, loader: 'file-loader?name=img/[name].[ext]'},
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.bundle.css')
  ]
};

