goog.module('_ng_bootstrap.ng_bootstrap.datepicker.datepicker_config'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, TemplateRef } from '@angular/core';
const Injectable = Injectable; /* local alias for Closure JSDoc */
const TemplateRef = TemplateRef; /* local alias for Closure JSDoc */
import { DayTemplateContext } from './datepicker-day-template-context';
const DayTemplateContext = DayTemplateContext; /* local alias for Closure JSDoc */
import { NgbDateStruct } from './ngb-date-struct';
const NgbDateStruct = NgbDateStruct; /* local alias for Closure JSDoc */
/**
 * Configuration service for the NgbDatepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
export let NgbDatepickerConfig = class NgbDatepickerConfig {
    constructor() {
        this.displayMonths = 1;
        this.firstDayOfWeek = 1;
        this.navigation = 'select';
        this.outsideDays = 'visible';
        this.showWeekdays = true;
        this.showWeekNumbers = false;
    }
};
NgbDatepickerConfig = __decorate([
    /* local alias for Closure JSDoc */ Injectable(), 
    __metadata('design:paramtypes', [])
], NgbDatepickerConfig);
function NgbDatepickerConfig_tsickle_Closure_declarations() {
    /** @type {!TemplateRef<!DayTemplateContext>} */
    NgbDatepickerConfig.prototype.dayTemplate;
    /** @type {number} */
    NgbDatepickerConfig.prototype.displayMonths;
    /** @type {number} */
    NgbDatepickerConfig.prototype.firstDayOfWeek;
    /** @type {function(!NgbDateStruct, {year: number, month: number}): boolean} */
    NgbDatepickerConfig.prototype.markDisabled;
    /** @type {!NgbDateStruct} */
    NgbDatepickerConfig.prototype.minDate;
    /** @type {!NgbDateStruct} */
    NgbDatepickerConfig.prototype.maxDate;
    /** @type {string} */
    NgbDatepickerConfig.prototype.navigation;
    /** @type {string} */
    NgbDatepickerConfig.prototype.outsideDays;
    /** @type {boolean} */
    NgbDatepickerConfig.prototype.showWeekdays;
    /** @type {boolean} */
    NgbDatepickerConfig.prototype.showWeekNumbers;
    /** @type {{year: number, month: number}} */
    NgbDatepickerConfig.prototype.startDate;
}
//# sourceMappingURL=datepicker-config.js.map