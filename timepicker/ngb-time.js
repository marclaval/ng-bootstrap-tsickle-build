goog.module('_ng_bootstrap.ng_bootstrap.timepicker.ngb_time'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js'};import { isNumber, toInteger } from '../util/util';
const isNumber = isNumber; /* local alias for Closure JSDoc */
const toInteger = toInteger; /* local alias for Closure JSDoc */
export class NgbTime {
    /**
     * @param {number=} hour
     * @param {number=} minute
     * @param {number=} second
     */
    constructor(hour, minute, second) {
        this.hour = toInteger(hour);
        this.minute = toInteger(minute);
        this.second = toInteger(second);
    }
    /**
     * @param {number=} step
     * @return {void}
     */
    changeHour(step = 1) { this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step); }
    /**
     * @param {number} hour
     * @return {void}
     */
    updateHour(hour) {
        if (isNumber(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
        }
        else {
            this.hour = NaN;
        }
    }
    /**
     * @param {number=} step
     * @return {void}
     */
    changeMinute(step = 1) { this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step); }
    /**
     * @param {number} minute
     * @return {void}
     */
    updateMinute(minute) {
        if (isNumber(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
        }
        else {
            this.minute = NaN;
        }
    }
    /**
     * @param {number=} step
     * @return {void}
     */
    changeSecond(step = 1) { this.updateSecond((isNaN(this.second) ? 0 : this.second) + step); }
    /**
     * @param {number} second
     * @return {void}
     */
    updateSecond(second) {
        if (isNumber(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
        }
        else {
            this.second = NaN;
        }
    }
    /**
     * @param {boolean=} checkSecs
     * @return {boolean}
     */
    isValid(checkSecs = true) {
        return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
    }
    /**
     * @return {string}
     */
    toString() { return `${this.hour || 0}:${this.minute || 0}:${this.second || 0}`; }
}
function NgbTime_tsickle_Closure_declarations() {
    /** @type {number} */
    NgbTime.prototype.hour;
    /** @type {number} */
    NgbTime.prototype.minute;
    /** @type {number} */
    NgbTime.prototype.second;
}
//# sourceMappingURL=ngb-time.js.map