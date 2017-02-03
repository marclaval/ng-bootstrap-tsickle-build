goog.module('tmp.ng_bootstrap.buttons.radio'); exports = {}; var module = {id: 'tmp/ng-bootstrap/buttons/radio.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, forwardRef, Optional, Input, Renderer, ElementRef, OnDestroy } from '@angular/core';
const Directive = Directive; /* local alias for Closure JSDoc */
const forwardRef = forwardRef; /* local alias for Closure JSDoc */
const Optional = Optional; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const Renderer = Renderer; /* local alias for Closure JSDoc */
const ElementRef = ElementRef; /* local alias for Closure JSDoc */
const OnDestroy = OnDestroy; /* local alias for Closure JSDoc */
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const ControlValueAccessor = ControlValueAccessor; /* local alias for Closure JSDoc */
const NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR; /* local alias for Closure JSDoc */
const /** @type {?} */ NGB_RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbRadioGroup),
    multi: true
};
/**
 * Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable
 * specified via ngModel.
 */
export let NgbRadioGroup = class NgbRadioGroup {
    constructor() {
        this._radios = new Set();
        this._value = null;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    /**
     * @return {boolean}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {boolean} isDisabled
     * @return {void}
     */
    set disabled(isDisabled) { this.setDisabledState(isDisabled); }
    /**
     * @param {!NgbRadio} radio
     * @return {void}
     */
    onRadioChange(radio) {
        this.writeValue(radio.value);
        this.onChange(radio.value);
    }
    /**
     * @return {void}
     */
    onRadioValueUpdate() { this._updateRadiosValue(); }
    /**
     * @param {!NgbRadio} radio
     * @return {void}
     */
    register(radio) { this._radios.add(radio); }
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
    setDisabledState(isDisabled) {
        this._disabled = isDisabled;
        this._updateRadiosDisabled();
    }
    /**
     * @param {!NgbRadio} radio
     * @return {void}
     */
    unregister(radio) { this._radios.delete(radio); }
    /**
     * @param {?} value
     * @return {void}
     */
    writeValue(value) {
        this._value = value;
        this._updateRadiosValue();
    }
    /**
     * @return {void}
     */
    _updateRadiosValue() { this._radios.forEach((radio) => radio.updateValue(this._value)); }
    /**
     * @return {void}
     */
    _updateRadiosDisabled() { this._radios.forEach((radio) => radio.updateDisabled()); }
};
NgbRadioGroup = __decorate([
    Directive({
        selector: '[ngbRadioGroup]',
        host: { 'data-toggle': 'buttons', 'class': 'btn-group' },
        providers: [NGB_RADIO_VALUE_ACCESSOR]
    }), 
    __metadata('design:paramtypes', [])
], NgbRadioGroup);
function NgbRadioGroup_tsickle_Closure_declarations() {
    /** @type {!Set<!NgbRadio>} */
    NgbRadioGroup.prototype._radios;
    /** @type {?} */
    NgbRadioGroup.prototype._value;
    /** @type {boolean} */
    NgbRadioGroup.prototype._disabled;
    /** @type {function(?): void} */
    NgbRadioGroup.prototype.onChange;
    /** @type {function(): void} */
    NgbRadioGroup.prototype.onTouched;
}
export let NgbActiveLabel = class NgbActiveLabel {
    /**
     * @param {!Renderer} _renderer
     * @param {!ElementRef} _elRef
     */
    constructor(_renderer, _elRef) {
        this._renderer = _renderer;
        this._elRef = _elRef;
    }
    /**
     * @param {boolean} isActive
     * @return {void}
     */
    set active(isActive) { this._renderer.setElementClass(this._elRef.nativeElement, 'active', isActive); }
    /**
     * @param {boolean} isDisabled
     * @return {void}
     */
    set disabled(isDisabled) {
        this._renderer.setElementClass(this._elRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * @param {boolean} isFocused
     * @return {void}
     */
    set focused(isFocused) { this._renderer.setElementClass(this._elRef.nativeElement, 'focus', isFocused); }
};
NgbActiveLabel = __decorate([
    Directive({ selector: 'label.btn' }), 
    __metadata('design:paramtypes', [Object, Object])
], NgbActiveLabel);
function NgbActiveLabel_tsickle_Closure_declarations() {
    /** @type {!Renderer} */
    NgbActiveLabel.prototype._renderer;
    /** @type {!ElementRef} */
    NgbActiveLabel.prototype._elRef;
}
/**
 * Marks an input of type "radio" as part of the NgbRadioGroup.
 */
export let NgbRadio = class NgbRadio {
    /**
     * @param {!NgbRadioGroup} _group
     * @param {!NgbActiveLabel} _label
     * @param {!Renderer} _renderer
     * @param {!ElementRef} _element
     */
    constructor(_group, _label, _renderer, _element) {
        this._group = _group;
        this._label = _label;
        this._renderer = _renderer;
        this._element = _element;
        this._value = null;
        if (this._group) {
            this._group.register(this);
        }
    }
    /**
     * You can specify model value of a given radio by binding to the value property.
     * @param {?} value
     * @return {void}
     */
    set value(value) {
        this._value = value;
        const /** @type {?} */ stringValue = value ? value.toString() : '';
        this._renderer.setElementProperty(this._element.nativeElement, 'value', stringValue);
        if (this._group) {
            this._group.onRadioValueUpdate();
        }
    }
    /**
     * @param {?} value
     * @return {void}
     */
    set checked(value) {
        this._checked = this._element.nativeElement.hasAttribute('checked') ? true : value;
    }
    /**
     * @param {?} isDisabled
     * @return {void}
     */
    set disabled(isDisabled) {
        this._disabled = isDisabled !== false;
        this.updateDisabled();
    }
    /**
     * @param {boolean} isFocused
     * @return {void}
     */
    set focused(isFocused) {
        if (this._label) {
            this._label.focused = isFocused;
        }
    }
    /**
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @return {?}
     */
    get checked() { return this._checked; }
    /**
     * @return {?}
     */
    get disabled() { return (this._group && this._group.disabled) || this._disabled; }
    /**
     * @return {void}
     */
    ngOnDestroy() {
        if (this._group) {
            this._group.unregister(this);
        }
    }
    /**
     * @return {void}
     */
    onChange() {
        if (this._group) {
            this._group.onRadioChange(this);
        }
    }
    /**
     * @param {?} value
     * @return {void}
     */
    updateValue(value) {
        this._checked = (this.value === value && value !== null);
        this._label.active = this._checked;
    }
    /**
     * @return {void}
     */
    updateDisabled() {
        let /** @type {boolean} */ disabled = (this._group && this._group.disabled) || this._disabled;
        if (this._label) {
            this._label.disabled = disabled;
        }
    }
};
__decorate([
    Input('value'), 
    __metadata('design:type', Object), 
    __metadata('design:paramtypes', [Object])
], NgbRadio.prototype, "value", null);
__decorate([
    Input('checked'), 
    __metadata('design:type', Object), 
    __metadata('design:paramtypes', [Object])
], NgbRadio.prototype, "checked", null);
__decorate([
    Input('disabled'), 
    __metadata('design:type', Object), 
    __metadata('design:paramtypes', [Object])
], NgbRadio.prototype, "disabled", null);
NgbRadio = __decorate([
    Directive({
        selector: 'input[type=radio]',
        host: {
            '[checked]': 'checked',
            '[disabled]': 'disabled',
            '(change)': 'onChange()',
            '(focus)': 'focused = true',
            '(blur)': 'focused = false'
        }
    }),
    __param(0, Optional()),
    __param(1, Optional()), 
    __metadata('design:paramtypes', [NgbRadioGroup, NgbActiveLabel, Object, Object])
], NgbRadio);
function NgbRadio_tsickle_Closure_declarations() {
    /** @type {boolean} */
    NgbRadio.prototype._checked;
    /** @type {boolean} */
    NgbRadio.prototype._disabled;
    /** @type {?} */
    NgbRadio.prototype._value;
    /** @type {!NgbRadioGroup} */
    NgbRadio.prototype._group;
    /** @type {!NgbActiveLabel} */
    NgbRadio.prototype._label;
    /** @type {!Renderer} */
    NgbRadio.prototype._renderer;
    /** @type {!ElementRef} */
    NgbRadio.prototype._element;
}
//# sourceMappingURL=radio.js.map