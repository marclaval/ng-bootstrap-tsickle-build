goog.module('tmp.ng_bootstrap.modal.modal_window'); exports = {}; var module = {id: 'tmp/ng-bootstrap/modal/modal-window.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input, ElementRef, Renderer, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const ElementRef = ElementRef; /* local alias for Closure JSDoc */
const Renderer = Renderer; /* local alias for Closure JSDoc */
const OnInit = OnInit; /* local alias for Closure JSDoc */
const AfterViewInit = AfterViewInit; /* local alias for Closure JSDoc */
const OnDestroy = OnDestroy; /* local alias for Closure JSDoc */
import { ModalDismissReasons } from './modal-dismiss-reasons';
const ModalDismissReasons = ModalDismissReasons; /* local alias for Closure JSDoc */
export let NgbModalWindow = class NgbModalWindow {
    /**
     * @param {!ElementRef} _elRef
     * @param {!Renderer} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {void}
     */
    backdropClick($event) {
        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
            this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
        }
    }
    /**
     * @param {?} $event
     * @return {void}
     */
    escKey($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(ModalDismissReasons.ESC);
        }
    }
    /**
     * @param {?} reason
     * @return {void}
     */
    dismiss(reason) { this.dismissEvent.emit(reason); }
    /**
     * @return {void}
     */
    ngOnInit() {
        this._elWithFocus = document.activeElement;
        this._renderer.setElementClass(document.body, 'modal-open', true);
    }
    /**
     * @return {void}
     */
    ngAfterViewInit() {
        if (!this._elRef.nativeElement.contains(document.activeElement)) {
            this._renderer.invokeElementMethod(this._elRef.nativeElement, 'focus', []);
        }
    }
    /**
     * @return {void}
     */
    ngOnDestroy() {
        if (this._elWithFocus && document.body.contains(this._elWithFocus)) {
            this._renderer.invokeElementMethod(this._elWithFocus, 'focus', []);
        }
        else {
            this._renderer.invokeElementMethod(document.body, 'focus', []);
        }
        this._elWithFocus = null;
        this._renderer.setElementClass(document.body, 'modal-open', false);
    }
};
__decorate([
    // element that is focused prior to modal opening
    Input(), 
    __metadata('design:type', Object)
], NgbModalWindow.prototype, "backdrop", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbModalWindow.prototype, "keyboard", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbModalWindow.prototype, "size", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbModalWindow.prototype, "windowClass", void 0);
__decorate([
    Output('dismiss'), 
    __metadata('design:type', Object)
], NgbModalWindow.prototype, "dismissEvent", void 0);
NgbModalWindow = __decorate([
    /* local alias for Closure JSDoc */ Component({
        selector: 'ngb-modal-window',
        host: {
            '[class]': '"modal fade show" + (windowClass ? " " + windowClass : "")',
            'role': 'dialog',
            'tabindex': '-1',
            'style': 'display: block;',
            '(keyup.esc)': 'escKey($event)',
            '(click)': 'backdropClick($event)'
        },
        template: `
    <div [class]="'modal-dialog' + (size ? ' modal-' + size : '')" role="document">
        <div class="modal-content"><ng-content></ng-content></div>
    </div>
    `
    }), 
    __metadata('design:paramtypes', [Object, Object])
], NgbModalWindow);
function NgbModalWindow_tsickle_Closure_declarations() {
    /** @type {!Element} */
    NgbModalWindow.prototype._elWithFocus;
    /** @type {(string|boolean)} */
    NgbModalWindow.prototype.backdrop;
    /** @type {boolean} */
    NgbModalWindow.prototype.keyboard;
    /** @type {string} */
    NgbModalWindow.prototype.size;
    /** @type {string} */
    NgbModalWindow.prototype.windowClass;
    /** @type {!EventEmitter<?>} */
    NgbModalWindow.prototype.dismissEvent;
    /** @type {!ElementRef} */
    NgbModalWindow.prototype._elRef;
    /** @type {!Renderer} */
    NgbModalWindow.prototype._renderer;
}
//# sourceMappingURL=modal-window.js.map