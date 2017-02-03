goog.module('tmp.ng_bootstrap.typeahead.highlight'); exports = {}; var module = {id: 'tmp/ng-bootstrap/typeahead/highlight.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, OnChanges, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const OnChanges = OnChanges; /* local alias for Closure JSDoc */
const ChangeDetectionStrategy = ChangeDetectionStrategy; /* local alias for Closure JSDoc */
const SimpleChanges = SimpleChanges; /* local alias for Closure JSDoc */
import { regExpEscape, toString } from '../util/util';
const regExpEscape = regExpEscape; /* local alias for Closure JSDoc */
const toString = toString; /* local alias for Closure JSDoc */
export let NgbHighlight = class NgbHighlight {
    constructor() {
        this.highlightClass = 'ngb-highlight';
    }
    /**
     * @param {!SimpleChanges} changes
     * @return {void}
     */
    ngOnChanges(changes) {
        const /** @type {string} */ resultStr = toString(this.result);
        const /** @type {string} */ resultLC = resultStr.toLowerCase();
        const /** @type {string} */ termLC = toString(this.term).toLowerCase();
        let /** @type {number} */ currentIdx = 0;
        if (termLC.length > 0) {
            this.parts = resultLC.split(new RegExp(`(${regExpEscape(termLC)})`)).map((part) => {
                const /** @type {string} */ originalPart = resultStr.substr(currentIdx, part.length);
                currentIdx += part.length;
                return originalPart;
            });
        }
        else {
            this.parts = [resultStr];
        }
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbHighlight.prototype, "highlightClass", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbHighlight.prototype, "result", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbHighlight.prototype, "term", void 0);
NgbHighlight = __decorate([
    /* local alias for Closure JSDoc */ Component({
        selector: 'ngb-highlight',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `<template ngFor [ngForOf]="parts" let-part let-isOdd="odd">` +
            `<span *ngIf="isOdd" class="{{highlightClass}}">{{part}}</span><template [ngIf]="!isOdd">{{part}}</template>` +
            `</template>`,
        styles: [`
    .ngb-highlight {
      font-weight: bold;
    }
  `]
    }), 
    __metadata('design:paramtypes', [])
], NgbHighlight);
function NgbHighlight_tsickle_Closure_declarations() {
    /** @type {!Array<string>} */
    NgbHighlight.prototype.parts;
    /** @type {string} */
    NgbHighlight.prototype.highlightClass;
    /** @type {string} */
    NgbHighlight.prototype.result;
    /** @type {string} */
    NgbHighlight.prototype.term;
}
//# sourceMappingURL=highlight.js.map