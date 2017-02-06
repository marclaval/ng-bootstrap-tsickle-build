goog.module('_ng_bootstrap.ng_bootstrap.progressbar.progressbar_config'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
 * Configuration service for the NgbProgressbar component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */
export let NgbProgressbarConfig = class NgbProgressbarConfig {
    constructor() {
        this.max = 100;
        this.animated = false;
        this.striped = false;
        this.showValue = false;
    }
};
NgbProgressbarConfig = __decorate([
    /* local alias for Closure JSDoc */ Injectable(), 
    __metadata('design:paramtypes', [])
], NgbProgressbarConfig);
function NgbProgressbarConfig_tsickle_Closure_declarations() {
    /** @type {number} */
    NgbProgressbarConfig.prototype.max;
    /** @type {boolean} */
    NgbProgressbarConfig.prototype.animated;
    /** @type {boolean} */
    NgbProgressbarConfig.prototype.striped;
    /** @type {string} */
    NgbProgressbarConfig.prototype.type;
    /** @type {boolean} */
    NgbProgressbarConfig.prototype.showValue;
}
//# sourceMappingURL=progressbar-config.js.map