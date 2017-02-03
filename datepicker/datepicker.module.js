goog.module('tmp.ng_bootstrap.datepicker.datepicker.module'); exports = {}; var module = {id: 'tmp/ng-bootstrap/datepicker/datepicker.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, ModuleWithProviders } from '@angular/core';
const NgModule = NgModule; /* local alias for Closure JSDoc */
const ModuleWithProviders = ModuleWithProviders; /* local alias for Closure JSDoc */
import { CommonModule } from '@angular/common';
const CommonModule = CommonModule; /* local alias for Closure JSDoc */
import { NgbDatepicker, NgbDatepickerNavigateEvent } from './datepicker';
const NgbDatepicker = NgbDatepicker; /* local alias for Closure JSDoc */
const NgbDatepickerNavigateEvent = NgbDatepickerNavigateEvent; /* local alias for Closure JSDoc */
import { NgbDatepickerMonthView } from './datepicker-month-view';
const NgbDatepickerMonthView = NgbDatepickerMonthView; /* local alias for Closure JSDoc */
import { NgbDatepickerNavigation } from './datepicker-navigation';
const NgbDatepickerNavigation = NgbDatepickerNavigation; /* local alias for Closure JSDoc */
import { NgbInputDatepicker } from './datepicker-input';
const NgbInputDatepicker = NgbInputDatepicker; /* local alias for Closure JSDoc */
import { FormsModule } from '@angular/forms';
const FormsModule = FormsModule; /* local alias for Closure JSDoc */
import { NgbDatepickerDayView } from './datepicker-day-view';
const NgbDatepickerDayView = NgbDatepickerDayView; /* local alias for Closure JSDoc */
import { NgbDatepickerI18n, NgbDatepickerI18nDefault } from './datepicker-i18n';
const NgbDatepickerI18n = NgbDatepickerI18n; /* local alias for Closure JSDoc */
const NgbDatepickerI18nDefault = NgbDatepickerI18nDefault; /* local alias for Closure JSDoc */
import { NgbCalendar, NgbCalendarGregorian } from './ngb-calendar';
const NgbCalendar = NgbCalendar; /* local alias for Closure JSDoc */
const NgbCalendarGregorian = NgbCalendarGregorian; /* local alias for Closure JSDoc */
import { NgbDateParserFormatter, NgbDateISOParserFormatter } from './ngb-date-parser-formatter';
const NgbDateParserFormatter = NgbDateParserFormatter; /* local alias for Closure JSDoc */
const NgbDateISOParserFormatter = NgbDateISOParserFormatter; /* local alias for Closure JSDoc */
import { NgbDatepickerService } from './datepicker-service';
const NgbDatepickerService = NgbDatepickerService; /* local alias for Closure JSDoc */
import { NgbDatepickerNavigationSelect } from './datepicker-navigation-select';
const NgbDatepickerNavigationSelect = NgbDatepickerNavigationSelect; /* local alias for Closure JSDoc */
import { NgbDatepickerConfig } from './datepicker-config';
const NgbDatepickerConfig = NgbDatepickerConfig; /* local alias for Closure JSDoc */
export { NgbDatepicker, NgbDatepickerNavigateEvent } from './datepicker';
export { NgbInputDatepicker } from './datepicker-input';
export { NgbDatepickerMonthView } from './datepicker-month-view';
export { NgbDatepickerDayView } from './datepicker-day-view';
export { NgbDatepickerNavigation } from './datepicker-navigation';
export { NgbDatepickerNavigationSelect } from './datepicker-navigation-select';
export { NgbDatepickerConfig } from './datepicker-config';
export { NgbDatepickerI18n } from './datepicker-i18n';
export { NgbDateStruct } from './ngb-date-struct';
export { NgbDateParserFormatter } from './ngb-date-parser-formatter';
let NgbDatepickerModule_1 = class NgbDatepickerModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() {
        return {
            ngModule: NgbDatepickerModule_1,
            providers: [
                { provide: NgbCalendar, useClass: NgbCalendarGregorian },
                { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nDefault },
                { provide: NgbDateParserFormatter, useClass: NgbDateISOParserFormatter }, NgbDatepickerService,
                NgbDatepickerConfig
            ]
        };
    }
};
export let NgbDatepickerModule = NgbDatepickerModule_1;
NgbDatepickerModule = NgbDatepickerModule_1 = __decorate([
    NgModule({
        declarations: [
            NgbDatepicker, NgbDatepickerMonthView, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerDayView,
            NgbInputDatepicker
        ],
        exports: [NgbDatepicker, NgbInputDatepicker],
        imports: [CommonModule, FormsModule],
        entryComponents: [NgbDatepicker]
    }), 
    __metadata('design:paramtypes', [])
], NgbDatepickerModule);
//# sourceMappingURL=datepicker.module.js.map