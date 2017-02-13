// 'app/modules/*' routes are configured to be recognized by tsconfig.json
// for any other route it is needed to be added to tsconfig.json too
const appModules = {
   '@starter/core': 'app/modules/core',
   '@starter/errors': 'app/modules/errors',
   '@starter/example': 'app/modules/examples',
   '@starter/layout': 'app/modules/layout',
   '@starter/resources': 'app/modules/resources',
   '@starter/shared': 'app/modules/shared'
};

exports.appModules = function () {
   return appModules;
};
