goog.module('_ng_bootstrap.ng_bootstrap.carousel.carousel.module'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/carousel/carousel.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NGB_CAROUSEL_DIRECTIVES } from './carousel';
const NGB_CAROUSEL_DIRECTIVES = NGB_CAROUSEL_DIRECTIVES; /* local alias for Closure JSDoc */
import { NgbCarouselConfig } from './carousel-config';
const NgbCarouselConfig = NgbCarouselConfig; /* local alias for Closure JSDoc */
export { NgbCarousel, NgbSlide } from './carousel';
export { NgbCarouselConfig } from './carousel-config';
let NgbCarouselModule_1 = class NgbCarouselModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbCarouselModule_1, providers: [NgbCarouselConfig] }; }
};
export let NgbCarouselModule = NgbCarouselModule_1;
NgbCarouselModule = NgbCarouselModule_1 = __decorate([
    NgModule({ declarations: NGB_CAROUSEL_DIRECTIVES, exports: NGB_CAROUSEL_DIRECTIVES, imports: [CommonModule] }), 
    __metadata('design:paramtypes', [])
], NgbCarouselModule);
//# sourceMappingURL=carousel.module.js.map