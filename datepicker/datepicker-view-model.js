goog.module('_ng_bootstrap.ng_bootstrap.datepicker.datepicker_view_model'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js'};import { NgbDate } from './ngb-date';
const NgbDate = NgbDate; /* local alias for Closure JSDoc */
/** @typedef {{date: !NgbDate, disabled: boolean}} */
exports.DayViewModel;
/** @typedef {{number: number, days: !Array<{date: !NgbDate, disabled: boolean}>}} */
exports.WeekViewModel;
/** @typedef {{firstDate: !NgbDate, number: number, year: number, weeks: !Array<{number: number, days: !Array<{date: !NgbDate, disabled: boolean}>}>, weekdays: !Array<number>}} */
exports.MonthViewModel;
export let NavigationEvent = {};
/** @type {number} */
NavigationEvent.PREV = 0;
/** @type {number} */
NavigationEvent.NEXT = 1;
NavigationEvent[NavigationEvent.PREV] = "PREV";
NavigationEvent[NavigationEvent.NEXT] = "NEXT";
//# sourceMappingURL=datepicker-view-model.js.map