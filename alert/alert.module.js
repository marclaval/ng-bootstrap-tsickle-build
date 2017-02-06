goog.module('_ng_bootstrap.ng_bootstrap.alert.alert.module'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/alert/alert.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { CommonModule } from '@angular/common';
const CommonModule = CommonModule; /* local alias for Closure JSDoc */
import { NgbAlert } from './alert';
const NgbAlert = NgbAlert; /* local alias for Closure JSDoc */
import { NgbAlertConfig } from './alert-config';
const NgbAlertConfig = NgbAlertConfig; /* local alias for Closure JSDoc */
export { NgbAlert } from './alert';
export { NgbAlertConfig } from './alert-config';
let NgbAlertModule_1 = class NgbAlertModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbAlertModule_1, providers: [NgbAlertConfig] }; }
};
export let NgbAlertModule = NgbAlertModule_1;
NgbAlertModule = NgbAlertModule_1 = __decorate([
    NgModule({ declarations: [NgbAlert], exports: [NgbAlert], imports: [CommonModule], entryComponents: [NgbAlert] }), 
    __metadata('design:paramtypes', [])
], NgbAlertModule);
//# sourceMappingURL=alert.module.js.map