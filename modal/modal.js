goog.module('tmp.ng_bootstrap.modal.modal'); exports = {}; var module = {id: 'tmp/ng-bootstrap/modal/modal.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector, ComponentFactoryResolver } from '@angular/core';
const Injectable = Injectable; /* local alias for Closure JSDoc */
const Injector = Injector; /* local alias for Closure JSDoc */
const ComponentFactoryResolver = ComponentFactoryResolver; /* local alias for Closure JSDoc */
import { NgbModalStack } from './modal-stack';
const NgbModalStack = NgbModalStack; /* local alias for Closure JSDoc */
import { NgbModalRef } from './modal-ref';
const NgbModalRef = NgbModalRef; /* local alias for Closure JSDoc */
/** @record */
export function NgbModalOptions() { }
/**
 * Whether a backdrop element should be created for a given modal (true by default).
 * Alternatively, specify 'static' for a backdrop which doesn't close the modal on click.
 * @type {(boolean|string)}
 */
NgbModalOptions.prototype.backdrop;
/**
 * Whether to close the modal when escape key is pressed (true by default).
 * @type {boolean}
 */
NgbModalOptions.prototype.keyboard;
/**
 * Size of a new modal window.
 * @type {string}
 */
NgbModalOptions.prototype.size;
/**
 * Custom class to append to the modal window
 * @type {string}
 */
NgbModalOptions.prototype.windowClass;
/**
 * A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to
 * the "open" method!
 */
export let NgbModal = class NgbModal {
    /**
     * @param {!ComponentFactoryResolver} _moduleCFR
     * @param {!Injector} _injector
     * @param {!NgbModalStack} _modalStack
     */
    constructor(_moduleCFR, _injector, _modalStack) {
        this._moduleCFR = _moduleCFR;
        this._injector = _injector;
        this._modalStack = _modalStack;
    }
    /**
     * Opens a new modal window with the specified content and using supplied options. Content can be provided
     * as a TemplateRef or a component type. If you pass a component type as content than instances of those
     * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
     * NgbActiveModal class to close / dismiss modals from "inside" of a component.
     * @param {?} content
     * @param {!NgbModalOptions=} options
     * @return {!NgbModalRef}
     */
    open(content, options = {}) {
        return this._modalStack.open(this._moduleCFR, this._injector, content, options);
    }
};
NgbModal = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Object, Object, Object])
], NgbModal);
function NgbModal_tsickle_Closure_declarations() {
    /** @type {!ComponentFactoryResolver} */
    NgbModal.prototype._moduleCFR;
    /** @type {!Injector} */
    NgbModal.prototype._injector;
    /** @type {!NgbModalStack} */
    NgbModal.prototype._modalStack;
}
//# sourceMappingURL=modal.js.map