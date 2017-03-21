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

const helpers = require('../helpers');

const AssetsPlugin = require('assets-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const StringReplacePlugin = require("string-replace-webpack-plugin");

let plugins = [
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
      { }
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
];

module.exports = plugins;
