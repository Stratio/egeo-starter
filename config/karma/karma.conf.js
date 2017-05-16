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

const alias = require(path.resolve(process.cwd(), 'src/alias'));

module.exports = function(config) {
   config.set({
      autoWatch: false,
      browsers: [ 'PhantomJS' ],
      failOnEmptyTestSuite: false,
      files: [
         { pattern: path.resolve(process.cwd(), 'config/karma/base.spec.ts') },
         { pattern: path.resolve(process.cwd(), 'src/**/*.+(ts|html)') }
      ],
      frameworks: [ 'jasmine', 'karma-typescript' ],
      karmaTypescriptConfig: {
         bundlerOptions: {
            directories: [
               path.resolve(process.cwd(), 'node_modules'),
               path.resolve(process.cwd(), 'src')
            ],
            entrypoints: /\.spec\.ts$/,
            resolve: {
               alias: alias.appModules()
            },
            transforms: [
               require("karma-typescript-angular2-transform")
            ]
         },
         compilerOptions: {
            baseUrl: path.resolve(process.cwd(), 'src'),
            lib: [ "ES2015", "DOM" ],
            paths: {
               "@app/*": [ "app/modules/*" ]
            }
         },
         coverageOptions: {
            exclude: /(\.d|\.spec|\.module|barrels|public_api)\.ts/i,
            instrumentation: true
         },
         reports: {
            'text-summary': null,
            'html': './target/coverage/html',
            'json': './target/coverage',
            'lcovonly': './target/lcovUT.info'
         }
      },
      logLevel: config.LOG_INFO,
      phantomJsLauncher: {
         exitOnResourceError: true
      },
      preprocessors: {
         "**/*.ts": [ "karma-typescript" ]
      },
      reporters: [ "progress", "karma-typescript" ],
      singleRun: true
   });
};
