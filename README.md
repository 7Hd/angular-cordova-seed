# Angular Cordova Seed

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## How to Create Seed Project

### Create Project

```sh
# install cordova and angular-cli
npm i -g cordova @angular/cli

# use angular-cli create project
ng new angular-cordova-seed

# use cordova create project
cordova create cordova-seed

# move all cordova-seed/ files to angular-cordova-seed/

```

### Build Script

```json
{
  "scripts": {
    "build:prob": "ng build -prod --aot --environment=prod --output-path www/ --base-href .",
    "build:dev": "ng build -dev --sourcemaps --verbose --output-path www/ --base-href .",
    "run:cordova:android": "cordova run android",
    "build:cordova:android": "cordova build android",
    "run:android": "npm run build:prob && npm run run:cordova:android",
    "build:android": "npm run build:prob && cordova build android",
    "postinstall": "mkdirp www && cordova prepare"
  }
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
