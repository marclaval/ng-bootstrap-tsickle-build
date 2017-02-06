goog.module('_ng_bootstrap.ng_bootstrap.timepicker.timepicker.module'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbTimepicker } from './timepicker';
const NgbTimepicker = NgbTimepicker; /* local alias for Closure JSDoc */
import { NgbTimepickerConfig } from './timepicker-config';
const NgbTimepickerConfig = NgbTimepickerConfig; /* local alias for Closure JSDoc */
export { NgbTimepicker } from './timepicker';
export { NgbTimepickerConfig } from './timepicker-config';
export { NgbTimeStruct } from './ngb-time-struct';
let NgbTimepickerModule_1 = class NgbTimepickerModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbTimepickerModule_1, providers: [NgbTimepickerConfig] }; }
};
export let NgbTimepickerModule = NgbTimepickerModule_1;
NgbTimepickerModule = NgbTimepickerModule_1 = __decorate([
    NgModule({ declarations: [NgbTimepicker], exports: [NgbTimepicker], imports: [CommonModule] }), 
    __metadata('design:paramtypes', [])
], NgbTimepickerModule);
//# sourceMappingURL=timepicker.module.js.map