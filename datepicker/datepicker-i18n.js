goog.module('_ng_bootstrap.ng_bootstrap.datepicker.datepicker_i18n'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
const /** @type {!Array<string>} */ WEEKDAYS_SHORT = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const /** @type {!Array<string>} */ MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const /** @type {!Array<string>} */ MONTHS_FULL = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
    'December'
];
/**
 * Type of the service supplying month and weekday names to to NgbDatepicker component.
 * See the i18n demo for how to extend this class and define a custom provider for i18n.
 * @abstract
 */
export let NgbDatepickerI18n = class NgbDatepickerI18n {
    /**
     * Returns the short weekday name to display in the heading of the month view.
     * With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun
     * @abstract
     * @param {number} weekday
     * @return {string}
     */
    getWeekdayShortName(weekday) { }
    /**
     * Returns the short month name to display in the date picker navigation.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec
     * @abstract
     * @param {number} month
     * @return {string}
     */
    getMonthShortName(month) { }
    /**
     * Returns the full month name to display in the date picker navigation.
     * With default calendar we use ISO 8601: 'month' is 1=January ... 12=December
     * @abstract
     * @param {number} month
     * @return {string}
     */
    getMonthFullName(month) { }
};
NgbDatepickerI18n = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], NgbDatepickerI18n);
export let NgbDatepickerI18nDefault = class NgbDatepickerI18nDefault extends NgbDatepickerI18n {
    /**
     * @param {number} weekday
     * @return {string}
     */
    getWeekdayShortName(weekday) { return WEEKDAYS_SHORT[weekday - 1]; }
    /**
     * @param {number} month
     * @return {string}
     */
    getMonthShortName(month) { return MONTHS_SHORT[month - 1]; }
    /**
     * @param {number} month
     * @return {string}
     */
    getMonthFullName(month) { return MONTHS_FULL[month - 1]; }
};
NgbDatepickerI18nDefault = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], NgbDatepickerI18nDefault);
//# sourceMappingURL=datepicker-i18n.js.map