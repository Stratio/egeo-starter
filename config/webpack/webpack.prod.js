const common = require('./webpack.common.js');
const helpers = require('../helpers');
const webpackMerge = require('webpack-merge');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');

var config = {
   devtool: 'source-map',
   node: {
      clearImmediate: false,
      crypto: 'empty',
      global: true,
      module: false,
      process: false,
      setImmediate: false
   },
   output: {
      chunkFilename: '[id].[chunkhash].chunk.js',
      filename: '[name].[chunkhash].bundle.js',
      path: helpers.root('dist'),
      sourceMapFilename: '[name].[chunkhash].bundle.map'
   },
   plugins: [
      new WebpackMd5Hash(),
      new DefinePlugin({
         'ENV': "production",
         'HMR': false,
         'process.env': {
            'ENV': "production",
            'NODE_ENV': "production",
            'HMR': false
         }
      }),
      new UglifyJsPlugin({
         beautify: false,
         compress: {
            comparisons: true,
            conditionals: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
            negate_iife: false,
            screw_ie8: true,
            sequences: true,
            unused: true,
            warnings: false
         },
         mangle: {
            screw_ie8: true
         },
         output: {
            comments: false
         }
      }),
      new NormalModuleReplacementPlugin(
         /angular2-hmr/,
         helpers.root('config/empty.js')
      ),
      new NormalModuleReplacementPlugin(
         /zone\.js(\\|\/)dist(\\|\/)long-stack-trace-zone/,
         helpers.root('config/empty.js')
      ),
      new LoaderOptionsPlugin({
         debug: false,
         minimize: true,
         options: {
            htmlLoader: {
               caseSensitive: true,
               customAttrAssign: [/\)?\]?=/],
               customAttrSurround: [
                  [/#/, /(?:)/],
                  [/\*/, /(?:)/],
                  [/\[?\(?/, /(?:)/]
               ],
               minimize: true,
               removeAttributeQuotes: false
            }
         }
      })
   ]
}

module.exports = webpackMerge(common, config);
