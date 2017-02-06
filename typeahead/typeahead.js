goog.module('_ng_bootstrap.ng_bootstrap.typeahead.typeahead'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/typeahead/typeahead.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, OnInit, Input, Output, EventEmitter, ComponentRef, ComponentFactoryResolver, ViewContainerRef, Injector, Renderer, ElementRef, TemplateRef, forwardRef, OnDestroy, NgZone } from '@angular/core';
const Directive = Directive; /* local alias for Closure JSDoc */
const OnInit = OnInit; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
const ComponentRef = ComponentRef; /* local alias for Closure JSDoc */
const ComponentFactoryResolver = ComponentFactoryResolver; /* local alias for Closure JSDoc */
const ViewContainerRef = ViewContainerRef; /* local alias for Closure JSDoc */
const Injector = Injector; /* local alias for Closure JSDoc */
const Renderer = Renderer; /* local alias for Closure JSDoc */
const ElementRef = ElementRef; /* local alias for Closure JSDoc */
const TemplateRef = TemplateRef; /* local alias for Closure JSDoc */
const forwardRef = forwardRef; /* local alias for Closure JSDoc */
const OnDestroy = OnDestroy; /* local alias for Closure JSDoc */
const NgZone = NgZone; /* local alias for Closure JSDoc */
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const ControlValueAccessor = ControlValueAccessor; /* local alias for Closure JSDoc */
const NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR; /* local alias for Closure JSDoc */
import { Observable } from 'rxjs/Observable';
const Observable = Observable; /* local alias for Closure JSDoc */
import { Subscription } from 'rxjs/Subscription';
const Subscription = Subscription; /* local alias for Closure JSDoc */
import { letProto } from 'rxjs/operator/let';
const letProto = letProto; /* local alias for Closure JSDoc */
import { _do } from 'rxjs/operator/do';
const _do = _do; /* local alias for Closure JSDoc */
import { fromEvent } from 'rxjs/observable/fromEvent';
const fromEvent = fromEvent; /* local alias for Closure JSDoc */
import { positionElements } from '../util/positioning';
const positionElements = positionElements; /* local alias for Closure JSDoc */
import { NgbTypeaheadWindow, ResultTemplateContext } from './typeahead-window';
const NgbTypeaheadWindow = NgbTypeaheadWindow; /* local alias for Closure JSDoc */
const ResultTemplateContext = ResultTemplateContext; /* local alias for Closure JSDoc */
import { PopupService } from '../util/popup';
const PopupService = PopupService; /* local alias for Closure JSDoc */
import { toString, isDefined } from '../util/util';
const toString = toString; /* local alias for Closure JSDoc */
const isDefined = isDefined; /* local alias for Closure JSDoc */
import { NgbTypeaheadConfig } from './typeahead-config';
const NgbTypeaheadConfig = NgbTypeaheadConfig; /* local alias for Closure JSDoc */
let Key = {};
/** @type {number} */
Key.Tab = 9;
/** @type {number} */
Key.Enter = 13;
/** @type {number} */
Key.Escape = 27;
/** @type {number} */
Key.ArrowUp = 38;
/** @type {number} */
Key.ArrowDown = 40;
Key[Key.Tab] = "Tab";
Key[Key.Enter] = "Enter";
Key[Key.Escape] = "Escape";
Key[Key.ArrowUp] = "ArrowUp";
Key[Key.ArrowDown] = "ArrowDown";
const /** @type {?} */ NGB_TYPEAHEAD_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbTypeahead),
    multi: true
};
/** @record */
export function NgbTypeaheadSelectItemEvent() { }
/**
 * An item about to be selected
 * @type {?}
 */
NgbTypeaheadSelectItemEvent.prototype.item;
/**
 * Function that will prevent item selection if called
 * @type {function(): void}
 */
NgbTypeaheadSelectItemEvent.prototype.preventDefault;
/**
 * NgbTypeahead directive provides a simple way of creating powerful typeaheads from any text input
 */
