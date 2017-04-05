/*
 * Copyright (C) 2016 Stratio (http://stratio.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// let env = 'dev';

// switch (process.env.NODE_ENV) {
//    case 'prod':
//    case 'production':
//       env = 'prod';
//       break;
//    case 'test':
//    case 'testing':
//       env = 'test';
// }

// let config = {
//    devServer: require('./config/webpack/dev-server'),
//    entry: require('./config/webpack/'+env+'/entry'),
//    module: {
//       rules: require('./config/webpack/'+env+'/rules')
//    },
//    performance: {
//       hints: false
//    },
//    output: require('./config/webpack/'+env+'/output'),
//    plugins: require('./config/webpack/'+env+'/plugins'),
//    resolve: require('./config/webpack/resolve')
// };

// module.exports = config;


const path = require('path');
const ngtools = require('@ngtools/webpack');
const webpack = require("webpack");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
   devtool: 'sourcemap',
   resolve: {
      extensions: ['.ts', '.js']
   },
   entry: {
      main: './src/main.ts',
      polyfills: './src/polyfills.ts',
      vendor: './src/vendor.ts'
   },
   output: {
      path: path.join(process.cwd(), 'dist'),
      filename: "[name].js"
   },
   plugins: [
      new CopyWebpackPlugin([
         { from: './src/index.html' }
      ]),
      new ngtools.AotPlugin({
         tsConfigPath: './tsconfig.json',
         mainPath: "./src/main.ts"
      }),
      new CommonsChunkPlugin({
         names: [
            'vendor',
            'polyfills'
         ]
      }),
      new CommonsChunkPlugin({
         async: true
      })
   ],
   module: {
      loaders: [
         {
            test: /\.ts$/,
            loader: '@ngtools/webpack'
         },
         {
            test: /\.css$/,
            loader: 'style-loader'
         }
      ]
   },

   devServer: {
      historyApiFallback: true
   }
};
