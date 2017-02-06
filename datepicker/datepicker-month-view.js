goog.module('_ng_bootstrap.ng_bootstrap.datepicker.datepicker_month_view'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const TemplateRef = TemplateRef; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
import { MonthViewModel, DayViewModel } from './datepicker-view-model';
const MonthViewModel = MonthViewModel; /* local alias for Closure JSDoc */
const DayViewModel = DayViewModel; /* local alias for Closure JSDoc */
import { NgbDate } from './ngb-date';
const NgbDate = NgbDate; /* local alias for Closure JSDoc */
import { NgbDatepickerI18n } from './datepicker-i18n';
const NgbDatepickerI18n = NgbDatepickerI18n; /* local alias for Closure JSDoc */
import { DayTemplateContext } from './datepicker-day-template-context';
const DayTemplateContext = DayTemplateContext; /* local alias for Closure JSDoc */
export let NgbDatepickerMonthView = class NgbDatepickerMonthView {
    /**
     * @param {!NgbDatepickerI18n} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.select = new EventEmitter();
    }
    /**
     * @param {{date: !NgbDate, disabled: boolean}} day
     * @return {void}
     */
    doSelect(day) {
        if (!this.isDisabled(day) && !this.isCollapsed(day) && !this.isHidden(day)) {
            this.select.emit(NgbDate.from(day.date));
        }
    }
    /**
     * @param {{date: !NgbDate, disabled: boolean}} day
     * @return {boolean}
     */
    isDisabled(day) { return this.disabled || day.disabled; }
    /**
     * @param {!NgbDate} date
     * @return {boolean}
     */
    isSelected(date) { return this.selectedDate && this.selectedDate.equals(date); }
    /**
     * @param {{date: !NgbDate, disabled: boolean}} day
     * @return {boolean}
     */
    isCollapsed(day) { return this.outsideDays === 'collapsed' && this.month.number !== day.date.month; }
    /**
     * @param {{date: !NgbDate, disabled: boolean}} day
     * @return {boolean}
     */
    isHidden(day) { return this.outsideDays === 'hidden' && this.month.number !== day.date.month; }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepickerMonthView.prototype, "dayTemplate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbDatepickerMonthView.prototype, "disabled", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepickerMonthView.prototype, "month", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepickerMonthView.prototype, "outsideDays", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepickerMonthView.prototype, "selectedDate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepickerMonthView.prototype, "showWeekdays", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepickerMonthView.prototype, "showWeekNumbers", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbDatepickerMonthView.prototype, "select", void 0);
NgbDatepickerMonthView = __decorate([
    /* local alias for Closure JSDoc */ Component({
        selector: 'ngb-datepicker-month-view',
        host: { 'class': 'd-block' },
        styles: [`
    .ngb-dp-weekday, .ngb-dp-week-number {
      line-height: 2rem;
    }
    .ngb-dp-day, .ngb-dp-weekday, .ngb-dp-week-number {
      width: 2rem;
      height: 2rem;      
    }
    .ngb-dp-day {
      cursor: pointer;
    }
    .ngb-dp-day.disabled, .ngb-dp-day.hidden, .ngb-dp-day.collapsed {
      cursor: default;
    }
    :host/deep/.ngb-dp-day.collapsed > * {
      display: none;
    }
    :host/deep/.ngb-dp-day.hidden > * {
      visibility: hidden;
    }
  `],
        template: `
    <div *ngIf="showWeekdays" class="ngb-dp-week d-flex">
      <div *ngIf="showWeekNumbers" class="ngb-dp-weekday"></div>
      <div *ngFor="let w of month.weekdays" class="ngb-dp-weekday small text-center text-info font-italic">
        {{ i18n.getWeekdayShortName(w) }}
      </div>
    </div>
    <div *ngFor="let week of month.weeks" class="ngb-dp-week d-flex">
      <div *ngIf="showWeekNumbers" class="ngb-dp-week-number small text-center font-italic text-muted">{{ week.number }}</div>
      <div *ngFor="let day of week.days" (click)="doSelect(day)" class="ngb-dp-day" [class.disabled]="isDisabled(day)"
      [class.collapsed]="isCollapsed(day)" [class.hidden]="isHidden(day)">
          <template [ngTemplateOutlet]="dayTemplate"
          [ngOutletContext]="{date: {year: day.date.year, month: day.date.month, day: day.date.day},
            currentMonth: month.number,
            disabled: isDisabled(day),
            selected: isSelected(day.date)}">
          </template>
      </div>
    </div>
  `
    }), 
    __metadata('design:paramtypes', [Object])
], NgbDatepickerMonthView);
function NgbDatepickerMonthView_tsickle_Closure_declarations() {
    /** @type {!TemplateRef<!DayTemplateContext>} */
    NgbDatepickerMonthView.prototype.dayTemplate;
    /** @type {boolean} */
    NgbDatepickerMonthView.prototype.disabled;
    /** @type {{firstDate: !NgbDate, number: number, year: number, weeks: !Array<{number: number, days: !Array<{date: !NgbDate, disabled: boolean}>}>, weekdays: !Array<number>}} */
    NgbDatepickerMonthView.prototype.month;
    /** @type {string} */
    NgbDatepickerMonthView.prototype.outsideDays;
    /** @type {!NgbDate} */
    NgbDatepickerMonthView.prototype.selectedDate;
    /** @type {?} */
    NgbDatepickerMonthView.prototype.showWeekdays;
    /** @type {?} */
    NgbDatepickerMonthView.prototype.showWeekNumbers;
    /** @type {!EventEmitter<!NgbDate>} */
    NgbDatepickerMonthView.prototype.select;
    /** @type {!NgbDatepickerI18n} */
    NgbDatepickerMonthView.prototype.i18n;
}
//# sourceMappingURL=datepicker-month-view.js.map