goog.module('tmp.ng_bootstrap.datepicker.datepicker'); exports = {}; var module = {id: 'tmp/ng-bootstrap/datepicker/datepicker.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, OnChanges, TemplateRef, forwardRef, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const OnChanges = OnChanges; /* local alias for Closure JSDoc */
const TemplateRef = TemplateRef; /* local alias for Closure JSDoc */
const forwardRef = forwardRef; /* local alias for Closure JSDoc */
const OnInit = OnInit; /* local alias for Closure JSDoc */
const SimpleChanges = SimpleChanges; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
const NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR; /* local alias for Closure JSDoc */
const ControlValueAccessor = ControlValueAccessor; /* local alias for Closure JSDoc */
import { NgbCalendar } from './ngb-calendar';
const NgbCalendar = NgbCalendar; /* local alias for Closure JSDoc */
import { NgbDate } from './ngb-date';
const NgbDate = NgbDate; /* local alias for Closure JSDoc */
import { NgbDatepickerService } from './datepicker-service';
const NgbDatepickerService = NgbDatepickerService; /* local alias for Closure JSDoc */
import { MonthViewModel, NavigationEvent } from './datepicker-view-model';
const MonthViewModel = MonthViewModel; /* local alias for Closure JSDoc */
const NavigationEvent = NavigationEvent; /* local alias for Closure JSDoc */
import { toInteger } from '../util/util';
const toInteger = toInteger; /* local alias for Closure JSDoc */
import { DayTemplateContext } from './datepicker-day-template-context';
const DayTemplateContext = DayTemplateContext; /* local alias for Closure JSDoc */
import { NgbDatepickerConfig } from './datepicker-config';
const NgbDatepickerConfig = NgbDatepickerConfig; /* local alias for Closure JSDoc */
import { NgbDateStruct } from './ngb-date-struct';
const NgbDateStruct = NgbDateStruct; /* local alias for Closure JSDoc */
import { NgbDatepickerI18n } from './datepicker-i18n';
const NgbDatepickerI18n = NgbDatepickerI18n; /* local alias for Closure JSDoc */
const /** @type {?} */ NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbDatepicker),
    multi: true
};
/** @record */
export function NgbDatepickerNavigateEvent() { }
/**
 * Currently displayed month
 * @type {{year: number, month: number}}
 */
NgbDatepickerNavigateEvent.prototype.current;
/**
 * Month we're navigating to
 * @type {{year: number, month: number}}
 */
NgbDatepickerNavigateEvent.prototype.next;
/**
 * A lightweight and highly configurable datepicker directive
 */
