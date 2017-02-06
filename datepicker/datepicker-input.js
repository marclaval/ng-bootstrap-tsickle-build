goog.module('_ng_bootstrap.ng_bootstrap.datepicker.datepicker_input'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-input.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, ComponentRef, ElementRef, ViewContainerRef, Renderer, ComponentFactoryResolver, NgZone, TemplateRef, forwardRef, EventEmitter, Output } from '@angular/core';
const Directive = Directive; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const ComponentRef = ComponentRef; /* local alias for Closure JSDoc */
const ElementRef = ElementRef; /* local alias for Closure JSDoc */
const ViewContainerRef = ViewContainerRef; /* local alias for Closure JSDoc */
const Renderer = Renderer; /* local alias for Closure JSDoc */
const ComponentFactoryResolver = ComponentFactoryResolver; /* local alias for Closure JSDoc */
const NgZone = NgZone; /* local alias for Closure JSDoc */
const TemplateRef = TemplateRef; /* local alias for Closure JSDoc */
const forwardRef = forwardRef; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const ControlValueAccessor = ControlValueAccessor; /* local alias for Closure JSDoc */
const NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR; /* local alias for Closure JSDoc */
import { NgbDate } from './ngb-date';
const NgbDate = NgbDate; /* local alias for Closure JSDoc */
import { NgbDatepicker, NgbDatepickerNavigateEvent } from './datepicker';
const NgbDatepicker = NgbDatepicker; /* local alias for Closure JSDoc */
const NgbDatepickerNavigateEvent = NgbDatepickerNavigateEvent; /* local alias for Closure JSDoc */
import { DayTemplateContext } from './datepicker-day-template-context';
const DayTemplateContext = DayTemplateContext; /* local alias for Closure JSDoc */
import { NgbDateParserFormatter } from './ngb-date-parser-formatter';
const NgbDateParserFormatter = NgbDateParserFormatter; /* local alias for Closure JSDoc */
import { positionElements } from '../util/positioning';
const positionElements = positionElements; /* local alias for Closure JSDoc */
import { NgbDateStruct } from './ngb-date-struct';
const NgbDateStruct = NgbDateStruct; /* local alias for Closure JSDoc */
import { NgbCalendar } from './ngb-calendar';
const NgbCalendar = NgbCalendar; /* local alias for Closure JSDoc */
import { NgbDatepickerService } from './datepicker-service';
const NgbDatepickerService = NgbDatepickerService; /* local alias for Closure JSDoc */
const /** @type {?} */ NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbInputDatepicker),
    multi: true
};
/**
 * A directive that makes it possible to have datepickers on input fields.
 * Manages integration with the input field itself (data entry) and ngModel (validation etc.).
 */
