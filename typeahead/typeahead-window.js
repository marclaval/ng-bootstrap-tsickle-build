goog.module('_ng_bootstrap.ng_bootstrap.typeahead.typeahead_window'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, TemplateRef, OnInit } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
const TemplateRef = TemplateRef; /* local alias for Closure JSDoc */
const OnInit = OnInit; /* local alias for Closure JSDoc */
import { toString } from '../util/util';
const toString = toString; /* local alias for Closure JSDoc */
/** @record */
export function ResultTemplateContext() { }
/**
 * Your typeahead result data model
 * @type {?}
 */
ResultTemplateContext.prototype.result;
/**
 * Search term from the input used to get current result
 * @type {string}
 */
ResultTemplateContext.prototype.term;
export let NgbTypeaheadWindow = class NgbTypeaheadWindow {
    constructor() {
        this.activeIdx = 0;
        /**
         * Flag indicating if the first row should be active initially
         */
        this.focusFirst = true;
        /**
         * A function used to format a given result before display. This function should return a formatted string without any
         * HTML markup
         */
        this.formatter = toString;
        /**
         * Event raised when user selects a particular result row
         */
        this.selectEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    getActive() { return this.results[this.activeIdx]; }
    /**
     * @param {number} activeIdx
     * @return {void}
     */
    markActive(activeIdx) { this.activeIdx = activeIdx; }
    /**
     * @return {void}
     */
    next() {
        if (this.activeIdx === this.results.length - 1) {
            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
        }
        else {
            this.activeIdx++;
        }
    }
    /**
     * @return {void}
     */
    prev() {
        if (this.activeIdx < 0) {
            this.activeIdx = this.results.length - 1;
        }
        else if (this.activeIdx === 0) {
            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
        }
        else {
            this.activeIdx--;
        }
    }
    /**
     * @param {?} item
     * @return {void}
     */
    select(item) { this.selectEvent.emit(item); }
    /**
     * @return {void}
     */
    ngOnInit() { this.activeIdx = this.focusFirst ? 0 : -1; }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbTypeaheadWindow.prototype, "focusFirst", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbTypeaheadWindow.prototype, "results", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbTypeaheadWindow.prototype, "term", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbTypeaheadWindow.prototype, "formatter", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbTypeaheadWindow.prototype, "resultTemplate", void 0);
__decorate([
    Output('select'), 
    __metadata('design:type', Object)
], NgbTypeaheadWindow.prototype, "selectEvent", void 0);
NgbTypeaheadWindow = __decorate([
    Component({
        selector: 'ngb-typeahead-window',
        exportAs: 'ngbTypeaheadWindow',
        host: { 'class': 'dropdown-menu', 'style': 'display: block' },
        template: `
    <template #rt let-result="result" let-term="term" let-formatter="formatter">
      <ngb-highlight [result]="formatter(result)" [term]="term"></ngb-highlight>
    </template>
    <template ngFor [ngForOf]="results" let-result let-idx="index">
      <button type="button" class="dropdown-item" [class.active]="idx === activeIdx" 
        (mouseenter)="markActive(idx)" 
        (click)="select(result)">
          <template [ngTemplateOutlet]="resultTemplate || rt" 
          [ngOutletContext]="{result: result, term: term, formatter: formatter}"></template>
      </button>
    </template>
  `
    }), 
    __metadata('design:paramtypes', [])
], NgbTypeaheadWindow);
function NgbTypeaheadWindow_tsickle_Closure_declarations() {
    /** @type {number} */
    NgbTypeaheadWindow.prototype.activeIdx;
    /**
     * Flag indicating if the first row should be active initially
     * @type {boolean}
     */
    NgbTypeaheadWindow.prototype.focusFirst;
    /**
     * Typeahead match results to be displayed
     * @type {?}
     */
    NgbTypeaheadWindow.prototype.results;
    /**
     * Search term used to get current results
     * @type {string}
     */
    NgbTypeaheadWindow.prototype.term;
    /**
     * A function used to format a given result before display. This function should return a formatted string without any
     * HTML markup
     * @type {function(?): string}
     */
    NgbTypeaheadWindow.prototype.formatter;
    /**
     * A template to override a matching result default display
     * @type {!TemplateRef<!ResultTemplateContext>}
     */
    NgbTypeaheadWindow.prototype.resultTemplate;
    /**
     * Event raised when user selects a particular result row
     * @type {!EventEmitter<?>}
     */
    NgbTypeaheadWindow.prototype.selectEvent;
}
//# sourceMappingURL=typeahead-window.js.map