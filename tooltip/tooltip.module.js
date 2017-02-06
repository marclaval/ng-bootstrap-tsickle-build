goog.module('_ng_bootstrap.ng_bootstrap.tooltip.tooltip.module'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbTooltip, NgbTooltipWindow } from './tooltip';
const NgbTooltip = NgbTooltip; /* local alias for Closure JSDoc */
const NgbTooltipWindow = NgbTooltipWindow; /* local alias for Closure JSDoc */
import { NgbTooltipConfig } from './tooltip-config';
const NgbTooltipConfig = NgbTooltipConfig; /* local alias for Closure JSDoc */
export { NgbTooltipConfig } from './tooltip-config';
export { NgbTooltip } from './tooltip';
let NgbTooltipModule_1 = class NgbTooltipModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbTooltipModule_1, providers: [NgbTooltipConfig] }; }
};
export let NgbTooltipModule = NgbTooltipModule_1;
NgbTooltipModule = NgbTooltipModule_1 = __decorate([
    NgModule({ declarations: [NgbTooltip, NgbTooltipWindow], exports: [NgbTooltip], entryComponents: [NgbTooltipWindow] }), 
    __metadata('design:paramtypes', [])
], NgbTooltipModule);
//# sourceMappingURL=tooltip.module.js.map