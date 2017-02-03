goog.module('tmp.ng_bootstrap.rating.rating_config'); exports = {}; var module = {id: 'tmp/ng-bootstrap/rating/rating-config.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
 * Configuration service for the NgbRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */
export let NgbRatingConfig = class NgbRatingConfig {
    constructor() {
        this.max = 10;
        this.readonly = false;
    }
};
NgbRatingConfig = __decorate([
    /* local alias for Closure JSDoc */ Injectable(), 
    __metadata('design:paramtypes', [])
], NgbRatingConfig);
function NgbRatingConfig_tsickle_Closure_declarations() {
    /** @type {number} */
    NgbRatingConfig.prototype.max;
    /** @type {boolean} */
    NgbRatingConfig.prototype.readonly;
}
//# sourceMappingURL=rating-config.js.map