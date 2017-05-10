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

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let rules = [
   {
      exclude: [/\.(spec|e2e)\.ts$/],
      test: /\.ts$/,
      use: '@ngtools/webpack'
   },
   {
      test: /\.html$/,
      use: 'raw-loader'
   },
   {
      include: [ path.resolve(process.cwd(), 'src/app') ],
      test: /\.scss$/,
      use: [
         'raw-loader',
         'sass-loader'
      ]
   },
   {
      include: [
         path.resolve(process.cwd(), 'node_modules'),
         path.resolve(process.cwd(), 'src/styles')
      ],
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         use: [
            'css-loader',
            'sass-loader'
         ]
      })
   },
   {
      test: /\.(jpg|png|gif)$/,
      use: 'file-loader'
   },
   {
      test: /\.(ttf|eot|svg|woff|woff2|ico)$/,
      use: 'file-loader?name=assets/fonts/[name].[ext]'
   }
];

module.exports = rules;
