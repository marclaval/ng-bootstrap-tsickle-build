goog.module('tmp.ng_bootstrap.datepicker.datepicker_day_template_context'); exports = {}; var module = {id: 'tmp/ng-bootstrap/datepicker/datepicker-day-template-context.js'};import { NgbDateStruct } from './ngb-date-struct';
const NgbDateStruct = NgbDateStruct; /* local alias for Closure JSDoc */
/** @record */
export function DayTemplateContext() { }
/**
 * Month currently displayed by the datepicker
 * @type {number}
 */
DayTemplateContext.prototype.currentMonth;
/**
 * Date that corresponds to the template
 * @type {!NgbDateStruct}
 */
DayTemplateContext.prototype.date;
/**
 * True if current date is disabled
 * @type {boolean}
 */
DayTemplateContext.prototype.disabled;
/**
 * True if current date is selected
 * @type {boolean}
 */
DayTemplateContext.prototype.selected;
//# sourceMappingURL=datepicker-day-template-context.js.map