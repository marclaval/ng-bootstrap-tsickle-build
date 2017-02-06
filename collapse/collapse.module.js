goog.module('_ng_bootstrap.ng_bootstrap.collapse.collapse.module'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/collapse/collapse.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbCollapse } from './collapse';
const NgbCollapse = NgbCollapse; /* local alias for Closure JSDoc */
export { NgbCollapse } from './collapse';
let NgbCollapseModule_1 = class NgbCollapseModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbCollapseModule_1, providers: [] }; }
};
export let NgbCollapseModule = NgbCollapseModule_1;
NgbCollapseModule = NgbCollapseModule_1 = __decorate([
    NgModule({ declarations: [NgbCollapse], exports: [NgbCollapse] }), 
    __metadata('design:paramtypes', [])
], NgbCollapseModule);
//# sourceMappingURL=collapse.module.js.map