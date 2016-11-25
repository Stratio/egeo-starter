@Library('libpipelines@feature/multibranch') _

hose {
   EMAIL = 'egeo'
   MODULE = 'egeo-starter'
   DEVTIMEOUT = 30
   RELEASETIMEOUT = 30
   REPOSITORY = 'egeo-starter'

   DEV = { config ->

      doCompile(config)
      doUT(config)
      doDeploy(config)
   }
}
