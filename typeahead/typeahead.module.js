goog.module('tmp.ng_bootstrap.typeahead.typeahead.module'); exports = {}; var module = {id: 'tmp/ng-bootstrap/typeahead/typeahead.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbHighlight } from './highlight';
const NgbHighlight = NgbHighlight; /* local alias for Closure JSDoc */
import { NgbTypeaheadWindow } from './typeahead-window';
const NgbTypeaheadWindow = NgbTypeaheadWindow; /* local alias for Closure JSDoc */
import { NgbTypeahead, NgbTypeaheadSelectItemEvent } from './typeahead';
const NgbTypeahead = NgbTypeahead; /* local alias for Closure JSDoc */
const NgbTypeaheadSelectItemEvent = NgbTypeaheadSelectItemEvent; /* local alias for Closure JSDoc */
import { NgbTypeaheadConfig } from './typeahead-config';
const NgbTypeaheadConfig = NgbTypeaheadConfig; /* local alias for Closure JSDoc */
export { NgbHighlight } from './highlight';
export { NgbTypeaheadWindow } from './typeahead-window';
export { NgbTypeaheadConfig } from './typeahead-config';
export { NgbTypeahead, NgbTypeaheadSelectItemEvent } from './typeahead';
let NgbTypeaheadModule_1 = class NgbTypeaheadModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbTypeaheadModule_1, providers: [NgbTypeaheadConfig] }; }
};
export let NgbTypeaheadModule = NgbTypeaheadModule_1;
NgbTypeaheadModule = NgbTypeaheadModule_1 = __decorate([
    NgModule({
        declarations: [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow],
        exports: [NgbTypeahead],
        imports: [CommonModule],
        entryComponents: [NgbTypeaheadWindow]
    }), 
    __metadata('design:paramtypes', [])
], NgbTypeaheadModule);
//# sourceMappingURL=typeahead.module.js.map