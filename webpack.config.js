'use strict';

var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlwebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToBootstarp = path.resolve(node_modules, 'bootstrap/dist/');

var config = {
  entry: {
    "entry": './public/main.js',
    "vendors": ['bootstrap.css', 'react', 'react-dom', 'react-bootstrap', 'font-awesome.css']
  },
  output: {
    path: __dirname + '/build/assets/',
    filename: '[chunkhash:8].[name].js',
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: '/tw-ra/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=10000&name=build/[name].[ext]'
      }
    ],
    noParse: [pathToBootstarp]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDom: 'react-dom'
    }),
    new ExtractTextPlugin("[chunkhash:8].[name].css"),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.DefinePlugin({
      URI_PREFIX: JSON.stringify('/tw-ra')
    }),
  ],
  resolve: {
    alias: {
      'bootstrap.css': 'bootstrap/dist/css/bootstrap.min.css',
      'bootstrap.js': 'bootstrap/dist/css/bootstrap.min.js',
      'font-awesome.css': 'font-awesome/css/font-awesome.min.css',
      'ie': 'component-ie'
    }
  }
};

function htmlwebpackPluginBuilder(fileName, deps) {
  return new HtmlwebpackPlugin({
    filename: fileName,
    minify: {collapseWhitespace: true},
    template: __dirname + '/' + fileName,
    inject: true,
    chunks: deps
  })
}

(function webpackByEnv() {
  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    );
  } else {
    config.devtool = '#cheap-source-map';
  }
})();

config.plugins.push(htmlwebpackPluginBuilder('index.html', ['vendors', 'entry']));

module.exports = config;
