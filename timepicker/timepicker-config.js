goog.module('_ng_bootstrap.ng_bootstrap.timepicker.timepicker_config'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
 * Configuration service for the NgbTimepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */
export let NgbTimepickerConfig = class NgbTimepickerConfig {
    constructor() {
        this.meridian = false;
        this.spinners = true;
        this.seconds = false;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.disabled = false;
        this.readonlyInputs = false;
        this.size = 'medium';
    }
};
NgbTimepickerConfig = __decorate([
    /* local alias for Closure JSDoc */ Injectable(), 
    __metadata('design:paramtypes', [])
], NgbTimepickerConfig);
function NgbTimepickerConfig_tsickle_Closure_declarations() {
    /** @type {boolean} */
    NgbTimepickerConfig.prototype.meridian;
    /** @type {boolean} */
    NgbTimepickerConfig.prototype.spinners;
    /** @type {boolean} */
    NgbTimepickerConfig.prototype.seconds;
    /** @type {number} */
    NgbTimepickerConfig.prototype.hourStep;
    /** @type {number} */
    NgbTimepickerConfig.prototype.minuteStep;
    /** @type {number} */
    NgbTimepickerConfig.prototype.secondStep;
    /** @type {boolean} */
    NgbTimepickerConfig.prototype.disabled;
    /** @type {boolean} */
    NgbTimepickerConfig.prototype.readonlyInputs;
    /** @type {string} */
    NgbTimepickerConfig.prototype.size;
}
//# sourceMappingURL=timepicker-config.js.map