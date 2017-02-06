goog.module('_ng_bootstrap.ng_bootstrap.modal.modal.module'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/modal/modal.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, ModuleWithProviders } from '@angular/core';
const NgModule = NgModule; /* local alias for Closure JSDoc */
const ModuleWithProviders = ModuleWithProviders; /* local alias for Closure JSDoc */
import { NgbModalContainer } from './modal-container';
const NgbModalContainer = NgbModalContainer; /* local alias for Closure JSDoc */
import { NgbModalBackdrop } from './modal-backdrop';
const NgbModalBackdrop = NgbModalBackdrop; /* local alias for Closure JSDoc */
import { NgbModalWindow } from './modal-window';
const NgbModalWindow = NgbModalWindow; /* local alias for Closure JSDoc */
import { NgbModalStack } from './modal-stack';
const NgbModalStack = NgbModalStack; /* local alias for Closure JSDoc */
import { NgbModal } from './modal';
const NgbModal = NgbModal; /* local alias for Closure JSDoc */
export { NgbModal, NgbModalOptions } from './modal';
export { NgbModalRef, NgbActiveModal } from './modal-ref';
export { ModalDismissReasons } from './modal-dismiss-reasons';
let NgbModalModule_1 = class NgbModalModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbModalModule_1, providers: [NgbModal, NgbModalStack] }; }
};
export let NgbModalModule = NgbModalModule_1;
NgbModalModule = NgbModalModule_1 = __decorate([
    NgModule({
        declarations: [NgbModalContainer, NgbModalBackdrop, NgbModalWindow],
        entryComponents: [NgbModalBackdrop, NgbModalWindow],
        providers: [NgbModal],
        exports: [NgbModalContainer]
    }), 
    __metadata('design:paramtypes', [])
], NgbModalModule);
//# sourceMappingURL=modal.module.js.map