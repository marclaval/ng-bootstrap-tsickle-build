goog.module('tmp.ng_bootstrap.rating.rating'); exports = {}; var module = {id: 'tmp/ng-bootstrap/rating/rating.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit, TemplateRef, OnChanges, SimpleChanges, ContentChild, forwardRef, ChangeDetectorRef } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const ChangeDetectionStrategy = ChangeDetectionStrategy; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
const OnInit = OnInit; /* local alias for Closure JSDoc */
const TemplateRef = TemplateRef; /* local alias for Closure JSDoc */
const OnChanges = OnChanges; /* local alias for Closure JSDoc */
const SimpleChanges = SimpleChanges; /* local alias for Closure JSDoc */
const ContentChild = ContentChild; /* local alias for Closure JSDoc */
const forwardRef = forwardRef; /* local alias for Closure JSDoc */
const ChangeDetectorRef = ChangeDetectorRef; /* local alias for Closure JSDoc */
import { NgbRatingConfig } from './rating-config';
const NgbRatingConfig = NgbRatingConfig; /* local alias for Closure JSDoc */
import { toString, getValueInRange } from '../util/util';
const toString = toString; /* local alias for Closure JSDoc */
const getValueInRange = getValueInRange; /* local alias for Closure JSDoc */
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const ControlValueAccessor = ControlValueAccessor; /* local alias for Closure JSDoc */
const NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR; /* local alias for Closure JSDoc */
let Key = {};
/** @type {number} */
Key.End = 35;
/** @type {number} */
Key.Home = 36;
/** @type {number} */
Key.ArrowLeft = 37;
/** @type {number} */
Key.ArrowUp = 38;
/** @type {number} */
Key.ArrowRight = 39;
/** @type {number} */
Key.ArrowDown = 40;
Key[Key.End] = "End";
Key[Key.Home] = "Home";
Key[Key.ArrowLeft] = "ArrowLeft";
Key[Key.ArrowUp] = "ArrowUp";
Key[Key.ArrowRight] = "ArrowRight";
Key[Key.ArrowDown] = "ArrowDown";
/** @record */
export function StarTemplateContext() { }
/**
 * Star fill percentage. An integer value between 0 and 100
 * @type {number}
 */
StarTemplateContext.prototype.fill;
const /** @type {?} */ NGB_RATING_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbRating),
    multi: true
};
/**
 * Rating directive that will take care of visualising a star rating bar.
 */
