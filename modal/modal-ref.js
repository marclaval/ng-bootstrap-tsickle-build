goog.module('_ng_bootstrap.ng_bootstrap.modal.modal_ref'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/modal/modal-ref.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, ComponentRef, ViewRef, ViewContainerRef } from '@angular/core';
const Injectable = Injectable; /* local alias for Closure JSDoc */
const ComponentRef = ComponentRef; /* local alias for Closure JSDoc */
const ViewRef = ViewRef; /* local alias for Closure JSDoc */
const ViewContainerRef = ViewContainerRef; /* local alias for Closure JSDoc */
import { NgbModalBackdrop } from './modal-backdrop';
const NgbModalBackdrop = NgbModalBackdrop; /* local alias for Closure JSDoc */
import { NgbModalWindow } from './modal-window';
const NgbModalWindow = NgbModalWindow; /* local alias for Closure JSDoc */
import { ContentRef } from '../util/popup';
const ContentRef = ContentRef; /* local alias for Closure JSDoc */
/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
export let NgbActiveModal = class NgbActiveModal {
    /**
     * Can be used to close a modal, passing an optional result.
     * @param {?=} result
     * @return {void}
     */
    close(result) { }
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     * @param {?=} reason
     * @return {void}
     */
    dismiss(reason) { }
};
NgbActiveModal = __decorate([
    /* local alias for Closure JSDoc */ Injectable(), 
    __metadata('design:paramtypes', [])
], NgbActiveModal);
/**
 * A reference to a newly opened modal.
 */
export let NgbModalRef = class NgbModalRef {
    /**
     * @param {!ViewContainerRef} _viewContainerRef
     * @param {!ComponentRef<!NgbModalWindow>} _windowCmptRef
     * @param {!ContentRef} _contentRef
     * @param {!ComponentRef<!NgbModalBackdrop>=} _backdropCmptRef
     */
    constructor(_viewContainerRef, _windowCmptRef, _contentRef, _backdropCmptRef) {
        this._viewContainerRef = _viewContainerRef;
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        _windowCmptRef.instance.dismissEvent.subscribe((reason) => { this.dismiss(reason); });
        this.result = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
        this.result.then(null, () => { });
    }
    /**
     * The instance of component used as modal's content.
     * Undefined when a TemplateRef is used as modal's content.
     * @return {?}
     */
    get componentInstance() {
        if (this._contentRef.componentRef) {
            return this._contentRef.componentRef.instance;
        }
    }
    /**
     * @param {?} instance
     * @return {void}
     */
    set componentInstance(instance) { }
    /**
     * Can be used to close a modal, passing an optional result.
     * @param {?=} result
     * @return {void}
     */
    close(result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    }
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     * @param {?=} reason
     * @return {void}
     */
    dismiss(reason) {
        if (this._windowCmptRef) {
            this._reject(reason);
            this._removeModalElements();
        }
    }
    /**
     * @return {void}
     */
    _removeModalElements() {
        this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowCmptRef.hostView));
        if (this._backdropCmptRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._backdropCmptRef.hostView));
        }
        if (this._contentRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        this._windowCmptRef = null;
        this._backdropCmptRef = null;
        this._contentRef = null;
    }
};
NgbModalRef = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Object, Object, Object, Object])
], NgbModalRef);
function NgbModalRef_tsickle_Closure_declarations() {
    /** @type {function(?): void} */
    NgbModalRef.prototype._resolve;
    /** @type {function(?): void} */
    NgbModalRef.prototype._reject;
    /**
     * A promise that is resolved when a modal is closed and rejected when a modal is dismissed.
     * @type {!Promise<?>}
     */
    NgbModalRef.prototype.result;
    /** @type {!ViewContainerRef} */
    NgbModalRef.prototype._viewContainerRef;
    /** @type {!ComponentRef<!NgbModalWindow>} */
    NgbModalRef.prototype._windowCmptRef;
    /** @type {!ContentRef} */
    NgbModalRef.prototype._contentRef;
    /** @type {!ComponentRef<!NgbModalBackdrop>} */
    NgbModalRef.prototype._backdropCmptRef;
}
//# sourceMappingURL=modal-ref.js.map