export let NgbDatepicker = class NgbDatepicker {
    /**
     * @param {!NgbDatepickerService} _service
     * @param {!NgbCalendar} _calendar
     * @param {!NgbDatepickerI18n} i18n
     * @param {!NgbDatepickerConfig} config
     */
    constructor(_service, _calendar, i18n, config) {
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this.months = [];
        /**
         * An event fired when navigation happens and currently displayed month changes.
         * See NgbDatepickerNavigateEvent for the payload info.
         */
        this.navigate = new EventEmitter();
        this.disabled = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.dayTemplate = config.dayTemplate;
        this.displayMonths = config.displayMonths;
        this.firstDayOfWeek = config.firstDayOfWeek;
        this.markDisabled = config.markDisabled;
        this.minDate = config.minDate;
        this.maxDate = config.maxDate;
        this.navigation = config.navigation;
        this.outsideDays = config.outsideDays;
        this.showWeekdays = config.showWeekdays;
        this.showWeekNumbers = config.showWeekNumbers;
        this.startDate = config.startDate;
    }
    /**
     * @return {number}
     */
    getHeaderHeight() {
        const /** @type {number} */ h = this.showWeekdays ? 6.25 : 4.25;
        return this.displayMonths === 1 || this.navigation !== 'select' ? h - 2 : h;
    }
    /**
     * @return {number}
     */
    getHeaderMargin() {
        const /** @type {number} */ m = this.showWeekdays ? 2 : 0;
        return this.displayMonths !== 1 || this.navigation !== 'select' ? m + 2 : m;
    }
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     * @param {{year: number, month: number}=} date
     * @return {void}
     */
    navigateTo(date) {
        this._setViewWithinLimits(this._service.toValidDate(date));
        this._updateData();
    }
    /**
     * @return {void}
     */
    ngOnInit() {
        this._setDates();
        this.navigateTo(this._date);
    }
    /**
     * @param {!SimpleChanges} changes
     * @return {void}
     */
    ngOnChanges(changes) {
        this._setDates();
        this._setViewWithinLimits(this._date);
        if (changes['displayMonths']) {
            this.displayMonths = toInteger(this.displayMonths);
        }
        // we have to force rebuild all months only if any of these inputs changes
        if (['startDate', 'minDate', 'maxDate', 'navigation', 'firstDayOfWeek', 'markDisabled', 'displayMonths'].some(input => !!changes[input])) {
            this._updateData(true);
        }
    }
    /**
     * @param {!NgbDate} date
     * @return {void}
     */
    onDateSelect(date) {
        this._setViewWithinLimits(date);
        this.onTouched();
        this.writeValue(date);
        this.onChange({ year: date.year, month: date.month, day: date.day });
        // switch current month
        if (this._date.month !== this.months[0].number && this.displayMonths === 1) {
            this._updateData();
        }
    }
    /**
     * @param {!NgbDate} date
     * @return {void}
     */
    onNavigateDateSelect(date) {
        this._setViewWithinLimits(date);
        this._updateData();
    }
    /**
     * @param {number} event
     * @return {void}
     */
    onNavigateEvent(event) {
        switch (event) {
            case NavigationEvent.PREV:
                this._setViewWithinLimits(this._calendar.getPrev(this.months[0].firstDate, 'm'));
                break;
            case NavigationEvent.NEXT:
                this._setViewWithinLimits(this._calendar.getNext(this.months[0].firstDate, 'm'));
                break;
        }
        this._updateData();
    }
    /**
     * @param {function(?): ?} fn
     * @return {void}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * @param {function(): ?} fn
     * @return {void}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * @param {?} value
     * @return {void}
     */
    writeValue(value) { this.model = this._service.toValidDate(value, null); }
    /**
     * @param {boolean} isDisabled
     * @return {void}
     */
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
    /**
     * @return {void}
     */
    _setDates() {
        this._maxDate = NgbDate.from(this.maxDate);
        this._minDate = NgbDate.from(this.minDate);
        this._date = this._service.toValidDate(this.startDate);
        if (!this._calendar.isValid(this._minDate)) {
            this._minDate = this._calendar.getPrev(this._date, 'y', 10);
            this.minDate = { year: this._minDate.year, month: this._minDate.month, day: this._minDate.day };
        }
        if (!this._calendar.isValid(this._maxDate)) {
            this._maxDate = this._calendar.getNext(this._date, 'y', 11);
            this._maxDate = this._calendar.getPrev(this._maxDate);
            this.maxDate = { year: this._maxDate.year, month: this._maxDate.month, day: this._maxDate.day };
        }
        if (this._minDate && this._maxDate && this._maxDate.before(this._minDate)) {
            throw new Error(`'maxDate' ${this._maxDate} should be greater than 'minDate' ${this._minDate}`);
        }
    }
    /**
     * @param {!NgbDate} date
     * @return {void}
     */
    _setViewWithinLimits(date) {
        if (this._minDate && date.before(this._minDate)) {
            this._date = new NgbDate(this._minDate.year, this._minDate.month, 1);
        }
        else if (this._maxDate && date.after(this._maxDate)) {
            this._date = new NgbDate(this._maxDate.year, this._maxDate.month, 1);
        }
        else {
            this._date = new NgbDate(date.year, date.month, 1);
        }
    }
    /**
     * @param {boolean=} force
     * @return {void}
     */
    _updateData(force = false) {
        const /** @type {!Array<?>} */ newMonths = [];
        for (let /** @type {number} */ i = 0; i < this.displayMonths; i++) {
            const /** @type {!NgbDate} */ newDate = this._calendar.getNext(this._date, 'm', i);
            const /** @type {number} */ index = this.months.findIndex(month => month.firstDate.equals(newDate));
            if (force || index === -1) {
                newMonths.push(this._service.generateMonthViewModel(newDate, this._minDate, this._maxDate, toInteger(this.firstDayOfWeek), this.markDisabled));
            }
            else {
                newMonths.push(this.months[index]);
            }
        }
        const /** @type {?} */ newDate = newMonths[0].firstDate;
        const /** @type {!NgbDate} */ oldDate = this.months[0] ? this.months[0].firstDate : null;
        this.months = newMonths;
        // emitting navigation event if the first month changes
        if (!newDate.equals(oldDate)) {
            this.navigate.emit({
                current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                next: { year: newDate.year, month: newDate.month }
            });
        }
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepicker.prototype, "dayTemplate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbDatepicker.prototype, "displayMonths", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbDatepicker.prototype, "firstDayOfWeek", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Function)
], NgbDatepicker.prototype, "markDisabled", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepicker.prototype, "minDate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepicker.prototype, "maxDate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepicker.prototype, "navigation", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepicker.prototype, "outsideDays", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbDatepicker.prototype, "showWeekdays", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbDatepicker.prototype, "showWeekNumbers", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepicker.prototype, "startDate", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbDatepicker.prototype, "navigate", void 0);
NgbDatepicker = __decorate([
    Component({
        exportAs: 'ngbDatepicker',
        selector: 'ngb-datepicker',
        host: { 'class': 'd-inline-block rounded' },
        styles: [`
    :host {
      border: 1px solid rgba(0, 0, 0, 0.125);
    }
    .ngb-dp-header {
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }
    .ngb-dp-month {
      pointer-events: none;
    }
    ngb-datepicker-month-view {
      pointer-events: auto;
    }
    .ngb-dp-month:first-child {
      margin-left: 0 !important;
    }    
    .ngb-dp-month-name {
      font-size: larger;
      height: 2rem;
      line-height: 2rem;
    }    
  `],
        template: `
    <template #dt let-date="date" let-currentMonth="currentMonth" let-selected="selected" let-disabled="disabled">
       <div ngbDatepickerDayView [date]="date" [currentMonth]="currentMonth" [selected]="selected" [disabled]="disabled"></div>
    </template>
    
    <div class="ngb-dp-header bg-faded pt-1 rounded-top" [style.height.rem]="getHeaderHeight()" 
      [style.marginBottom.rem]="-getHeaderMargin()">
      <ngb-datepicker-navigation *ngIf="navigation !== 'none'"
        [date]="months[0]?.firstDate"
        [minDate]="_minDate"
        [maxDate]="_maxDate"
        [months]="months.length"
        [disabled]="disabled"
        [showWeekNumbers]="showWeekNumbers"
        [showSelect]="navigation === 'select'"
        (navigate)="onNavigateEvent($event)"
        (select)="onNavigateDateSelect($event)">
      </ngb-datepicker-navigation>
    </div>

    <div class="ngb-dp-months d-flex px-1 pb-1">
      <template ngFor let-month [ngForOf]="months" let-i="index">
        <div class="ngb-dp-month d-block ml-3">            
          <div *ngIf="navigation !== 'select' || displayMonths > 1" class="ngb-dp-month-name text-center">
            {{ i18n.getMonthFullName(month.number) }} {{ month.year }}
          </div>
          <ngb-datepicker-month-view
            [month]="month"
            [selectedDate]="model"
            [dayTemplate]="dayTemplate || dt"
            [showWeekdays]="showWeekdays"
            [showWeekNumbers]="showWeekNumbers"
            [disabled]="disabled"
            [outsideDays]="displayMonths === 1 ? outsideDays : 'hidden'"
            (select)="onDateSelect($event)">
          </ngb-datepicker-month-view>
        </div>
      </template>
    </div>
  `,
        providers: [NGB_DATEPICKER_VALUE_ACCESSOR]
    }), 
    __metadata('design:paramtypes', [Object, Object, Object, Object])
], NgbDatepicker);
function NgbDatepicker_tsickle_Closure_declarations() {
    /** @type {!NgbDate} */
    NgbDatepicker.prototype._date;
    /** @type {!NgbDate} */
    NgbDatepicker.prototype._maxDate;
    /** @type {!NgbDate} */
    NgbDatepicker.prototype._minDate;
    /** @type {!NgbDate} */
    NgbDatepicker.prototype.model;
    /** @type {!Array<{firstDate: !NgbDate, number: number, year: number, weeks: !Array<{number: number, days: !Array<{date: !NgbDate, disabled: boolean}>}>, weekdays: !Array<number>}>} */
    NgbDatepicker.prototype.months;
    /**
     * Reference for the custom template for the day display
     * @type {!TemplateRef<!DayTemplateContext>}
     */
    NgbDatepicker.prototype.dayTemplate;
    /**
     * Number of months to display
     * @type {number}
     */
    NgbDatepicker.prototype.displayMonths;
    /**
     * First day of the week. With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun
     * @type {number}
     */
    NgbDatepicker.prototype.firstDayOfWeek;
    /**
     * Callback to mark a given date as disabled.
     * 'Current' contains the month that will be displayed in the view
     * @type {function(!NgbDateStruct, {year: number, month: number}): boolean}
     */
    NgbDatepicker.prototype.markDisabled;
    /**
     * Min date for the navigation. If not provided will be 10 years before today or `startDate`
     * @type {!NgbDateStruct}
     */
    NgbDatepicker.prototype.minDate;
    /**
     * Max date for the navigation. If not provided will be 10 years from today or `startDate`
     * @type {!NgbDateStruct}
     */
    NgbDatepicker.prototype.maxDate;
    /**
     * Navigation type: `select` (default with select boxes for month and year), `arrows`
     * (without select boxes, only navigation arrows) or `none` (no navigation at all)
     * @type {string}
     */
    NgbDatepicker.prototype.navigation;
    /**
     * The way to display days that don't belong to current month: `visible` (default),
     * `hidden` (not displayed) or `collapsed` (not displayed with empty space collapsed)
     * @type {string}
     */
    NgbDatepicker.prototype.outsideDays;
    /**
     * Whether to display days of the week
     * @type {boolean}
     */
    NgbDatepicker.prototype.showWeekdays;
    /**
     * Whether to display week numbers
     * @type {boolean}
     */
    NgbDatepicker.prototype.showWeekNumbers;
    /**
     * Date to open calendar with.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided, calendar will open with current month.
     * Use 'navigateTo(date)' as an alternative
     * @type {{year: number, month: number}}
     */
    NgbDatepicker.prototype.startDate;
    /**
     * An event fired when navigation happens and currently displayed month changes.
     * See NgbDatepickerNavigateEvent for the payload info.
     * @type {!EventEmitter<!NgbDatepickerNavigateEvent>}
     */
    NgbDatepicker.prototype.navigate;
    /** @type {boolean} */
    NgbDatepicker.prototype.disabled;
    /** @type {function(?): void} */
    NgbDatepicker.prototype.onChange;
    /** @type {function(): void} */
    NgbDatepicker.prototype.onTouched;
    /** @type {!NgbDatepickerService} */
    NgbDatepicker.prototype._service;
    /** @type {!NgbCalendar} */
    NgbDatepicker.prototype._calendar;
    /** @type {!NgbDatepickerI18n} */
    NgbDatepicker.prototype.i18n;
}
//# sourceMappingURL=datepicker.js.map