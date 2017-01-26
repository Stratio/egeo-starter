const helpers = require('../helpers');
const webpack = require('webpack');

const AssetsPlugin = require('assets-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const StringReplacePlugin = require("string-replace-webpack-plugin");

const alias = require(helpers.root('src/alias'));

var config = {
   entry: {
      'app': './src/main.ts',
      'polyfills': './src/polyfills.ts',
      'vendor': './src/vendor.ts'
   },
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: [
               'awesome-typescript-loader',
               'angular2-template-loader',
               'angular-router-loader'
            ],
            exclude: [/\.(spec|e2e)\.ts$/]
         },
         {
            test: /\.json$/,
            use: 'json-loader'
         },
         {
            test: /\.html$/,
            use: 'raw-loader',
            exclude: [helpers.root('src/index.html')]
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.scss$/,
            exclude: '/node_modules/',
            use: ['raw-loader', 'sass-loader']
         },
         {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            use: "url-loader?limit=10000&minetype=application/font-woff"
         },
         {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            use: "url-loader?limit=10000&minetype=application/font-woff"
         },
         {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: "url-loader?limit=10000&minetype=application/octet-stream"
         },
         {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: "file-loader"
         },
         {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: "url-loader?limit=10000&minetype=image/svg+xml"
         },
         {
            test: /\.ico(\?v=\d+\.\d+\.\d+)?$/,
            use: "file-loader"
         }
      ]
   },
   plugins: [
      new AssetsPlugin({
         path: helpers.root('dist'),
         filename: 'webpack-assets.json',
         prettyPrint: true
      }),
      new StringReplacePlugin(),
      new CommonsChunkPlugin({
         name: ['polyfills', 'vendor'].reverse()
      }),
      new ContextReplacementPlugin(
         /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
         helpers.root('src'),
         {
         }
      ),
      new CopyWebpackPlugin([
         { from: 'src/assets', to: 'assets' }
      ]),
      new HtmlWebpackPlugin({
         template: 'src/index.html'
      }),
      new NormalModuleReplacementPlugin(
         /facade(\\|\/)async/,
         helpers.root('node_modules/@angular/core/src/facade/async.js')
      ),
      new NormalModuleReplacementPlugin(
         /facade(\\|\/)collection/,
         helpers.root('node_modules/@angular/core/src/facade/collection.js')
      ),
      new NormalModuleReplacementPlugin(
         /facade(\\|\/)errors/,
         helpers.root('node_modules/@angular/core/src/facade/errors.js')
      ),
      new NormalModuleReplacementPlugin(
         /facade(\\|\/)lang/,
         helpers.root('node_modules/@angular/core/src/facade/lang.js')
      ),
      new NormalModuleReplacementPlugin(
         /facade(\\|\/)math/,
         helpers.root('node_modules/@angular/core/src/facade/math.js')
      )
   ],
   performance: {
      hints: false
   },
   resolve: {
      alias: alias.appModules(),
      extensions: ['.js', '.ts'],
      modules: [
         helpers.root('node_modules'),
         helpers.root('src')
      ]
   }
};

module.exports = config;
