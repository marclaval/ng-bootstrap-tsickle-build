goog.module('tmp.ng_bootstrap.tabset.tabset_config'); exports = {}; var module = {id: 'tmp/ng-bootstrap/tabset/tabset-config.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
const Injectable = Injectable; /* local alias for Closure JSDoc */
/**
 * Configuration service for the NgbTabset component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tabsets used in the application.
 */
export let NgbTabsetConfig = class NgbTabsetConfig {
    constructor() {
        this.justify = 'start';
        this.type = 'tabs';
    }
};
NgbTabsetConfig = __decorate([
    /* local alias for Closure JSDoc */ Injectable(), 
    __metadata('design:paramtypes', [])
], NgbTabsetConfig);
function NgbTabsetConfig_tsickle_Closure_declarations() {
    /** @type {string} */
    NgbTabsetConfig.prototype.justify;
    /** @type {string} */
    NgbTabsetConfig.prototype.type;
}
//# sourceMappingURL=tabset-config.js.map