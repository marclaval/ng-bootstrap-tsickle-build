goog.module('_ng_bootstrap.ng_bootstrap.datepicker.ngb_date'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js'};export class NgbDate {
    /**
     * @param {number} year
     * @param {number} month
     * @param {number} day
     */
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    /**
     * @param {{year: number, month: number, day: number}} date
     * @return {!NgbDate}
     */
    static from(date) {
        return date ? new NgbDate(date.year, date.month, date.day ? date.day : 1) : null;
    }
    /**
     * @param {!NgbDate} other
     * @return {boolean}
     */
    equals(other) {
        return other && this.year === other.year && this.month === other.month && this.day === other.day;
    }
    /**
     * @param {!NgbDate} other
     * @return {boolean}
     */
    before(other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            }
            else {
                return this.month < other.month;
            }
        }
        else {
            return this.year < other.year;
        }
    }
    /**
     * @param {!NgbDate} other
     * @return {boolean}
     */
    after(other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            }
            else {
                return this.month > other.month;
            }
        }
        else {
            return this.year > other.year;
        }
    }
    /**
     * @return {string}
     */
    toString() { return `${this.year}-${this.month}-${this.day}`; }
}
function NgbDate_tsickle_Closure_declarations() {
    /** @type {number} */
    NgbDate.prototype.year;
    /** @type {number} */
    NgbDate.prototype.month;
    /** @type {number} */
    NgbDate.prototype.day;
}
//# sourceMappingURL=ngb-date.js.map