const common = require('./webpack.common');
const helpers = require('../helpers');
const webpackMerge = require('webpack-merge');

const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const METADATA = {
   env: 'development',
   host: process.env.HOST || 'localhost',
   port: process.env.PORT || 3000
};

var config = {
   devServer: {
      clientLogLevel: "warning",
      historyApiFallback: true,
      host: METADATA.host,
      port: METADATA.port,
      proxy: {
         '/api': {
            target: 'http://localhost:9000/',
            secure: false
         }
      },
      stats: "errors-only"
   },
   devtool: 'cheap-module-source-map',
   node: {
      clearImmediate: false,
      crypto: 'empty',
      global: true,
      module: false,
      process: true,
      setImmediate: false
   },
   output: {
      chunkFilename: '[id].chunk.js',
      filename: '[name].js',
      library: 'ac_[name]',
      libraryTarget: 'var',
      path: helpers.root('dist'),
      sourceMapFilename: '[name].map'
   },
   plugins: [
      new LoaderOptionsPlugin({
         debug: true,
         options: {}
      }),
   ]
};

module.exports = webpackMerge(common, config);
