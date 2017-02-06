goog.module('_ng_bootstrap.ng_bootstrap.accordion.accordion_config'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
 * Configuration service for the NgbAccordion component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the accordions used in the application.
 */
export let NgbAccordionConfig = class NgbAccordionConfig {
    constructor() {
        this.closeOthers = false;
    }
};
NgbAccordionConfig = __decorate([
    /* local alias for Closure JSDoc */ Injectable(), 
    __metadata('design:paramtypes', [])
], NgbAccordionConfig);
function NgbAccordionConfig_tsickle_Closure_declarations() {
    /** @type {boolean} */
    NgbAccordionConfig.prototype.closeOthers;
    /** @type {string} */
    NgbAccordionConfig.prototype.type;
}
//# sourceMappingURL=accordion-config.js.map