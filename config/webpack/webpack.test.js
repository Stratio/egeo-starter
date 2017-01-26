const common = require('./webpack.common');
const helpers = require('../helpers');
const path = require('path');
const webpackMerge = require('webpack-merge');

const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

var config = {
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
            enforce: 'pre',
            test: /\.js$/,
            use: 'source-map-loader',
            exclude: [
               helpers.root('node_modules/rxjs'),
               helpers.root('node_modules/@angular')
            ]
         },
         {
            test: /\.ts$/,
            use: 'awesome-typescript-loader',
            query: {
               sourceMap: false,
               inlineSourceMap: true,
               compilerOptions: {
                  removeComments: true
               }
            },
            exclude: [/\.e2e\.ts$/]
         },
         {
            test: /\.json$/,
            use: 'json-loader',
            exclude: [helpers.root('src/index.html')]
         },
         {
            test: /\.css$/,
            use: ['to-string-loader', 'css-loader'],
            exclude: [helpers.root('src/index.html')]
         },
         {
            test: /\.html$/,
            use: 'raw-loader',
            exclude: [helpers.root('src/index.html')]
         },
         {
            test: /\.scss$/,
            exclude: '/node_modules/',
            use: ['raw-loader', 'sass-loader', 'sass-loader?sourceMap']
         },
         {
            enforce: 'post',
            test: /\.(js|ts)$/,
            use: 'istanbul-instrumenter-loader',
            include: helpers.root('src'),
            exclude: [
               /\.(e2e|spec)\.ts$/,
               /node_modules/
            ]
         }
      ]
   },
   node: {
      global: true,
      process: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
   },
   plugins: [
      new ContextReplacementPlugin(
         /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
         helpers.root('src'),
         {
         }
      ),
      new LoaderOptionsPlugin({
         debug: true,
         options: {
         }
      })
   ],
   resolve: {
      extensions: ['.ts', '.js'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
   }
};

module.exports = webpackMerge(common, config);
