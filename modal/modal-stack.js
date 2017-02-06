goog.module('_ng_bootstrap.ng_bootstrap.modal.modal_stack'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/modal/modal-stack.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbModalRef } from './modal-ref';
const NgbModalRef = NgbModalRef; /* local alias for Closure JSDoc */
import { NgbModalContainer } from './modal-container';
const NgbModalContainer = NgbModalContainer; /* local alias for Closure JSDoc */
export let NgbModalStack = class NgbModalStack {
    /**
     * @param {!ComponentFactoryResolver} moduleCFR
     * @param {!Injector} contentInjector
     * @param {?} content
     * @param {?=} options
     * @return {!NgbModalRef}
     */
    open(moduleCFR, contentInjector, content, options = {}) {
        if (!this.modalContainer) {
            throw new Error('Missing modal container, add <template ngbModalContainer></template> to one of your application templates.');
        }
        return this.modalContainer.open(moduleCFR, contentInjector, content, options);
    }
    /**
     * @param {!NgbModalContainer} modalContainer
     * @return {void}
     */
    registerContainer(modalContainer) { this.modalContainer = modalContainer; }
};
NgbModalStack = __decorate([
    /* local alias for Closure JSDoc */ Injectable(), 
    __metadata('design:paramtypes', [])
], NgbModalStack);
function NgbModalStack_tsickle_Closure_declarations() {
    /** @type {!NgbModalContainer} */
    NgbModalStack.prototype.modalContainer;
}
//# sourceMappingURL=modal-stack.js.map