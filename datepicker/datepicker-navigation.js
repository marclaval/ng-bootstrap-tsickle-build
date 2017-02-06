goog.module('_ng_bootstrap.ng_bootstrap.datepicker.datepicker_navigation'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
import { NavigationEvent } from './datepicker-view-model';
const NavigationEvent = NavigationEvent; /* local alias for Closure JSDoc */
import { NgbDate } from './ngb-date';
const NgbDate = NgbDate; /* local alias for Closure JSDoc */
import { NgbDatepickerI18n } from './datepicker-i18n';
const NgbDatepickerI18n = NgbDatepickerI18n; /* local alias for Closure JSDoc */
import { NgbCalendar } from './ngb-calendar';
const NgbCalendar = NgbCalendar; /* local alias for Closure JSDoc */
export let NgbDatepickerNavigation = class NgbDatepickerNavigation {
    /**
     * @param {!NgbDatepickerI18n} i18n
     * @param {!NgbCalendar} _calendar
     */
    constructor(i18n, _calendar) {
        this.i18n = i18n;
        this._calendar = _calendar;
        this.navigation = NavigationEvent;
        this.navigate = new EventEmitter();
        this.select = new EventEmitter();
    }
    /**
     * @param {number} event
     * @return {void}
     */
    doNavigate(event) { this.navigate.emit(event); }
    /**
     * @return {boolean}
     */
    nextDisabled() {
        return this.disabled || (this.maxDate && this._calendar.getNext(this.date, 'm').after(this.maxDate));
    }
    /**
     * @return {boolean}
     */
    prevDisabled() {
        const /** @type {!NgbDate} */ prevDate = this._calendar.getPrev(this.date, 'm');
        return this.disabled || (this.minDate && prevDate.year <= this.minDate.year && prevDate.month < this.minDate.month);
    }
    /**
     * @param {!NgbDate} date
     * @return {void}
     */
    selectDate(date) { this.select.emit(date); }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepickerNavigation.prototype, "date", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbDatepickerNavigation.prototype, "disabled", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepickerNavigation.prototype, "maxDate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepickerNavigation.prototype, "minDate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbDatepickerNavigation.prototype, "months", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbDatepickerNavigation.prototype, "showSelect", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbDatepickerNavigation.prototype, "showWeekNumbers", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbDatepickerNavigation.prototype, "navigate", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbDatepickerNavigation.prototype, "select", void 0);
NgbDatepickerNavigation = __decorate([
    /* local alias for Closure JSDoc */ Component({
        selector: 'ngb-datepicker-navigation',
        host: { 'class': 'd-flex justify-content-between', '[class.collapsed]': '!showSelect' },
        styles: [`
    :host {
      height: 2rem;
      line-height: 1.85rem;
    }
    :host.collapsed {
      margin-bottom: -2rem;        
    }
    .ngb-dp-navigation-chevron::before {
      border-style: solid;
      border-width: 0.2em 0.2em 0 0;
      content: '';
      display: inline-block;
      height: 0.75em;
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
      -ms-transform: rotate(-135deg);
      width: 0.75em;
      margin: 0 0 0 0.5rem;
    }    
    .ngb-dp-navigation-chevron.right:before {
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      margin: 0 0.5rem 0 0;
    }
    .btn-link {
      cursor: pointer;
      outline: 0;
    }
    .btn-link[disabled] {
      cursor: not-allowed;
      opacity: .65;
    }    
  `],
        template: `
    <button type="button" class="btn-link" (click)="!!doNavigate(navigation.PREV)" [disabled]="prevDisabled()">
      <span class="ngb-dp-navigation-chevron"></span>    
    </button>
    
    <ngb-datepicker-navigation-select *ngIf="showSelect" class="d-block" [style.width.rem]="months * 9"
      [date]="date"
      [minDate]="minDate"
      [maxDate]="maxDate"
      [disabled] = "disabled"
      (select)="selectDate($event)">
    </ngb-datepicker-navigation-select>
    
    <button type="button" class="btn-link" (click)="!!doNavigate(navigation.NEXT)" [disabled]="nextDisabled()">
      <span class="ngb-dp-navigation-chevron right"></span>
    </button>
  `
    }), 
    __metadata('design:paramtypes', [Object, Object])
], NgbDatepickerNavigation);
function NgbDatepickerNavigation_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDatepickerNavigation.prototype.navigation;
    /** @type {!NgbDate} */
    NgbDatepickerNavigation.prototype.date;
    /** @type {boolean} */
    NgbDatepickerNavigation.prototype.disabled;
    /** @type {!NgbDate} */
    NgbDatepickerNavigation.prototype.maxDate;
    /** @type {!NgbDate} */
    NgbDatepickerNavigation.prototype.minDate;
    /** @type {number} */
    NgbDatepickerNavigation.prototype.months;
    /** @type {boolean} */
    NgbDatepickerNavigation.prototype.showSelect;
    /** @type {boolean} */
    NgbDatepickerNavigation.prototype.showWeekNumbers;
    /** @type {!EventEmitter<number>} */
    NgbDatepickerNavigation.prototype.navigate;
    /** @type {!EventEmitter<!NgbDate>} */
    NgbDatepickerNavigation.prototype.select;
    /** @type {!NgbDatepickerI18n} */
    NgbDatepickerNavigation.prototype.i18n;
    /** @type {!NgbCalendar} */
    NgbDatepickerNavigation.prototype._calendar;
}
//# sourceMappingURL=datepicker-navigation.js.map