/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
   config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular/cli'],
      plugins: [
         require('karma-jasmine'),
         require('karma-phantomjs-launcher'),
         require('karma-jasmine-html-reporter'),
         require('karma-coverage-istanbul-reporter'),
         require('@angular/cli/plugins/karma')
      ],
      client: {
         clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      coverageIstanbulReporter: {
         reports: ['html', 'lcovonly'],
         fixWebpackSourcePaths: true
      },
      angularCli: {
         environment: 'dev'
      },
      phantomJsLauncher: {
         exitOnResourceError: true
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['PhantomJS'],
      singleRun: false
   });
};
