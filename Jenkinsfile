@Library('libpipelines@feature/multibranch') _

hose {
   EMAIL = 'egeo'
   MODULE = 'egeo-starter'
   REPOSITORY = 'egeo-starter'

   DEVTIMEOUT = 30
   RELEASETIMEOUT = 30

   DEV = { config ->
      doCompile(config)
      doUT(config)
      doDeploy(config)
   }
}