export let NgbTypeahead = class NgbTypeahead {
    /**
     * @param {!ElementRef} _elementRef
     * @param {!ViewContainerRef} _viewContainerRef
     * @param {!Renderer} _renderer
     * @param {!Injector} _injector
     * @param {!ComponentFactoryResolver} componentFactoryResolver
     * @param {!NgbTypeaheadConfig} config
     * @param {!NgZone} ngZone
     */
    constructor(_elementRef, _viewContainerRef, _renderer, _injector, componentFactoryResolver, config, ngZone) {
        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._injector = _injector;
        /**
         * An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent.
         */
        this.selectItem = new EventEmitter();
        this._onTouched = () => { };
        this._onChange = (_) => { };
        this.editable = config.editable;
        this.focusFirst = config.focusFirst;
        this.showHint = config.showHint;
        this._valueChanges = fromEvent(_elementRef.nativeElement, 'input', ($event) => $event.target.value);
        this._popupService = new PopupService(NgbTypeaheadWindow, _injector, _viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(() => {
            if (this._windowRef) {
                positionElements(this._elementRef.nativeElement, this._windowRef.location.nativeElement, 'bottom-left');
            }
        });
    }
    /**
     * @return {void}
     */
    ngOnInit() {
        const /** @type {?} */ inputValues$ = _do.call(this._valueChanges, value => {
            this._userInput = value;
            if (this.editable) {
                this._onChange(value);
            }
        });
        const /** @type {?} */ results$ = letProto.call(inputValues$, this.ngbTypeahead);
        const /** @type {?} */ userInput$ = _do.call(results$, () => {
            if (!this.editable) {
                this._onChange(undefined);
            }
        });
        this._subscription = this._subscribeToUserInput(userInput$);
    }
    /**
     * @return {void}
     */
    ngOnDestroy() {
        this._unsubscribeFromUserInput();
        this._zoneSubscription.unsubscribe();
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
    writeValue(value) { this._writeInputValue(this._formatItemForInput(value)); }
    /**
     * @param {boolean} isDisabled
     * @return {void}
     */
    setDisabledState(isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * @return {void}
     */
    dismissPopup() {
        if (this.isPopupOpen()) {
            this._closePopup();
            this._writeInputValue(this._userInput);
        }
    }
    /**
     * @return {boolean}
     */
    isPopupOpen() { return this._windowRef != null; }
    /**
     * @return {void}
     */
    handleBlur() { this._onTouched(); }
    /**
     * @param {!KeyboardEvent} event
     * @return {void}
     */
    handleKeyDown(event) {
        if (!this._windowRef) {
            return;
        }
        if (Key[toString(event.which)]) {
            switch (event.which) {
                case Key.ArrowDown:
                    event.preventDefault();
                    this._windowRef.instance.next();
                    this._showHint();
                    break;
                case Key.ArrowUp:
                    event.preventDefault();
                    this._windowRef.instance.prev();
                    this._showHint();
                    break;
                case Key.Enter:
                case Key.Tab:
                    const /** @type {?} */ result = this._windowRef.instance.getActive();
                    if (isDefined(result)) {
                        event.preventDefault();
                        event.stopPropagation();
                        this._selectResult(result);
                    }
                    this._closePopup();
                    break;
                case Key.Escape:
                    event.preventDefault();
                    this.dismissPopup();
                    break;
            }
        }
    }
    /**
     * @return {void}
     */
    _openPopup() {
        if (!this._windowRef) {
            this._windowRef = this._popupService.open();
            this._windowRef.instance.selectEvent.subscribe((result) => this._selectResultClosePopup(result));
        }
    }
    /**
     * @return {void}
     */
    _closePopup() {
        this._popupService.close();
        this._windowRef = null;
    }
    /**
     * @param {?} result
     * @return {void}
     */
    _selectResult(result) {
        let /** @type {boolean} */ defaultPrevented = false;
        this.selectItem.emit({ item: result, preventDefault: () => { defaultPrevented = true; } });
        if (!defaultPrevented) {
            this.writeValue(result);
            this._onChange(result);
        }
    }
    /**
     * @param {?} result
     * @return {void}
     */
    _selectResultClosePopup(result) {
        this._selectResult(result);
        this._closePopup();
    }
    /**
     * @return {void}
     */
    _showHint() {
        if (this.showHint) {
            const /** @type {string} */ userInputLowerCase = this._userInput.toLowerCase();
            const /** @type {string} */ formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
            if (userInputLowerCase === formattedVal.substr(0, this._userInput.length).toLowerCase()) {
                this._writeInputValue(this._userInput + formattedVal.substr(this._userInput.length));
                this._renderer.invokeElementMethod(this._elementRef.nativeElement, 'setSelectionRange', [this._userInput.length, formattedVal.length]);
            }
            else {
                this.writeValue(this._windowRef.instance.getActive());
            }
        }
    }
    /**
     * @param {?} item
     * @return {string}
     */
    _formatItemForInput(item) {
        return item && this.inputFormatter ? this.inputFormatter(item) : toString(item);
    }
    /**
     * @param {string} value
     * @return {void}
     */
    _writeInputValue(value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', value);
    }
    /**
     * @param {!Observable<!Array<?>>} userInput$
     * @return {!Subscription}
     */
    _subscribeToUserInput(userInput$) {
        return userInput$.subscribe((results) => {
            if (!results || results.length === 0) {
                this._closePopup();
            }
            else {
                this._openPopup();
                this._windowRef.instance.focusFirst = this.focusFirst;
                this._windowRef.instance.results = results;
                this._windowRef.instance.term = this._elementRef.nativeElement.value;
                if (this.resultFormatter) {
                    this._windowRef.instance.formatter = this.resultFormatter;
                }
                if (this.resultTemplate) {
                    this._windowRef.instance.resultTemplate = this.resultTemplate;
                }
                this._showHint();
                // The observable stream we are subscribing to might have async steps
                // and if a component containing typeahead is using the OnPush strategy
                // the change detection turn wouldn't be invoked automatically.
                this._windowRef.changeDetectorRef.detectChanges();
            }
        });
    }
    /**
     * @return {void}
     */
    _unsubscribeFromUserInput() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._subscription = null;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbTypeahead.prototype, "editable", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbTypeahead.prototype, "focusFirst", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Function)
], NgbTypeahead.prototype, "inputFormatter", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Function)
], NgbTypeahead.prototype, "ngbTypeahead", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Function)
], NgbTypeahead.prototype, "resultFormatter", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbTypeahead.prototype, "resultTemplate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbTypeahead.prototype, "showHint", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbTypeahead.prototype, "selectItem", void 0);
NgbTypeahead = __decorate([
    Directive({
        selector: 'input[ngbTypeahead]',
        host: {
            '(blur)': 'handleBlur()',
            '[class.open]': 'isPopupOpen()',
            '(document:click)': 'dismissPopup()',
            '(keydown)': 'handleKeyDown($event)',
            'autocomplete': 'off',
            'autocapitalize': 'off',
            'autocorrect': 'off'
        },
        providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
    }), 
    __metadata('design:paramtypes', [Object, Object, Object, Object, Object, Object, Object])
], NgbTypeahead);
function NgbTypeahead_tsickle_Closure_declarations() {
    /** @type {!PopupService<!NgbTypeaheadWindow>} */
    NgbTypeahead.prototype._popupService;
    /** @type {!Subscription} */
    NgbTypeahead.prototype._subscription;
    /** @type {string} */
    NgbTypeahead.prototype._userInput;
    /** @type {!Observable<string>} */
    NgbTypeahead.prototype._valueChanges;
    /** @type {!ComponentRef<!NgbTypeaheadWindow>} */
    NgbTypeahead.prototype._windowRef;
    /** @type {?} */
    NgbTypeahead.prototype._zoneSubscription;
    /**
     * A flag indicating if model values should be restricted to the ones selected from the popup only.
     * @type {boolean}
     */
    NgbTypeahead.prototype.editable;
    /**
     * A flag indicating if the first match should automatically be focused as you type.
     * @type {boolean}
     */
    NgbTypeahead.prototype.focusFirst;
    /**
     * A function to convert a given value into string to display in the input field
     * @type {function(?): string}
     */
    NgbTypeahead.prototype.inputFormatter;
    /**
     * A function to transform the provided observable text into the array of results.  Note that the "this" argument
     * is undefined so you need to explicitly bind it to a desired "this" target.
     * @type {function(!Observable<string>): !Observable<!Array<?>>}
     */
    NgbTypeahead.prototype.ngbTypeahead;
    /**
     * A function to format a given result before display. This function should return a formatted string without any
     * HTML markup
     * @type {function(?): string}
     */
    NgbTypeahead.prototype.resultFormatter;
    /**
     * A template to override a matching result default display
     * @type {!TemplateRef<!ResultTemplateContext>}
     */
    NgbTypeahead.prototype.resultTemplate;
    /**
     * Show hint when an option in the result list matches.
     * @type {boolean}
     */
    NgbTypeahead.prototype.showHint;
    /**
     * An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent.
     * @type {!EventEmitter<!NgbTypeaheadSelectItemEvent>}
     */
    NgbTypeahead.prototype.selectItem;
    /** @type {function(): void} */
    NgbTypeahead.prototype._onTouched;
    /** @type {function(?): void} */
    NgbTypeahead.prototype._onChange;
    /** @type {!ElementRef} */
    NgbTypeahead.prototype._elementRef;
    /** @type {!ViewContainerRef} */
    NgbTypeahead.prototype._viewContainerRef;
    /** @type {!Renderer} */
    NgbTypeahead.prototype._renderer;
    /** @type {!Injector} */
    NgbTypeahead.prototype._injector;
}
//# sourceMappingURL=typeahead.js.map