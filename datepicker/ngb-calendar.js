goog.module('_ng_bootstrap.ng_bootstrap.datepicker.ngb_calendar'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgbDate } from './ngb-date';
const NgbDate = NgbDate; /* local alias for Closure JSDoc */
import { Injectable } from '@angular/core';
const Injectable = Injectable; /* local alias for Closure JSDoc */
import { isNumber } from '../util/util';
const isNumber = isNumber; /* local alias for Closure JSDoc */
/**
 * @param {!Date} jsDate
 * @return {!NgbDate}
 */
function fromJSDate(jsDate) {
    return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
/**
 * @param {!NgbDate} date
 * @return {!Date}
 */
function toJSDate(date) {
    const /** @type {!Date} */ jsDate = new Date(date.year, date.month - 1, date.day);
    // this is done avoid 30 -> 1930 conversion
    if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
    }
    return jsDate;
}
/** @typedef {string} */
exports.NgbPeriod;
/**
 * @abstract
 */
export let NgbCalendar = class NgbCalendar {
    /**
     * @abstract
     * @return {number}
     */
    getDaysPerWeek() { }
    /**
     * @abstract
     * @return {!Array<number>}
     */
    getMonths() { }
    /**
     * @abstract
     * @return {number}
     */
    getWeeksPerMonth() { }
    /**
     * @abstract
     * @param {!NgbDate} date
     * @return {number}
     */
    getWeekday(date) { }
    /**
     * @abstract
     * @param {!NgbDate} date
     * @param {string=} period
     * @param {number=} number
     * @return {!NgbDate}
     */
    getNext(date, period, number) { }
    /**
     * @abstract
     * @param {!NgbDate} date
     * @param {string=} period
     * @param {number=} number
     * @return {!NgbDate}
     */
    getPrev(date, period, number) { }
    /**
     * @abstract
     * @param {!Array<!NgbDate>} week
     * @param {number} firstDayOfWeek
     * @return {number}
     */
    getWeekNumber(week, firstDayOfWeek) { }
    /**
     * @abstract
     * @return {!NgbDate}
     */
    getToday() { }
    /**
     * @abstract
     * @param {!NgbDate} date
     * @return {boolean}
     */
    isValid(date) { }
};
NgbCalendar = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], NgbCalendar);
export let NgbCalendarGregorian = class NgbCalendarGregorian extends NgbCalendar {
    /**
     * @return {number}
     */
    getDaysPerWeek() { return 7; }
    /**
     * @return {!Array<number>}
     */
    getMonths() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; }
    /**
     * @return {number}
     */
    getWeeksPerMonth() { return 6; }
    /**
     * @param {!NgbDate} date
     * @param {string=} period
     * @param {number=} number
     * @return {!NgbDate}
     */
    getNext(date, period = 'd', number = 1) {
        let /** @type {!Date} */ jsDate = toJSDate(date);
        switch (period) {
            case 'y':
                return new NgbDate(date.year + number, 1, 1);
            case 'm':
                jsDate = new Date(date.year, date.month + number - 1, 1);
                break;
            case 'd':
                jsDate.setDate(jsDate.getDate() + number);
                break;
            default:
                return date;
        }
        return fromJSDate(jsDate);
    }
    /**
     * @param {!NgbDate} date
     * @param {string=} period
     * @param {number=} number
     * @return {!NgbDate}
     */
    getPrev(date, period = 'd', number = 1) { return this.getNext(date, period, -number); }
    /**
     * @param {!NgbDate} date
     * @return {number}
     */
    getWeekday(date) {
        let /** @type {!Date} */ jsDate = toJSDate(date);
        let /** @type {number} */ day = jsDate.getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    }
    /**
     * @param {!Array<!NgbDate>} week
     * @param {number} firstDayOfWeek
     * @return {number}
     */
    getWeekNumber(week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        const /** @type {number} */ thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        let /** @type {!NgbDate} */ date = week[thursdayIndex];
        const /** @type {!Date} */ jsDate = toJSDate(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        const /** @type {number} */ time = jsDate.getTime();
        jsDate.setMonth(0); // Compare with Jan 1
        jsDate.setDate(1);
        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    }
    /**
     * @return {!NgbDate}
     */
    getToday() { return fromJSDate(new Date()); }
    /**
     * @param {!NgbDate} date
     * @return {boolean}
     */
    isValid(date) {
        return date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) &&
            !isNaN(toJSDate(date).getTime());
    }
};
NgbCalendarGregorian = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], NgbCalendarGregorian);
//# sourceMappingURL=ngb-calendar.js.map