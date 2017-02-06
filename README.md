# ng-bootstrap-tsickle-build
A tsickled-ES6 distribution of ng-bootstrap

Steps to build:
- clone mlaval/ng-bootstrap, and cd into it
- `git checkout ng2.4.6`
- `npm install`
- add the following tsconfig.json file in the src folder:
```
{
  "compilerOptions": {
    "target": "es6",
    "module": "es2015",
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "declaration": true,
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
- `node node_modules/@angular/tsc-wrapped/src/main -p src/tsconfig.json`
- in all generated files:
  - replace `from '@angular/core'` by `from '@angular/core/index'`
  - replace `from '@angular/common'` by `from '@angular/common/index'`
  - replace `from '@angular/forms'` by `from '@angular/forms/index'`
- copy the content of tmp/ng-bootstrap to here
- create package.json as follows:
```
{
  "name": "@ng-bootstrap/ng-bootstrap",
  "version": "1.0.0-alpha.20",
  "description": "Angular 2 powered Bootstrap",
  "keywords": "Angular 2 Angular2 Bootstrap autocomplete accordion alert buttons carousel collapse dropdown pagination popover progressbar rating tabset timepicker tooltip typeahead",
  "author": "https://github.com/ng-bootstrap/ng-bootstrap/graphs/contributors",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ng-bootstrap/ng-bootstrap.git"
  },
  "license": {
    "type": "MIT",
    "url": "https://raw.githubusercontent.com/ng-bootstrap/ng-bootstrap/master/LICENSE"
  },
  "bugs": {
    "url": "https://github.com/ng-bootstrap/ng-bootstrap/issues"
  },
  "homepage": "https://github.com/ng-bootstrap/ng-bootstrap#readme",
  "main": "bundles/ng-bootstrap.js",
  "module": "index.js",
  "typings": "index.d.ts",
  "peerDependencies": {
    "@angular/core": "^2.4.6",
    "@angular/common": "^2.4.6",
    "@angular/forms": "^2.4.6"
  }
}
```
