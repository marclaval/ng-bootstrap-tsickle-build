goog.module('tmp.ng_bootstrap.util.util'); exports = {}; var module = {id: 'tmp/ng-bootstrap/util/util.js'};/**
 * @param {?} value
 * @return {number}
 */
export function toInteger(value) {
    return parseInt(`${value}`, 10);
}
/**
 * @param {?} value
 * @return {string}
 */
export function toString(value) {
    return (value !== undefined && value !== null) ? `${value}` : '';
}
/**
 * @param {number} value
 * @param {number} max
 * @param {number=} min
 * @return {number}
 */
export function getValueInRange(value, max, min = 0) {
    return Math.max(Math.min(value, max), min);
}
/**
 * @param {?} value
 * @return {boolean}
 */
export function isString(value) {
    return typeof value === 'string';
}
/**
 * @param {?} value
 * @return {boolean}
 */
export function isNumber(value) {
    return !isNaN(toInteger(value));
}
/**
 * @param {?} value
 * @return {boolean}
 */
export function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 * @param {number} value
 * @return {string}
 */
export function padNumber(value) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    }
    else {
        return '';
    }
}
/**
 * @param {?} text
 * @return {?}
 */
export function regExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
//# sourceMappingURL=util.js.map