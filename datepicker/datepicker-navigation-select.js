goog.module('_ng_bootstrap.ng_bootstrap.datepicker.datepicker_navigation_select'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
const OnChanges = OnChanges; /* local alias for Closure JSDoc */
const SimpleChanges = SimpleChanges; /* local alias for Closure JSDoc */
import { NgbDate } from './ngb-date';
const NgbDate = NgbDate; /* local alias for Closure JSDoc */
import { toInteger } from '../util/util';
const toInteger = toInteger; /* local alias for Closure JSDoc */
import { NgbDatepickerI18n } from './datepicker-i18n';
const NgbDatepickerI18n = NgbDatepickerI18n; /* local alias for Closure JSDoc */
import { NgbCalendar } from './ngb-calendar';
const NgbCalendar = NgbCalendar; /* local alias for Closure JSDoc */
export let NgbDatepickerNavigationSelect = class NgbDatepickerNavigationSelect {
    /**
     * @param {!NgbDatepickerI18n} i18n
     * @param {!NgbCalendar} calendar
     */
    constructor(i18n, calendar) {
        this.i18n = i18n;
        this.calendar = calendar;
        this.years = [];
        this.select = new EventEmitter();
        this.months = calendar.getMonths();
    }
    /**
     * @param {!SimpleChanges} changes
     * @return {void}
     */
    ngOnChanges(changes) {
        if (changes['maxDate'] || changes['minDate'] || changes['date']) {
            this._generateYears();
            this._generateMonths();
        }
    }
    /**
     * @param {string} month
     * @return {void}
     */
    changeMonth(month) { this.select.emit(new NgbDate(this.date.year, toInteger(month), 1)); }
    /**
     * @param {string} year
     * @return {void}
     */
    changeYear(year) { this.select.emit(new NgbDate(toInteger(year), this.date.month, 1)); }
    /**
     * @return {void}
     */
    _generateMonths() {
        this.months = this.calendar.getMonths();
        if (this.date && this.date.year === this.minDate.year) {
            const /** @type {number} */ index = this.months.findIndex(month => month === this.minDate.month);
            this.months = this.months.slice(index);
        }
        if (this.date && this.date.year === this.maxDate.year) {
            const /** @type {number} */ index = this.months.findIndex(month => month === this.maxDate.month);
            this.months = this.months.slice(0, index + 1);
        }
    }
    /**
     * @return {void}
     */
    _generateYears() {
        this.years = Array.from({ length: this.maxDate.year - this.minDate.year + 1 }, (e, i) => this.minDate.year + i);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepickerNavigationSelect.prototype, "date", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbDatepickerNavigationSelect.prototype, "disabled", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepickerNavigationSelect.prototype, "maxDate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepickerNavigationSelect.prototype, "minDate", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbDatepickerNavigationSelect.prototype, "select", void 0);
NgbDatepickerNavigationSelect = __decorate([
    /* local alias for Closure JSDoc */ Component({
        selector: 'ngb-datepicker-navigation-select',
        styles: [`
    select {
      /* to align with btn-sm */
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;      
      line-height: 1.25;
      /* to cancel the custom height set by custom-select */
      height: inherit;
      width: 50%;
    }
  `],
        template: `
    <select [disabled]="disabled" class="custom-select d-inline-block" [value]="date?.month" (change)="changeMonth($event.target.value)">
      <option *ngFor="let m of months" [value]="m">{{ i18n.getMonthShortName(m) }}</option>
    </select>` +
            `<select [disabled]="disabled" class="custom-select d-inline-block" [value]="date?.year" (change)="changeYear($event.target.value)">
      <option *ngFor="let y of years" [value]="y">{{ y }}</option>
    </select> 
  ` // template needs to be formatted in a certain way so we don't add empty text nodes
    }), 
    __metadata('design:paramtypes', [Object, Object])
], NgbDatepickerNavigationSelect);
function NgbDatepickerNavigationSelect_tsickle_Closure_declarations() {
    /** @type {!Array<number>} */
    NgbDatepickerNavigationSelect.prototype.months;
    /** @type {!Array<number>} */
    NgbDatepickerNavigationSelect.prototype.years;
    /** @type {!NgbDate} */
    NgbDatepickerNavigationSelect.prototype.date;
    /** @type {boolean} */
    NgbDatepickerNavigationSelect.prototype.disabled;
    /** @type {!NgbDate} */
    NgbDatepickerNavigationSelect.prototype.maxDate;
    /** @type {!NgbDate} */
    NgbDatepickerNavigationSelect.prototype.minDate;
    /** @type {!EventEmitter<!NgbDate>} */
    NgbDatepickerNavigationSelect.prototype.select;
    /** @type {!NgbDatepickerI18n} */
    NgbDatepickerNavigationSelect.prototype.i18n;
    /** @type {!NgbCalendar} */
    NgbDatepickerNavigationSelect.prototype.calendar;
}
//# sourceMappingURL=datepicker-navigation-select.js.map