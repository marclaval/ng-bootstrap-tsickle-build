goog.module('_ng_bootstrap.ng_bootstrap.tabset.tabset.module'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/tabset/tabset.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbTabset, NgbTab, NgbTabContent, NgbTabTitle, NgbTabChangeEvent } from './tabset';
const NgbTabset = NgbTabset; /* local alias for Closure JSDoc */
const NgbTab = NgbTab; /* local alias for Closure JSDoc */
const NgbTabContent = NgbTabContent; /* local alias for Closure JSDoc */
const NgbTabTitle = NgbTabTitle; /* local alias for Closure JSDoc */
const NgbTabChangeEvent = NgbTabChangeEvent; /* local alias for Closure JSDoc */
import { NgbTabsetConfig } from './tabset-config';
const NgbTabsetConfig = NgbTabsetConfig; /* local alias for Closure JSDoc */
export { NgbTabset, NgbTab, NgbTabContent, NgbTabTitle, NgbTabChangeEvent } from './tabset';
export { NgbTabsetConfig } from './tabset-config';
const /** @type {!Array<?>} */ NGB_TABSET_DIRECTIVES = [NgbTabset, NgbTab, NgbTabContent, NgbTabTitle];
let NgbTabsetModule_1 = class NgbTabsetModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbTabsetModule_1, providers: [NgbTabsetConfig] }; }
};
export let NgbTabsetModule = NgbTabsetModule_1;
NgbTabsetModule = NgbTabsetModule_1 = __decorate([
    NgModule({ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [CommonModule] }), 
    __metadata('design:paramtypes', [])
], NgbTabsetModule);
//# sourceMappingURL=tabset.module.js.map