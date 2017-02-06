goog.module('_ng_bootstrap.ng_bootstrap.popover.popover.module'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/popover/popover.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbPopover, NgbPopoverWindow } from './popover';
const NgbPopover = NgbPopover; /* local alias for Closure JSDoc */
const NgbPopoverWindow = NgbPopoverWindow; /* local alias for Closure JSDoc */
import { NgbPopoverConfig } from './popover-config';
const NgbPopoverConfig = NgbPopoverConfig; /* local alias for Closure JSDoc */
export { NgbPopover } from './popover';
export { NgbPopoverConfig } from './popover-config';
let NgbPopoverModule_1 = class NgbPopoverModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbPopoverModule_1, providers: [NgbPopoverConfig] }; }
};
export let NgbPopoverModule = NgbPopoverModule_1;
NgbPopoverModule = NgbPopoverModule_1 = __decorate([
    NgModule({ declarations: [NgbPopover, NgbPopoverWindow], exports: [NgbPopover], entryComponents: [NgbPopoverWindow] }), 
    __metadata('design:paramtypes', [])
], NgbPopoverModule);
//# sourceMappingURL=popover.module.js.map