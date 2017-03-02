const helpers = require('../helpers');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = {
   devtool: 'inline-source-map',
   resolve: {
      extensions: ['.ts', '.js'],
      modules: [helpers.root('src'), 'node_modules']
   },
   module: {
      rules: [
         {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader',
            exclude: [
               // these packages have problems with their sourcemaps
               helpers.root('node_modules/rxjs'),
               helpers.root('node_modules/@angular')
            ]
         },
         {
            test: /\.ts$/,
            use: [
               {
                  loader: 'awesome-typescript-loader',
                  query: {
                     // use inline sourcemaps for "karma-remap-coverage" reporter
                     sourceMap: false,
                     inlineSourceMap: true,
                     compilerOptions: {

                        // Remove TypeScript helpers to be injected
                        // below by DefinePlugin
                        removeComments: true

                     }
                  },
               },
               'angular2-template-loader'
            ],
            exclude: [/\.e2e\.ts$/]
         },
         {
            test: /\.json$/,
            loader: 'json-loader',
            exclude: [helpers.root('src/index.html')]
         },
         {
            test: /\.css$/,
            loader: ['to-string-loader', 'css-loader'],
            exclude: [helpers.root('src/index.html')]
         },
         {
            test: /\.scss$/,
            exclude: '/node_modules/',
            loaders: ['raw-loader', 'sass-loader']
         },
         {
            test: /\.html$/,
            loader: 'raw-loader',
            exclude: [helpers.root('src/index.html')]
         },
         {
            enforce: 'post',
            test: /\.(js|ts)$/,
            loader: 'istanbul-instrumenter-loader',
            include: helpers.root('src'),
            exclude: [
               /\.(e2e|spec)\.ts$/,
               /node_modules/
            ]
         }

      ]
   },
   plugins: [
      new DefinePlugin({
         'ENV': JSON.stringify(ENV),
         'HMR': false,
         'process.env': {
            'ENV': JSON.stringify(ENV),
            'NODE_ENV': JSON.stringify(ENV),
            'HMR': false,
         }
      }),
      new ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('src'), // location of your src
            {
               // your Angular Async Route paths relative to this root directory
            }
      ),
      new LoaderOptionsPlugin({
         debug: false,
         options: {
            // legacy options go here
         }
      })
   ],
   performance: {
      hints: false
   },
   node: {
      global: true,
      process: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
   }
};