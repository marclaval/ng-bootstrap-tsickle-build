goog.module('_ng_bootstrap.ng_bootstrap.timepicker.timepicker'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/timepicker/timepicker.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const forwardRef = forwardRef; /* local alias for Closure JSDoc */
const OnChanges = OnChanges; /* local alias for Closure JSDoc */
const SimpleChanges = SimpleChanges; /* local alias for Closure JSDoc */
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const ControlValueAccessor = ControlValueAccessor; /* local alias for Closure JSDoc */
const NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR; /* local alias for Closure JSDoc */
import { isNumber, padNumber, toInteger, isDefined } from '../util/util';
const isNumber = isNumber; /* local alias for Closure JSDoc */
const padNumber = padNumber; /* local alias for Closure JSDoc */
const toInteger = toInteger; /* local alias for Closure JSDoc */
const isDefined = isDefined; /* local alias for Closure JSDoc */
import { NgbTime } from './ngb-time';
const NgbTime = NgbTime; /* local alias for Closure JSDoc */
import { NgbTimepickerConfig } from './timepicker-config';
const NgbTimepickerConfig = NgbTimepickerConfig; /* local alias for Closure JSDoc */
const /** @type {?} */ NGB_TIMEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbTimepicker),
    multi: true
};
/**
 * A lightweight & configurable timepicker directive.
 */
