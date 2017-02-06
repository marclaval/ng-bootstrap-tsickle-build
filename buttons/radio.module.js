goog.module('_ng_bootstrap.ng_bootstrap.buttons.radio.module'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/buttons/radio.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbRadio, NgbActiveLabel, NgbRadioGroup } from './radio';
const NgbRadio = NgbRadio; /* local alias for Closure JSDoc */
const NgbActiveLabel = NgbActiveLabel; /* local alias for Closure JSDoc */
const NgbRadioGroup = NgbRadioGroup; /* local alias for Closure JSDoc */
export { NgbRadio, NgbActiveLabel, NgbRadioGroup } from './radio';
const /** @type {!Array<?>} */ NGB_RADIO_DIRECTIVES = [NgbRadio, NgbActiveLabel, NgbRadioGroup];
let NgbButtonsModule_1 = class NgbButtonsModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbButtonsModule_1, providers: [] }; }
};
export let NgbButtonsModule = NgbButtonsModule_1;
NgbButtonsModule = NgbButtonsModule_1 = __decorate([
    NgModule({ declarations: NGB_RADIO_DIRECTIVES, exports: NGB_RADIO_DIRECTIVES }), 
    __metadata('design:paramtypes', [])
], NgbButtonsModule);
//# sourceMappingURL=radio.module.js.map