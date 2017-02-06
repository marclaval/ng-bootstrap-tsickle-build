goog.module('_ng_bootstrap.ng_bootstrap.datepicker.datepicker_service'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgbCalendar } from './ngb-calendar';
const NgbCalendar = NgbCalendar; /* local alias for Closure JSDoc */
import { NgbDate } from './ngb-date';
const NgbDate = NgbDate; /* local alias for Closure JSDoc */
import { MonthViewModel, DayViewModel } from './datepicker-view-model';
const MonthViewModel = MonthViewModel; /* local alias for Closure JSDoc */
const DayViewModel = DayViewModel; /* local alias for Closure JSDoc */
import { Injectable } from '@angular/core';
const Injectable = Injectable; /* local alias for Closure JSDoc */
export let NgbDatepickerService = class NgbDatepickerService {
    /**
     * @param {!NgbCalendar} _calendar
     */
    constructor(_calendar) {
        this._calendar = _calendar;
    }
    /**
     * @param {!NgbDate} date
     * @param {!NgbDate} minDate
     * @param {!NgbDate} maxDate
     * @param {number} firstDayOfWeek
     * @param {function(!NgbDate, {month: number, year: number}): boolean} markDisabled
     * @return {{firstDate: !NgbDate, number: number, year: number, weeks: !Array<{number: number, days: !Array<{date: !NgbDate, disabled: boolean}>}>, weekdays: !Array<number>}}
     */
    generateMonthViewModel(date, minDate, maxDate, firstDayOfWeek, markDisabled) {
        const /** @type {{firstDate: !NgbDate, number: number, year: number, weeks: !Array<{number: number, days: !Array<{date: !NgbDate, disabled: boolean}>}>, weekdays: !Array<number>}} */ month = { firstDate: null, number: date.month, year: date.year, weeks: [], weekdays: [] };
        date = this._getFirstViewDate(date, firstDayOfWeek);
        // month has weeks
        for (let /** @type {number} */ w = 0; w < this._calendar.getWeeksPerMonth(); w++) {
            const /** @type {!Array<{date: !NgbDate, disabled: boolean}>} */ days = [];
            // week has days
            for (let /** @type {number} */ d = 0; d < this._calendar.getDaysPerWeek(); d++) {
                if (w === 0) {
                    month.weekdays.push(this._calendar.getWeekday(date));
                }
                const /** @type {!NgbDate} */ newDate = new NgbDate(date.year, date.month, date.day);
                let /** @type {boolean} */ disabled = (minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate));
                if (!disabled && markDisabled) {
                    disabled = markDisabled(newDate, { month: month.number, year: month.year });
                }
                // saving first date of the month
                if (month.firstDate === null && date.month === month.number) {
                    month.firstDate = newDate;
                }
                days.push({ date: newDate, disabled: disabled });
                date = this._calendar.getNext(date);
            }
            month.weeks.push({ number: this._calendar.getWeekNumber(days.map(day => NgbDate.from(day.date)), firstDayOfWeek), days: days });
        }
        return month;
    }
    /**
     * @param {{year: number, month: number, day: number}} date
     * @param {!NgbDate=} defaultValue
     * @return {!NgbDate}
     */
    toValidDate(date, defaultValue) {
        const /** @type {!NgbDate} */ ngbDate = NgbDate.from(date);
        if (defaultValue === undefined) {
            defaultValue = this._calendar.getToday();
        }
        return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
    }
    /**
     * @param {!NgbDate} date
     * @param {number} firstDayOfWeek
     * @return {!NgbDate}
     */
    _getFirstViewDate(date, firstDayOfWeek) {
        const /** @type {number} */ currentMonth = date.month;
        let /** @type {!NgbDate} */ today = new NgbDate(date.year, date.month, date.day);
        let /** @type {!NgbDate} */ yesterday = this._calendar.getPrev(today);
        const /** @type {function(): boolean} */ firstDayOfCurrentMonthIsAlsoFirstDayOfWeek = () => { return today.month !== yesterday.month && firstDayOfWeek === this._calendar.getWeekday(today); };
        const /** @type {function(): boolean} */ reachedTheFirstDayOfTheLastWeekOfPreviousMonth = () => { return today.month !== currentMonth && firstDayOfWeek === this._calendar.getWeekday(today); };
        // going back in time
        while (!reachedTheFirstDayOfTheLastWeekOfPreviousMonth() && !firstDayOfCurrentMonthIsAlsoFirstDayOfWeek()) {
            today = new NgbDate(yesterday.year, yesterday.month, yesterday.day);
            yesterday = this._calendar.getPrev(yesterday);
        }
        return today;
    }
};
NgbDatepickerService = __decorate([
    /* local alias for Closure JSDoc */ Injectable(), 
    __metadata('design:paramtypes', [Object])
], NgbDatepickerService);
function NgbDatepickerService_tsickle_Closure_declarations() {
    /** @type {!NgbCalendar} */
    NgbDatepickerService.prototype._calendar;
}
//# sourceMappingURL=datepicker-service.js.map