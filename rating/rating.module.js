goog.module('tmp.ng_bootstrap.rating.rating.module'); exports = {}; var module = {id: 'tmp/ng-bootstrap/rating/rating.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbRatingConfig } from './rating-config';
const NgbRatingConfig = NgbRatingConfig; /* local alias for Closure JSDoc */
import { NgbRating } from './rating';
const NgbRating = NgbRating; /* local alias for Closure JSDoc */
export { NgbRating } from './rating';
export { NgbRatingConfig } from './rating-config';
let NgbRatingModule_1 = class NgbRatingModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbRatingModule_1, providers: [NgbRatingConfig] }; }
};
export let NgbRatingModule = NgbRatingModule_1;
NgbRatingModule = NgbRatingModule_1 = __decorate([
    NgModule({ declarations: [NgbRating], exports: [NgbRating], imports: [CommonModule] }), 
    __metadata('design:paramtypes', [])
], NgbRatingModule);
//# sourceMappingURL=rating.module.js.map