export let NgbTimepicker = class NgbTimepicker {
    /**
     * @param {!NgbTimepickerConfig} config
     */
    constructor(config) {
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.meridian = config.meridian;
        this.spinners = config.spinners;
        this.seconds = config.seconds;
        this.hourStep = config.hourStep;
        this.minuteStep = config.minuteStep;
        this.secondStep = config.secondStep;
        this.disabled = config.disabled;
        this.readonlyInputs = config.readonlyInputs;
        this.size = config.size;
    }
    /**
     * @param {?} value
     * @return {void}
     */
    writeValue(value) {
        this.model = value ? new NgbTime(value.hour, value.minute, value.second) : new NgbTime();
        if (!this.seconds && (!value || !isNumber(value.second))) {
            this.model.second = 0;
        }
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
     * @param {boolean} isDisabled
     * @return {void}
     */
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
    /**
     * @param {number} step
     * @return {void}
     */
    changeHour(step) {
        this.model.changeHour(step);
        this.propagateModelChange();
    }
    /**
     * @param {number} step
     * @return {void}
     */
    changeMinute(step) {
        this.model.changeMinute(step);
        this.propagateModelChange();
    }
    /**
     * @param {number} step
     * @return {void}
     */
    changeSecond(step) {
        this.model.changeSecond(step);
        this.propagateModelChange();
    }
    /**
     * @param {string} newVal
     * @return {void}
     */
    updateHour(newVal) {
        this.model.updateHour(toInteger(newVal));
        this.propagateModelChange();
    }
    /**
     * @param {string} newVal
     * @return {void}
     */
    updateMinute(newVal) {
        this.model.updateMinute(toInteger(newVal));
        this.propagateModelChange();
    }
    /**
     * @param {string} newVal
     * @return {void}
     */
    updateSecond(newVal) {
        this.model.updateSecond(toInteger(newVal));
        this.propagateModelChange();
    }
    /**
     * @return {void}
     */
    toggleMeridian() {
        if (this.meridian) {
            this.changeHour(12);
        }
    }
    /**
     * @param {number} value
     * @return {string}
     */
    formatHour(value) {
        if (isNumber(value)) {
            if (this.meridian) {
                return padNumber(value % 12 === 0 ? 12 : value % 12);
            }
            else {
                return padNumber(value % 24);
            }
        }
        else {
            return padNumber(NaN);
        }
    }
    /**
     * @param {number} value
     * @return {string}
     */
    formatMinSec(value) { return padNumber(value); }
    /**
     * @return {?}
     */
    setFormControlSize() { return { 'form-control-sm': this.size === 'small', 'form-control-lg': this.size === 'large' }; }
    /**
     * @return {?}
     */
    setMeridanSize() { return { 'btn-sm': this.size === 'small', 'btn-lg': this.size === 'large' }; }
    /**
     * @param {!SimpleChanges} changes
     * @return {void}
     */
    ngOnChanges(changes) {
        if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
            this.model.second = 0;
            this.propagateModelChange(false);
        }
    }
    /**
     * @param {boolean=} touched
     * @return {void}
     */
    propagateModelChange(touched = true) {
        if (touched) {
            this.onTouched();
        }
        if (this.model.isValid(this.seconds)) {
            this.onChange({ hour: this.model.hour, minute: this.model.minute, second: this.model.second });
        }
        else {
            this.onChange(null);
        }
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbTimepicker.prototype, "meridian", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbTimepicker.prototype, "spinners", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbTimepicker.prototype, "seconds", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbTimepicker.prototype, "hourStep", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbTimepicker.prototype, "minuteStep", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbTimepicker.prototype, "secondStep", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbTimepicker.prototype, "readonlyInputs", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbTimepicker.prototype, "size", void 0);
NgbTimepicker = __decorate([
    Component({
        selector: 'ngb-timepicker',
        styles: [`
    .chevron::before {
      border-style: solid;
      border-width: 0.29em 0.29em 0 0;
      content: '';
      display: inline-block;
      height: 0.69em;
      left: 0.05em;
      position: relative;
      top: 0.15em;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      vertical-align: middle;
      width: 0.71em;
    }

    .chevron.bottom:before {
      top: -.3em;
      -webkit-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
      transform: rotate(135deg);
    }

    .btn-link {
      outline: 0;
    }

    .btn-link.disabled {
      cursor: not-allowed;
      opacity: .65;
    }

    input {
      text-align: center;
    }
  `],
        template: `
     <fieldset [disabled]="disabled" [class.disabled]="disabled">
      <table>
        <tr *ngIf="spinners">
          <td class="text-center">
            <button type="button" class="btn-link" (click)="changeHour(hourStep)"
              [disabled]="disabled" [class.disabled]="disabled">
              <span class="chevron"></span>
            </button>
          </td>
          <td>&nbsp;</td>
          <td class="text-center">
            <button type="button" class="btn-link" (click)="changeMinute(minuteStep)"
              [disabled]="disabled" [class.disabled]="disabled">
                <span class="chevron"></span>
            </button>
          </td>
          <template [ngIf]="seconds">
            <td>&nbsp;</td>
            <td class="text-center">
              <button type="button" class="btn-link" (click)="changeSecond(secondStep)"
                [disabled]="disabled" [class.disabled]="disabled">
                <span class="chevron"></span>
              </button>
            </td>
          </template>
          <template [ngIf]="meridian">
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </template>
        </tr>
        <tr>
          <td>
            <input type="text" class="form-control" [ngClass]="setFormControlSize()" maxlength="2" size="2" placeholder="HH"
              [value]="formatHour(model?.hour)" (change)="updateHour($event.target.value)"
              [readonly]="readonlyInputs" [disabled]="disabled">
          </td>
          <td>&nbsp;:&nbsp;</td>
          <td>
            <input type="text" class="form-control" [ngClass]="setFormControlSize()" maxlength="2" size="2" placeholder="MM"
              [value]="formatMinSec(model?.minute)" (change)="updateMinute($event.target.value)"
              [readonly]="readonlyInputs" [disabled]="disabled">
          </td>
          <template [ngIf]="seconds">
            <td>&nbsp;:&nbsp;</td>
            <td>
              <input type="text" class="form-control" [ngClass]="setFormControlSize()" maxlength="2" size="2" placeholder="SS"
                [value]="formatMinSec(model?.second)" (change)="updateSecond($event.target.value)"
                [readonly]="readonlyInputs" [disabled]="disabled">
            </td>
          </template>
          <template [ngIf]="meridian">
            <td>&nbsp;&nbsp;</td>
            <td>
              <button type="button" class="btn btn-outline-primary" [ngClass]="setMeridanSize()"
                (click)="toggleMeridian()">{{model.hour >= 12 ? 'PM' : 'AM'}}</button>
            </td>
          </template>
        </tr>
        <tr *ngIf="spinners">
          <td class="text-center">
            <button type="button" class="btn-link" (click)="changeHour(-hourStep)"
              [disabled]="disabled" [class.disabled]="disabled">
              <span class="chevron bottom"></span>
            </button>
          </td>
          <td>&nbsp;</td>
          <td class="text-center">
            <button type="button" class="btn-link" (click)="changeMinute(-minuteStep)"
              [disabled]="disabled" [class.disabled]="disabled">
              <span class="chevron bottom"></span>
            </button>
          </td>
          <template [ngIf]="seconds">
            <td>&nbsp;</td>
            <td class="text-center">
              <button type="button" class="btn-link" (click)="changeSecond(-secondStep)"
                [disabled]="disabled" [class.disabled]="disabled">
                <span class="chevron bottom"></span>
              </button>
            </td>
          </template>
          <template [ngIf]="meridian">
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </template>
        </tr>
      </table>
    </fieldset>
  `,
        providers: [NGB_TIMEPICKER_VALUE_ACCESSOR]
    }), 
    __metadata('design:paramtypes', [Object])
], NgbTimepicker);
function NgbTimepicker_tsickle_Closure_declarations() {
    /** @type {boolean} */
    NgbTimepicker.prototype.disabled;
    /** @type {!NgbTime} */
    NgbTimepicker.prototype.model;
    /**
     * Whether to display 12H or 24H mode.
     * @type {boolean}
     */
    NgbTimepicker.prototype.meridian;
    /**
     * Whether to display the spinners above and below the inputs.
     * @type {boolean}
     */
    NgbTimepicker.prototype.spinners;
    /**
     * Whether to display seconds input.
     * @type {boolean}
     */
    NgbTimepicker.prototype.seconds;
    /**
     * Number of hours to increase or decrease when using a button.
     * @type {number}
     */
    NgbTimepicker.prototype.hourStep;
    /**
     * Number of minutes to increase or decrease when using a button.
     * @type {number}
     */
    NgbTimepicker.prototype.minuteStep;
    /**
     * Number of seconds to increase or decrease when using a button.
     * @type {number}
     */
    NgbTimepicker.prototype.secondStep;
    /**
     * To make timepicker readonly
     * @type {boolean}
     */
    NgbTimepicker.prototype.readonlyInputs;
    /**
     * To set the size of the inputs and button
     * @type {string}
     */
    NgbTimepicker.prototype.size;
    /** @type {function(?): void} */
    NgbTimepicker.prototype.onChange;
    /** @type {function(): void} */
    NgbTimepicker.prototype.onTouched;
}
//# sourceMappingURL=timepicker.js.map