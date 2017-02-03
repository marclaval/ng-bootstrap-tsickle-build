goog.module('tmp.ng_bootstrap.pagination.pagination.module'); exports = {}; var module = {id: 'tmp/ng-bootstrap/pagination/pagination.module.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbPagination } from './pagination';
const NgbPagination = NgbPagination; /* local alias for Closure JSDoc */
import { NgbPaginationConfig } from './pagination-config';
const NgbPaginationConfig = NgbPaginationConfig; /* local alias for Closure JSDoc */
export { NgbPagination } from './pagination';
export { NgbPaginationConfig } from './pagination-config';
let NgbPaginationModule_1 = class NgbPaginationModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbPaginationModule_1, providers: [NgbPaginationConfig] }; }
};
export let NgbPaginationModule = NgbPaginationModule_1;
NgbPaginationModule = NgbPaginationModule_1 = __decorate([
    NgModule({ declarations: [NgbPagination], exports: [NgbPagination], imports: [CommonModule] }), 
    __metadata('design:paramtypes', [])
], NgbPaginationModule);
//# sourceMappingURL=pagination.module.js.map