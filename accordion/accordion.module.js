goog.module('tmp.ng_bootstrap.accordion.accordion.module'); exports = {}; var module = {id: 'tmp/ng-bootstrap/accordion/accordion.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelChangeEvent } from './accordion';
const NgbAccordion = NgbAccordion; /* local alias for Closure JSDoc */
const NgbPanel = NgbPanel; /* local alias for Closure JSDoc */
const NgbPanelTitle = NgbPanelTitle; /* local alias for Closure JSDoc */
const NgbPanelContent = NgbPanelContent; /* local alias for Closure JSDoc */
const NgbPanelChangeEvent = NgbPanelChangeEvent; /* local alias for Closure JSDoc */
import { NgbAccordionConfig } from './accordion-config';
const NgbAccordionConfig = NgbAccordionConfig; /* local alias for Closure JSDoc */
export { NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelChangeEvent } from './accordion';
export { NgbAccordionConfig } from './accordion-config';
const /** @type {!Array<?>} */ NGB_ACCORDION_DIRECTIVES = [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent];
let NgbAccordionModule_1 = class NgbAccordionModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbAccordionModule_1, providers: [NgbAccordionConfig] }; }
};
export let NgbAccordionModule = NgbAccordionModule_1;
NgbAccordionModule = NgbAccordionModule_1 = __decorate([
    NgModule({ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [CommonModule] }), 
    __metadata('design:paramtypes', [])
], NgbAccordionModule);
//# sourceMappingURL=accordion.module.js.map