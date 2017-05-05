/* eslint-env node */
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

module.exports = {
  context: __dirname,

  entry: {
    loader: './app.js',
  },

  output: {
    path: path.join(__dirname, 'build', 'js'),
    publicPath: '/build/js/',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /(\.js|\.ts|\.tsx)?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules\/intl-.*)/,
        loader: 'source-map-loader'
      },
      {
        enforce: 'post',
        test: /\.js?$/,
        exclude: /(node_modules|bower_components|dist)/,
        loader: 'babel-loader'
      }
    ]
  },

  devServer: {
    host: '0.0.0.0',
    port: 3010,
    inline: true
  }

};

