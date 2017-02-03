# ng-bootstrap-tsickle-build
A tsickled-ES6 distribution of ng-bootstrap

Steps to build:
- clone ng-bootstrap, and cd into it
- `npm install tsickle`
- add the following tsconfig.json file in the src folder:
```
{
  "compilerOptions": {
    "target": "es6",
    "module": "es2015",
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "baseUrl": ".",
    "stripInternal": true,
    "outDir": "../tmp/ng-bootstrap",
    "rootDir": ".",
    "sourceMap": true,
    "inlineSources": true,
    "skipLibCheck": true,
    "lib": ["es2015", "dom"]
  },
  "files": [
    "./index.ts"
  ],
  "angularCompilerOptions": {
    "annotationsAs": "static fields",
    "annotateForClosureCompiler": true
  }
}

```
- `./node_modules/.bin/ngc -p src --declaration`
- `./node_modules/.bin/tsickle -- -p src`
- copy the content of tmp/ng-bootstrap to here
- create package.json as follows:
```
{
  "_args": [
    [
      {
        "raw": "@ng-bootstrap/ng-bootstrap@1.0.0-alpha.19",
        "scope": "@ng-bootstrap",
        "escapedName": "@ng-bootstrap%2fng-bootstrap",
        "name": "@ng-bootstrap/ng-bootstrap",
        "rawSpec": "1.0.0-alpha.19",
        "spec": "1.0.0-alpha.19",
        "type": "version"
      },
      "/Users/mlaval/dev/github/playground/optimize-angular-app"
    ]
  ],
  "_from": "@ng-bootstrap/ng-bootstrap@1.0.0-alpha.19",
  "_id": "@ng-bootstrap/ng-bootstrap@1.0.0-alpha.19",
  "_inCache": true,
  "_installable": true,
  "_location": "/@ng-bootstrap/ng-bootstrap",
  "_nodeVersion": "5.4.1",
  "_npmOperationalInternal": {
    "host": "packages-18-east.internal.npmjs.com",
    "tmp": "tmp/ng-bootstrap-1.0.0-alpha.19.tgz_1485336133935_0.11767635657452047"
  },
  "_npmUser": {
    "name": "ng-bootstrap",
    "email": "foxandxss@gmail.com"
  },
  "_npmVersion": "3.5.3",
  "_phantomChildren": {},
  "_requested": {
    "raw": "@ng-bootstrap/ng-bootstrap@1.0.0-alpha.19",
    "scope": "@ng-bootstrap",
    "escapedName": "@ng-bootstrap%2fng-bootstrap",
    "name": "@ng-bootstrap/ng-bootstrap",
    "rawSpec": "1.0.0-alpha.19",
    "spec": "1.0.0-alpha.19",
    "type": "version"
  },
  "_requiredBy": [
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/@ng-bootstrap/ng-bootstrap/-/ng-bootstrap-1.0.0-alpha.19.tgz",
  "_shasum": "42792956be72c16d69a8d9ff57ef225b96af070a",
  "_shrinkwrap": null,
  "_spec": "@ng-bootstrap/ng-bootstrap@1.0.0-alpha.19",
  "_where": "/Users/mlaval/dev/github/playground/optimize-angular-app",
  "author": {
    "name": "https://github.com/ng-bootstrap/ng-bootstrap/graphs/contributors"
  },
  "bugs": {
    "url": "https://github.com/ng-bootstrap/ng-bootstrap/issues"
  },
  "dependencies": {},
  "description": "Angular 2 powered Bootstrap",
  "devDependencies": {},
  "directories": {},
  "dist": {
    "shasum": "42792956be72c16d69a8d9ff57ef225b96af070a",
    "tarball": "https://registry.npmjs.org/@ng-bootstrap/ng-bootstrap/-/ng-bootstrap-1.0.0-alpha.19.tgz"
  },
  "homepage": "https://github.com/ng-bootstrap/ng-bootstrap#readme",
  "keywords": [
    "Angular 2 Angular2 Bootstrap autocomplete accordion alert buttons carousel collapse dropdown pagination popover progressbar rating tabset timepicker tooltip typeahead"
  ],
  "license": {
    "type": "MIT",
    "url": "https://raw.githubusercontent.com/ng-bootstrap/ng-bootstrap/master/LICENSE"
  },
  "main": "bundles/ng-bootstrap.js",
  "maintainers": [
    {
      "name": "ng-bootstrap",
      "email": "foxandxss@gmail.com"
    }
  ],
  "module": "index.js",
  "name": "@ng-bootstrap/ng-bootstrap",
  "optionalDependencies": {},
  "peerDependencies": {
    "@angular/core": "^2.3.1",
    "@angular/common": "^2.3.1",
    "@angular/forms": "^2.3.1"
  },
  "readme": "ERROR: No README data found!",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ng-bootstrap/ng-bootstrap.git"
  },
  "scripts": {},
  "typings": "index.d.ts",
  "version": "1.0.0-alpha.19"
}
```
