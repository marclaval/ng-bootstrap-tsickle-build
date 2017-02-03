goog.module('tmp.ng_bootstrap.progressbar.progressbar'); exports = {}; var module = {id: 'tmp/ng-bootstrap/progressbar/progressbar.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const ChangeDetectionStrategy = ChangeDetectionStrategy; /* local alias for Closure JSDoc */
import { getValueInRange } from '../util/util';
const getValueInRange = getValueInRange; /* local alias for Closure JSDoc */
import { NgbProgressbarConfig } from './progressbar-config';
const NgbProgressbarConfig = NgbProgressbarConfig; /* local alias for Closure JSDoc */
/**
 * Directive that can be used to provide feedback on the progress of a workflow or an action.
 */
export let NgbProgressbar = class NgbProgressbar {
    /**
     * @param {!NgbProgressbarConfig} config
     */
    constructor(config) {
        /**
         * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
         */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.type = config.type;
        this.showValue = config.showValue;
    }
    /**
     * @return {number}
     */
    getValue() { return getValueInRange(this.value, this.max); }
    /**
     * @return {number}
     */
    getPercentValue() { return 100 * this.getValue() / this.max; }
};
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbProgressbar.prototype, "max", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbProgressbar.prototype, "animated", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbProgressbar.prototype, "striped", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbProgressbar.prototype, "showValue", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbProgressbar.prototype, "type", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbProgressbar.prototype, "value", void 0);
NgbProgressbar = __decorate([
    /* local alias for Closure JSDoc */ Component({
        selector: 'ngb-progressbar',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <div class="progress">
      <div class="progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?
    ' progress-bar-striped' : ''}}" role="progressbar" [style.width.%]="getPercentValue()"
    [attr.aria-valuenow]="getValue()" aria-valuemin="0" [attr.aria-valuemax]="max">
        <span *ngIf="showValue">{{getPercentValue()}}%</span><ng-content></ng-content>
      </div>
    </div>
  `
    }), 
    __metadata('design:paramtypes', [Object])
], NgbProgressbar);
function NgbProgressbar_tsickle_Closure_declarations() {
    /**
     * Maximal value to be displayed in the progressbar.
     * @type {number}
     */
    NgbProgressbar.prototype.max;
    /**
     * A flag indicating if the stripes of the progress bar should be animated. Takes effect only for browsers
     * supporting CSS3 animations, and if striped is true.
     * @type {boolean}
     */
    NgbProgressbar.prototype.animated;
    /**
     * A flag indicating if a progress bar should be displayed as striped.
     * @type {boolean}
     */
    NgbProgressbar.prototype.striped;
    /**
     * A flag indicating if the current percentage value should be shown.
     * @type {boolean}
     */
    NgbProgressbar.prototype.showValue;
    /**
     * Type of progress bar, can be one of "success", "info", "warning" or "danger".
     * @type {string}
     */
    NgbProgressbar.prototype.type;
    /**
     * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
     * @type {number}
     */
    NgbProgressbar.prototype.value;
}
//# sourceMappingURL=progressbar.js.map