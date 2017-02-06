goog.module('_ng_bootstrap.ng_bootstrap.progressbar.progressbar.module'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbProgressbar } from './progressbar';
const NgbProgressbar = NgbProgressbar; /* local alias for Closure JSDoc */
import { NgbProgressbarConfig } from './progressbar-config';
const NgbProgressbarConfig = NgbProgressbarConfig; /* local alias for Closure JSDoc */
export { NgbProgressbar } from './progressbar';
export { NgbProgressbarConfig } from './progressbar-config';
let NgbProgressbarModule_1 = class NgbProgressbarModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbProgressbarModule_1, providers: [NgbProgressbarConfig] }; }
};
export let NgbProgressbarModule = NgbProgressbarModule_1;
NgbProgressbarModule = NgbProgressbarModule_1 = __decorate([
    NgModule({ declarations: [NgbProgressbar], exports: [NgbProgressbar], imports: [CommonModule] }), 
    __metadata('design:paramtypes', [])
], NgbProgressbarModule);
//# sourceMappingURL=progressbar.module.js.map