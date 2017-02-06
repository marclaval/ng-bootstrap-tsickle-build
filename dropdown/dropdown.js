goog.module('_ng_bootstrap.ng_bootstrap.dropdown.dropdown'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, Output, EventEmitter, ElementRef } from '@angular/core';
const Directive = Directive; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
const ElementRef = ElementRef; /* local alias for Closure JSDoc */
import { NgbDropdownConfig } from './dropdown-config';
const NgbDropdownConfig = NgbDropdownConfig; /* local alias for Closure JSDoc */
/**
 * Transforms a node into a dropdown.
 */
export let NgbDropdown = class NgbDropdown {
    /**
     * @param {!NgbDropdownConfig} config
     */
    constructor(config) {
        /**
         *  Defines whether or not the dropdown-menu is open initially.
         */
        this._open = false;
        /**
         *  An event fired when the dropdown is opened or closed.
         *  Event's payload equals whether dropdown is open.
         */
        this.openChange = new EventEmitter();
        this.up = config.up;
        this.autoClose = config.autoClose;
    }
    /**
     * Checks if the dropdown menu is open or not.
     * @return {boolean}
     */
    isOpen() { return this._open; }
    /**
     * Opens the dropdown menu of a given navbar or tabbed navigation.
     * @return {void}
     */
    open() {
        if (!this._open) {
            this._open = true;
            this.openChange.emit(true);
        }
    }
    /**
     * Closes the dropdown menu of a given navbar or tabbed navigation.
     * @return {void}
     */
    close() {
        if (this._open) {
            this._open = false;
            this.openChange.emit(false);
        }
    }
    /**
     * Toggles the dropdown menu of a given navbar or tabbed navigation.
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
     * @param {?} $event
     * @return {void}
     */
    closeFromOutsideClick($event) {
        if (this.autoClose && $event.button !== 2 && !this._isEventFromToggle($event)) {
            this.close();
        }
    }
    /**
     * @return {void}
     */
    closeFromOutsideEsc() {
        if (this.autoClose) {
            this.close();
        }
    }
    /**
     * \@internal
     * @param {?} toggleElement
     * @return {void}
     */
    set toggleElement(toggleElement) { this._toggleElement = toggleElement; }
    /**
     * @param {?} $event
     * @return {?}
     */
    _isEventFromToggle($event) { return !!this._toggleElement && this._toggleElement.contains($event.target); }
};
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbDropdown.prototype, "up", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbDropdown.prototype, "autoClose", void 0);
__decorate([
    Input('open'), 
    __metadata('design:type', Object)
], NgbDropdown.prototype, "_open", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbDropdown.prototype, "openChange", void 0);
NgbDropdown = __decorate([
    /* local alias for Closure JSDoc */ Directive({
        selector: '[ngbDropdown]',
        exportAs: 'ngbDropdown',
        host: {
            '[class.dropdown]': '!up',
            '[class.dropup]': 'up',
            '[class.show]': 'isOpen()',
            '(keyup.esc)': 'closeFromOutsideEsc()',
            '(document:click)': 'closeFromOutsideClick($event)'
        }
    }), 
    __metadata('design:paramtypes', [Object])
], NgbDropdown);
function NgbDropdown_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDropdown.prototype._toggleElement;
    /**
     * Indicates that the dropdown should open upwards
     * @type {boolean}
     */
    NgbDropdown.prototype.up;
    /**
     * Indicates that dropdown should be closed when selecting one of dropdown items (click) or pressing ESC.
     * @type {boolean}
     */
    NgbDropdown.prototype.autoClose;
    /**
     *  Defines whether or not the dropdown-menu is open initially.
     * @type {boolean}
     */
    NgbDropdown.prototype._open;
    /**
     *  An event fired when the dropdown is opened or closed.
     *  Event's payload equals whether dropdown is open.
     * @type {!EventEmitter<?>}
     */
    NgbDropdown.prototype.openChange;
}
/**
 * Allows the dropdown to be toggled via click. This directive is optional.
 */
export let NgbDropdownToggle = class NgbDropdownToggle {
    /**
     * @param {!NgbDropdown} dropdown
     * @param {!ElementRef} elementRef
     */
    constructor(dropdown, elementRef) {
        this.dropdown = dropdown;
        dropdown.toggleElement = elementRef.nativeElement;
    }
    /**
     * @return {void}
     */
    toggleOpen() { this.dropdown.toggle(); }
};
NgbDropdownToggle = __decorate([
    Directive({
        selector: '[ngbDropdownToggle]',
        host: {
            'class': 'dropdown-toggle',
            'aria-haspopup': 'true',
            '[attr.aria-expanded]': 'dropdown.isOpen()',
            '(click)': 'toggleOpen()'
        }
    }), 
    __metadata('design:paramtypes', [NgbDropdown, Object])
], NgbDropdownToggle);
function NgbDropdownToggle_tsickle_Closure_declarations() {
    /** @type {!NgbDropdown} */
    NgbDropdownToggle.prototype.dropdown;
}
//# sourceMappingURL=dropdown.js.map