export let NgbInputDatepicker = class NgbInputDatepicker {
    /**
     * @param {!NgbDateParserFormatter} _parserFormatter
     * @param {!ElementRef} _elRef
     * @param {!ViewContainerRef} _vcRef
     * @param {!Renderer} _renderer
     * @param {!ComponentFactoryResolver} _cfr
     * @param {!NgZone} ngZone
     * @param {!NgbDatepickerService} _service
     * @param {!NgbCalendar} _calendar
     */
    constructor(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, ngZone, _service, _calendar) {
        this._parserFormatter = _parserFormatter;
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._cfr = _cfr;
        this._service = _service;
        this._calendar = _calendar;
        this._cRef = null;
        /**
         * An event fired when navigation happens and currently displayed month changes.
         * See NgbDatepickerNavigateEvent for the payload info.
         */
        this.navigate = new EventEmitter();
        this._onChange = (_) => { };
        this._onTouched = () => { };
        this._zoneSubscription = ngZone.onStable.subscribe(() => {
            if (this._cRef) {
                positionElements(this._elRef.nativeElement, this._cRef.location.nativeElement, 'bottom-left');
            }
        });
    }
    /**
     * @param {function(?): ?} fn
     * @return {void}
     */
    registerOnChange(fn) { this._onChange = fn; }
    /**
     * @param {function(): ?} fn
     * @return {void}
     */
    registerOnTouched(fn) { this._onTouched = fn; }
    /**
     * @param {?} value
     * @return {void}
     */
    writeValue(value) {
        const /** @type {!NgbDate} */ ngbDate = value ? new NgbDate(value.year, value.month, value.day) : null;
        this._model = this._calendar.isValid(value) ? ngbDate : null;
        this._writeModelValue(this._model);
    }
    /**
     * @param {boolean} isDisabled
     * @return {void}
     */
    setDisabledState(isDisabled) {
        this._renderer.setElementProperty(this._elRef.nativeElement, 'disabled', isDisabled);
        if (this.isOpen()) {
            this._cRef.instance.setDisabledState(isDisabled);
        }
    }
    /**
     * @param {string} value
     * @return {void}
     */
    manualDateChange(value) {
        this._model = this._service.toValidDate(this._parserFormatter.parse(value), null);
        this._onChange(this._model ? { year: this._model.year, month: this._model.month, day: this._model.day } : null);
        this._writeModelValue(this._model);
    }
    /**
     * @return {boolean}
     */
    isOpen() { return !!this._cRef; }
    /**
     * Opens the datepicker with the selected date indicated by the ngModel value.
     * @return {void}
     */
    open() {
        if (!this.isOpen()) {
            const /** @type {!ComponentFactory<!NgbDatepicker>} */ cf = this._cfr.resolveComponentFactory(NgbDatepicker);
            this._cRef = this._vcRef.createComponent(cf);
            this._applyPopupStyling(this._cRef.location.nativeElement);
            this._cRef.instance.writeValue(this._model);
            this._applyDatepickerInputs(this._cRef.instance);
            this._subscribeForDatepickerOutputs(this._cRef.instance);
            this._cRef.instance.ngOnInit();
            // date selection event handling
            this._cRef.instance.registerOnChange((selectedDate) => {
                this.writeValue(selectedDate);
                this._onChange(selectedDate);
                this.close();
            });
        }
    }
    /**
     * Closes the datepicker popup.
     * @return {void}
     */
    close() {
        if (this.isOpen()) {
            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
            this._cRef = null;
        }
    }
    /**
     * Toggles the datepicker popup (opens when closed and closes when opened).
     * @return {void}
     */
    toggle() {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     * @param {{year: number, month: number}=} date
     * @return {void}
     */
    navigateTo(date) {
        if (this.isOpen()) {
            this._cRef.instance.navigateTo(date);
        }
    }
    /**
     * @return {void}
     */
    onBlur() { this._onTouched(); }
    /**
     * @param {!NgbDatepicker} datepickerInstance
     * @return {void}
     */
    _applyDatepickerInputs(datepickerInstance) {
        ['dayTemplate', 'displayMonths', 'firstDayOfWeek', 'markDisabled', 'minDate', 'maxDate', 'navigation',
            'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers']
            .forEach((optionName) => {
            if (this[optionName] !== undefined) {
                datepickerInstance[optionName] = this[optionName];
            }
        });
        datepickerInstance.startDate = this.startDate || this._model;
    }
    /**
     * @param {?} nativeElement
     * @return {void}
     */
    _applyPopupStyling(nativeElement) {
        this._renderer.setElementClass(nativeElement, 'dropdown-menu', true);
        this._renderer.setElementStyle(nativeElement, 'padding', '0');
    }
    /**
     * @param {!NgbDatepicker} datepickerInstance
     * @return {void}
     */
    _subscribeForDatepickerOutputs(datepickerInstance) {
        datepickerInstance.navigate.subscribe(date => this.navigate.emit(date));
    }
    /**
     * @param {!NgbDate} model
     * @return {void}
     */
    _writeModelValue(model) {
        this._renderer.setElementProperty(this._elRef.nativeElement, 'value', this._parserFormatter.format(model));
        if (this.isOpen()) {
            this._cRef.instance.writeValue(model);
            this._onTouched();
        }
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbInputDatepicker.prototype, "dayTemplate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbInputDatepicker.prototype, "displayMonths", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbInputDatepicker.prototype, "firstDayOfWeek", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Function)
], NgbInputDatepicker.prototype, "markDisabled", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbInputDatepicker.prototype, "minDate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbInputDatepicker.prototype, "maxDate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbInputDatepicker.prototype, "navigation", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbInputDatepicker.prototype, "outsideDays", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbInputDatepicker.prototype, "showWeekdays", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbInputDatepicker.prototype, "showWeekNumbers", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbInputDatepicker.prototype, "startDate", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbInputDatepicker.prototype, "navigate", void 0);
NgbInputDatepicker = __decorate([
    Directive({
        selector: 'input[ngbDatepicker]',
        exportAs: 'ngbDatepicker',
        host: { '(change)': 'manualDateChange($event.target.value)', '(keyup.esc)': 'close()', '(blur)': 'onBlur()' },
        providers: [NGB_DATEPICKER_VALUE_ACCESSOR]
    }), 
    __metadata('design:paramtypes', [Object, Object, Object, Object, Object, Object, Object, Object])
], NgbInputDatepicker);
function NgbInputDatepicker_tsickle_Closure_declarations() {
    /** @type {!ComponentRef<!NgbDatepicker>} */
    NgbInputDatepicker.prototype._cRef;
    /** @type {!NgbDate} */
    NgbInputDatepicker.prototype._model;
    /** @type {?} */
    NgbInputDatepicker.prototype._zoneSubscription;
    /**
     * Reference for the custom template for the day display
     * @type {!TemplateRef<!DayTemplateContext>}
     */
    NgbInputDatepicker.prototype.dayTemplate;
    /**
     * Number of months to display
     * @type {number}
     */
    NgbInputDatepicker.prototype.displayMonths;
    /**
     * First day of the week. With default calendar we use ISO 8601: 1=Mon ... 7=Sun
     * @type {number}
     */
    NgbInputDatepicker.prototype.firstDayOfWeek;
    /**
     * Callback to mark a given date as disabled.
     * 'Current' contains the month that will be displayed in the view
     * @type {function(!NgbDateStruct, {year: number, month: number}): boolean}
     */
    NgbInputDatepicker.prototype.markDisabled;
    /**
     * Min date for the navigation. If not provided will be 10 years before today or `startDate`
     * @type {!NgbDateStruct}
     */
    NgbInputDatepicker.prototype.minDate;
    /**
     * Max date for the navigation. If not provided will be 10 years from today or `startDate`
     * @type {!NgbDateStruct}
     */
    NgbInputDatepicker.prototype.maxDate;
    /**
     * Navigation type: `select` (default with select boxes for month and year), `arrows`
     * (without select boxes, only navigation arrows) or `none` (no navigation at all)
     * @type {string}
     */
    NgbInputDatepicker.prototype.navigation;
    /**
     * The way to display days that don't belong to current month: `visible` (default),
     * `hidden` (not displayed) or `collapsed` (not displayed with empty space collapsed)
     * @type {string}
     */
    NgbInputDatepicker.prototype.outsideDays;
    /**
     * Whether to display days of the week
     * @type {boolean}
     */
    NgbInputDatepicker.prototype.showWeekdays;
    /**
     * Whether to display week numbers
     * @type {boolean}
     */
    NgbInputDatepicker.prototype.showWeekNumbers;
    /**
     * Date to open calendar with.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided, calendar will open with current month.
     * Use 'navigateTo(date)' as an alternative
     * @type {{year: number, month: number}}
     */
    NgbInputDatepicker.prototype.startDate;
    /**
     * An event fired when navigation happens and currently displayed month changes.
     * See NgbDatepickerNavigateEvent for the payload info.
     * @type {!EventEmitter<!NgbDatepickerNavigateEvent>}
     */
    NgbInputDatepicker.prototype.navigate;
    /** @type {function(?): void} */
    NgbInputDatepicker.prototype._onChange;
    /** @type {function(): void} */
    NgbInputDatepicker.prototype._onTouched;
    /** @type {!NgbDateParserFormatter} */
    NgbInputDatepicker.prototype._parserFormatter;
    /** @type {!ElementRef} */
    NgbInputDatepicker.prototype._elRef;
    /** @type {!ViewContainerRef} */
    NgbInputDatepicker.prototype._vcRef;
    /** @type {!Renderer} */
    NgbInputDatepicker.prototype._renderer;
    /** @type {!ComponentFactoryResolver} */
    NgbInputDatepicker.prototype._cfr;
    /** @type {!NgbDatepickerService} */
    NgbInputDatepicker.prototype._service;
    /** @type {!NgbCalendar} */
    NgbInputDatepicker.prototype._calendar;
}
//# sourceMappingURL=datepicker-input.js.map