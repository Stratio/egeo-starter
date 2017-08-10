<div align="center">
<img src="https://github.com/Stratio/egeo-web/blob/master/src/assets/images/egeo_logo_c.png">
</div>

# Egeo-starter

egeo-starter is an starter for Angular 2+ applications that includes the [Egeo Library of components](https://github.com/Stratio/egeo) developed by [Stratio](http://www.stratio.com). This starter is ready to work with AoT, Karma, Docker, setting its strengths in performance, testing and deployment. This project is developed using [angular-cli](https://cli.angular.io/)

It is even possible to connect dinamically the webapp with the server side through Docker configuration. Read about this feature and much more in [the wiki of the project](https://github.com/Stratio/egeo-starter/wiki).

But this is only a part of the Egeo project. Check the rest of our reports to know more about:

* [egeo](https://github.com/Stratio/egeo): the library of components used to build Stratio's applications.
* [egeo-web](https://github.com/Stratio/egeo-web): The official website of Egeo where documentation will be available soon.
* [egeo-ui-base](https://github.com/Stratio/egeo-ui-base): A Sass library that helps us to build our styles, including a rewritten Sass version of [flexboxgrid](http://flexboxgrid.com/).
* [egeo-theme](https://github.com/Stratio/egeo-theme): The egeo components are thematizable. This is the official theme used in the Stratio's applications.

## Table of contents

* [About this repo](#about-this-repo)
* [Getting Started](#getting-started)
   * [Dependencies](#dependencies)
   * [Installing](#installing)
   * [Work with the code](#work-with-the-code)
   * [How to run](#how-to-run)
   * [How to test](#how-to-test)
   * [How to build](#how-to-build)
   * [How to run container](#How-to-run-container)
* [Contributing](#contributing)
* [License](#license)

## About this Repo

This repo includes the whole needed to begin a new Angular 2+ App, including unit testing platform with Karma, deploy environment with docker and the library of components of Egeo all of them based on angular-cli development.

* [Egeo Documentation website](http://egeo.stratio.com)

## Getting Started

### Dependencies

What you need to run this app:
* [`node`](https://nodejs.org/es/) and `npm`
* Ensure you're running at least versions of Node `v6.x.x` and NPM `3.x.x`

### Installing

You can install egeo-starter from npm:

```
npm i @stratio/egeo-starter
```

### Work with the code

You can use Npm or Yarn to work with the starter. If you want to use Yarn, it has to be installed first as a global dependency in your local machine.

```
sudo npm i -g yarn
```

Once Yarn is installed or Npm is ready, you can install dependencies using:

```
yarn
```

or

```
npm install
```

### How to Run

To run egeo-starter locally you must use this commands.

```
yarn start
```

or

```
npm run start
```

### How to Test

There is a command to start the karma server and launch the whole tests written.

```
yarn test
```

or

```
npm run test
```

It is possible to run an individual test to avoid run the whole suite.

```
npm run test --component=st-two-list
```

### How to Build

If you want to build a distributable package you must use the `build` command. This will create a **dist** folder with the distributable code of the package.

```
yarn build
```

or

```
npm run build
```

### How to run container

If you want to build and run inside a docker container you must use the `startup.sh` script. This will create a **dist** folder with the distributable code of the package and copy inside a docker that run a nginx.

```
sh ./startup.sh
```

## Contributing

There are many ways to contribute to the egeo-starter project. [Check our contribution section in the Wiki to learn more](https://github.com/Stratio/egeo-starter/wiki/How-to-contribute).

## License

Egeo-starter is distributed under the Apache 2 license. You may obtain a copy of the license here at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
