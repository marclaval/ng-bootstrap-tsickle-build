goog.module('_ng_bootstrap.ng_bootstrap.popover.popover_config'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/popover/popover-config.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
 * Configuration service for the NgbPopover directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
export let NgbPopoverConfig = class NgbPopoverConfig {
    constructor() {
        this.placement = 'top';
        this.triggers = 'click';
    }
};
NgbPopoverConfig = __decorate([
    /* local alias for Closure JSDoc */ Injectable(), 
    __metadata('design:paramtypes', [])
], NgbPopoverConfig);
function NgbPopoverConfig_tsickle_Closure_declarations() {
    /** @type {string} */
    NgbPopoverConfig.prototype.placement;
    /** @type {string} */
    NgbPopoverConfig.prototype.triggers;
    /** @type {string} */
    NgbPopoverConfig.prototype.container;
}
//# sourceMappingURL=popover-config.js.map