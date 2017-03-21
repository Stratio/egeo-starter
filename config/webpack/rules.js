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

let rules = [
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
];

module.exports = rules;