export let NgbRating = class NgbRating {
    /**
     * @param {!NgbRatingConfig} config
     * @param {!ChangeDetectorRef} _changeDetectorRef
     */
    constructor(config, _changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.range = [];
        /**
         * An event fired when a user is hovering over a given rating.
         * Event's payload equals to the rating being hovered over.
         */
        this.hover = new EventEmitter();
        /**
         * An event fired when a user stops hovering over a given rating.
         * Event's payload equals to the rating of the last item being hovered over.
         */
        this.leave = new EventEmitter();
        /**
         * An event fired when a user selects a new rating.
         * Event's payload equals to the newly selected rating.
         */
        this.rateChange = new EventEmitter(true);
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.max = config.max;
        this.readonly = config.readonly;
    }
    /**
     * @return {string}
     */
    ariaValueText() { return `${this.rate} out of ${this.max}`; }
    /**
     * @param {number} value
     * @return {void}
     */
    enter(value) {
        if (!this.readonly) {
            this.rate = value;
        }
        this.hover.emit(value);
    }
    /**
     * @param {!KeyboardEvent} event
     * @return {void}
     */
    handleKeyDown(event) {
        if (Key[toString(event.which)]) {
            event.preventDefault();
            switch (event.which) {
                case Key.ArrowDown:
                case Key.ArrowLeft:
                    this.update(this.rate - 1);
                    break;
                case Key.ArrowUp:
                case Key.ArrowRight:
                    this.update(this.rate + 1);
                    break;
                case Key.Home:
                    this.update(0);
                    break;
                case Key.End:
                    this.update(this.max);
                    break;
            }
        }
    }
    /**
     * @param {number} index
     * @return {number}
     */
    getFillValue(index) {
        const /** @type {number} */ diff = this.rate - index;
        if (diff >= 1) {
            return 100;
        }
        if (diff < 1 && diff > 0) {
            return Number.parseInt((diff * 100).toFixed(2));
        }
        return 0;
    }
    /**
     * @param {!SimpleChanges} changes
     * @return {void}
     */
    ngOnChanges(changes) {
        if (changes['rate']) {
            this.update(this.rate);
            this._oldRate = this.rate;
        }
    }
    /**
     * @return {void}
     */
    ngOnInit() { this.range = Array.from({ length: this.max }, (v, k) => k + 1); }
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
     * @return {void}
     */
    reset() {
        this.leave.emit(this.rate);
        this.rate = this._oldRate;
    }
    /**
     * @param {number} value
     * @param {boolean=} internalChange
     * @return {void}
     */
    update(value, internalChange = true) {
        if (!this.readonly) {
            const /** @type {number} */ newRate = value ? getValueInRange(value, this.max, 0) : 0;
            if (this._oldRate !== newRate) {
                this._oldRate = newRate;
                this.rate = newRate;
                this.rateChange.emit(newRate);
                if (internalChange) {
                    this.onChange(this.rate);
                }
            }
        }
    }
    /**
     * @param {?} value
     * @return {void}
     */
    writeValue(value) {
        this.update(value, false);
        this._changeDetectorRef.markForCheck();
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbRating.prototype, "max", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbRating.prototype, "rate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbRating.prototype, "readonly", void 0);
__decorate([
    Input(),
    ContentChild(TemplateRef), 
    __metadata('design:type', Object)
], NgbRating.prototype, "starTemplate", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbRating.prototype, "hover", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbRating.prototype, "leave", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbRating.prototype, "rateChange", void 0);
NgbRating = __decorate([
    Component({
        selector: 'ngb-rating',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { '(keydown)': 'handleKeyDown($event)' },
        template: `
    <template #t let-fill="fill">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</template>
    <span tabindex="0" (mouseleave)="reset()" role="slider" aria-valuemin="0"
      [attr.aria-valuemax]="max" [attr.aria-valuenow]="rate" [attr.aria-valuetext]="ariaValueText()">
      <template ngFor [ngForOf]="range" let-index="index">
        <span class="sr-only">({{ index < rate ? '*' : ' ' }})</span>
        <span (mouseenter)="enter(index + 1)" (click)="update(index + 1)" 
        [style.cursor]="readonly ? 'default' : 'pointer'">
          <template [ngTemplateOutlet]="starTemplate || t" [ngOutletContext]="{fill: getFillValue(index)}"></template>
        </span>
      </template>
    </span>
  `,
        providers: [NGB_RATING_VALUE_ACCESSOR]
    }), 
    __metadata('design:paramtypes', [Object, Object])
], NgbRating);
function NgbRating_tsickle_Closure_declarations() {
    /** @type {number} */
    NgbRating.prototype._oldRate;
    /** @type {!Array<number>} */
    NgbRating.prototype.range;
    /**
     * Maximal rating that can be given using this widget.
     * @type {number}
     */
    NgbRating.prototype.max;
    /**
     * Current rating. Can be a decimal value like 3.75
     * @type {number}
     */
    NgbRating.prototype.rate;
    /**
     * A flag indicating if rating can be updated.
     * @type {boolean}
     */
    NgbRating.prototype.readonly;
    /**
     * A template to override star display.
     * Alternatively put a <template> as the only child of <ngb-rating> element
     * @type {!TemplateRef<!StarTemplateContext>}
     */
    NgbRating.prototype.starTemplate;
    /**
     * An event fired when a user is hovering over a given rating.
     * Event's payload equals to the rating being hovered over.
     * @type {!EventEmitter<number>}
     */
    NgbRating.prototype.hover;
    /**
     * An event fired when a user stops hovering over a given rating.
     * Event's payload equals to the rating of the last item being hovered over.
     * @type {!EventEmitter<number>}
     */
    NgbRating.prototype.leave;
    /**
     * An event fired when a user selects a new rating.
     * Event's payload equals to the newly selected rating.
     * @type {!EventEmitter<number>}
     */
    NgbRating.prototype.rateChange;
    /** @type {function(?): void} */
    NgbRating.prototype.onChange;
    /** @type {function(): void} */
    NgbRating.prototype.onTouched;
    /** @type {!ChangeDetectorRef} */
    NgbRating.prototype._changeDetectorRef;
}
//# sourceMappingURL=rating.js.map