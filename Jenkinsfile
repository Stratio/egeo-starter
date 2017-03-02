@Library('libpipelines@master') _

hose {
   EMAIL = 'egeo'
   MODULE = 'egeo-starter'
   REPOSITORY = 'github.com/egeo-starter'

   DEVTIMEOUT = 30
   RELEASETIMEOUT = 30

   PKGMODULESNAMES = ['egeo-starter']

   DEV = { config ->
      doCompile(config)
      doUT(config)
      doPackage(config)
      parallel(
         QC: {
            doStaticAnalysis(config)
         },
         DEPLOY: {
            doDeploy(config)
         },
         DOCKER: {
            doDocker(config)
         }
      )
   }
}
