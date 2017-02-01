// 'app/modules/*' routes are configured to be recognized by tsconfig.json
// for any other route it is needed to be added to tsconfig.json too
const appModules = {
   '@starter/shared':   'app/modules/shared',
   '@starter/core':     'app/modules/core',
   "@starter/example":  'app/modules/example'
};

exports.appModules = function() {
   return appModules;
};
