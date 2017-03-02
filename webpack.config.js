let env = 'dev';

switch (process.env.NODE_ENV) {
   case 'prod':
   case 'production':
      env = 'prod';
      break;
   case 'test':
   case 'testing':
      env = 'test';
}

module.exports = require('./config/webpack/webpack.'+env);
