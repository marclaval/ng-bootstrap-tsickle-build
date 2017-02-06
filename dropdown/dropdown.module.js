goog.module('_ng_bootstrap.ng_bootstrap.dropdown.dropdown.module'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbDropdown, NgbDropdownToggle } from './dropdown';
const NgbDropdown = NgbDropdown; /* local alias for Closure JSDoc */
const NgbDropdownToggle = NgbDropdownToggle; /* local alias for Closure JSDoc */
import { NgbDropdownConfig } from './dropdown-config';
const NgbDropdownConfig = NgbDropdownConfig; /* local alias for Closure JSDoc */
export { NgbDropdown, NgbDropdownToggle } from './dropdown';
export { NgbDropdownConfig } from './dropdown-config';
const /** @type {!Array<?>} */ NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];
let NgbDropdownModule_1 = class NgbDropdownModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbDropdownModule_1, providers: [NgbDropdownConfig] }; }
};
export let NgbDropdownModule = NgbDropdownModule_1;
NgbDropdownModule = NgbDropdownModule_1 = __decorate([
    NgModule({ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES }), 
    __metadata('design:paramtypes', [])
], NgbDropdownModule);
//# sourceMappingURL=dropdown.module.js.map