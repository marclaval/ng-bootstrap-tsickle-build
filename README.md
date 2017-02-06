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
- `./node_modules/.bin/ngc -p src --declaration`
- delete the line `"declaration": true,` in the tsconfig.json file
- `./node_modules/.bin/tsickle -- -p src`
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
    "@angular/core": "^2.3.1",
    "@angular/common": "^2.3.1",
    "@angular/forms": "^2.3.1"
  }
}
```
