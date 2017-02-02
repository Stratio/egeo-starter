// 'app/modules/*' routes are configured to be recognized by tsconfig.json
// for any other route it is needed to be added to tsconfig.json too
const appModules = {
   '@starter/core':     'app/modules/core',
   '@starter/errors':   'app/modules/errors',
   '@starter/example':  'app/modules/example',
   '@starter/shared':   'app/modules/shared'
};

exports.appModules = function() {
   return appModules;
};
