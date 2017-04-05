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

'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin');
const NgToolsWebpack = require('@ngtools/webpack');
const path = require('path');
const webpack = require('webpack');

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

let plugins = [
   new CopyWebpackPlugin([
      { from: './src/index.html' }
   ]),
   new NgToolsWebpack.AotPlugin({
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
];

module.exports = plugins;
