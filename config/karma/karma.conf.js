const webpack = require('webpack');

module.exports = function (config) {
   var configuration = {
      autoWatch: false,
      basePath: '',
      browserDisconnectTimeout: 10000,
      browserDisconnectTolerance: 1,
      browserNoActivityTimeout: 30000,
      browsers: ['PhantomJS'],
      colors: true,
      exclude: [],
      failOnEmptyTestSuite: false,
      files: [{ pattern: './config/karma/spec-bundle.js', watched: false }],
      frameworks: ['jasmine'],
      logLevel: config.LOG_INFO,
      phantomJsLauncher: {
         exitOnResourceError: true
      },
      preprocessors: { './config/karma/spec-bundle.js': ['webpack', 'sourcemap'] },
      port: 9876,
      reporters: ['progress'],
      singleRun: true,
      webpack: webpack.config,
      webpackMiddleware: { stats: 'errors-only' }
   };

   config.set(configuration);
};
