goog.module('tmp.ng_bootstrap.pagination.pagination_config'); exports = {}; var module = {id: 'tmp/ng-bootstrap/pagination/pagination-config.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
const Injectable = Injectable; /* local alias for Closure JSDoc */
/**
 * Configuration service for the NgbPagination component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
export let NgbPaginationConfig = class NgbPaginationConfig {
    constructor() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = 10;
        this.rotate = false;
    }
};
NgbPaginationConfig = __decorate([
    /* local alias for Closure JSDoc */ Injectable(), 
    __metadata('design:paramtypes', [])
], NgbPaginationConfig);
function NgbPaginationConfig_tsickle_Closure_declarations() {
    /** @type {boolean} */
    NgbPaginationConfig.prototype.disabled;
    /** @type {boolean} */
    NgbPaginationConfig.prototype.boundaryLinks;
    /** @type {boolean} */
    NgbPaginationConfig.prototype.directionLinks;
    /** @type {boolean} */
    NgbPaginationConfig.prototype.ellipses;
    /** @type {number} */
    NgbPaginationConfig.prototype.maxSize;
    /** @type {number} */
    NgbPaginationConfig.prototype.pageSize;
    /** @type {boolean} */
    NgbPaginationConfig.prototype.rotate;
    /** @type {string} */
    NgbPaginationConfig.prototype.size;
}
//# sourceMappingURL=pagination-config.js.map