// 'app/modules/*' routes are configured to be recognized by tsconfig.json
// for any other route it is needed to be added to tsconfig.json too
const appModules = {
   '@starter/common':   'app/modules/common',
   '@starter/core':     'app/modules/core'
};

exports.appModules = function() {
   return appModules;
};
