goog.module('tmp.ng_bootstrap.pagination.pagination'); exports = {}; var module = {id: 'tmp/ng-bootstrap/pagination/pagination.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output, OnChanges, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
const OnChanges = OnChanges; /* local alias for Closure JSDoc */
const ChangeDetectionStrategy = ChangeDetectionStrategy; /* local alias for Closure JSDoc */
const SimpleChanges = SimpleChanges; /* local alias for Closure JSDoc */
import { getValueInRange, isNumber } from '../util/util';
const getValueInRange = getValueInRange; /* local alias for Closure JSDoc */
const isNumber = isNumber; /* local alias for Closure JSDoc */
import { NgbPaginationConfig } from './pagination-config';
const NgbPaginationConfig = NgbPaginationConfig; /* local alias for Closure JSDoc */
/**
 * A directive that will take care of visualising a pagination bar and enable / disable buttons correctly!
 */
export let NgbPagination = class NgbPagination {
    /**
     * @param {!NgbPaginationConfig} config
     */
    constructor(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  Current page.
         */
        this.page = 0;
        /**
         *  An event fired when the page is changed.
         *  Event's payload equals to the newly selected page.
         */
        this.pageChange = new EventEmitter(true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    /**
     * @return {boolean}
     */
    hasPrevious() { return this.page > 1; }
    /**
     * @return {boolean}
     */
    hasNext() { return this.page < this.pageCount; }
    /**
     * @param {number} pageNumber
     * @return {void}
     */
    selectPage(pageNumber) { this._updatePages(pageNumber); }
    /**
     * @param {!SimpleChanges} changes
     * @return {void}
     */
    ngOnChanges(changes) { this._updatePages(this.page); }
    /**
     * \@internal
     * @param {?} pageNumber
     * @return {boolean}
     */
    isEllipsis(pageNumber) { return pageNumber === -1; }
    /**
     * Appends ellipses and first/last page number to the displayed pages
     * @param {number} start
     * @param {number} end
     * @return {void}
     */
    _applyEllipses(start, end) {
        if (this.ellipses) {
            if (start > 0) {
                if (start > 1) {
                    this.pages.unshift(-1);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                if (end < (this.pageCount - 1)) {
                    this.pages.push(-1);
                }
                this.pages.push(this.pageCount);
            }
        }
    }
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     * @return {!Array<number, number>}
     */
    _applyRotation() {
        let /** @type {number} */ start = 0;
        let /** @type {number} */ end = this.pageCount;
        let /** @type {number} */ leftOffset = Math.floor(this.maxSize / 2);
        let /** @type {number} */ rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    }
    /**
     * Paginates page numbers based on maxSize items per page
     * @return {!Array<number, number>}
     */
    _applyPagination() {
        let /** @type {number} */ page = Math.ceil(this.page / this.maxSize) - 1;
        let /** @type {number} */ start = page * this.maxSize;
        let /** @type {number} */ end = start + this.maxSize;
        return [start, end];
    }
    /**
     * @param {?} newPageNo
     * @return {void}
     */
    _setPageInRange(newPageNo) {
        const /** @type {number} */ prevPageNo = this.page;
        this.page = getValueInRange(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo) {
            this.pageChange.emit(this.page);
        }
    }
    /**
     * @param {number} newPage
     * @return {void}
     */
    _updatePages(newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!isNumber(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (let /** @type {number} */ i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            let /** @type {number} */ start = 0;
            let /** @type {number} */ end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                [start, end] = this._applyRotation();
            }
            else {
                [start, end] = this._applyPagination();
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbPagination.prototype, "disabled", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbPagination.prototype, "boundaryLinks", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbPagination.prototype, "directionLinks", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbPagination.prototype, "ellipses", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbPagination.prototype, "rotate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbPagination.prototype, "collectionSize", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbPagination.prototype, "maxSize", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbPagination.prototype, "page", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbPagination.prototype, "pageSize", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbPagination.prototype, "pageChange", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbPagination.prototype, "size", void 0);
NgbPagination = __decorate([
    /* local alias for Closure JSDoc */ Component({
        selector: 'ngb-pagination',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <nav>
      <ul [class]="'pagination' + (size ? ' pagination-' + size : '')">
        <li *ngIf="boundaryLinks" class="page-item" 
          [class.disabled]="!hasPrevious() || disabled">
          <a aria-label="First" class="page-link" href (click)="!!selectPage(1)" [attr.tabindex]="hasPrevious() ? null : '-1'">
            <span aria-hidden="true">&laquo;&laquo;</span>
            <span class="sr-only">First</span>
          </a>                
        </li>
      
        <li *ngIf="directionLinks" class="page-item" 
          [class.disabled]="!hasPrevious() || disabled">
          <a aria-label="Previous" class="page-link" href (click)="!!selectPage(page-1)" [attr.tabindex]="hasPrevious() ? null : '-1'">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li *ngFor="let pageNumber of pages" class="page-item" [class.active]="pageNumber === page" 
          [class.disabled]="isEllipsis(pageNumber) || disabled">
          <a *ngIf="isEllipsis(pageNumber)" class="page-link">...</a>
          <a *ngIf="!isEllipsis(pageNumber)" class="page-link" href (click)="!!selectPage(pageNumber)">{{pageNumber}}</a>
        </li>
        <li *ngIf="directionLinks" class="page-item" [class.disabled]="!hasNext() || disabled">
          <a aria-label="Next" class="page-link" href (click)="!!selectPage(page+1)" [attr.tabindex]="hasNext() ? null : '-1'">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
        
        <li *ngIf="boundaryLinks" class="page-item" [class.disabled]="!hasNext() || disabled">
          <a aria-label="Last" class="page-link" href (click)="!!selectPage(pageCount)" [attr.tabindex]="hasNext() ? null : '-1'">
            <span aria-hidden="true">&raquo;&raquo;</span>
            <span class="sr-only">Last</span>
          </a>                
        </li>        
      </ul>
    </nav>
  `
    }), 
    __metadata('design:paramtypes', [Object])
], NgbPagination);
function NgbPagination_tsickle_Closure_declarations() {
    /** @type {number} */
    NgbPagination.prototype.pageCount;
    /** @type {!Array<number>} */
    NgbPagination.prototype.pages;
    /**
     * Whether to disable buttons from user input
     * @type {boolean}
     */
    NgbPagination.prototype.disabled;
    /**
     *  Whether to show the "First" and "Last" page links
     * @type {boolean}
     */
    NgbPagination.prototype.boundaryLinks;
    /**
     *  Whether to show the "Next" and "Previous" page links
     * @type {boolean}
     */
    NgbPagination.prototype.directionLinks;
    /**
     *  Whether to show ellipsis symbols and first/last page numbers when maxSize > number of pages
     * @type {boolean}
     */
    NgbPagination.prototype.ellipses;
    /**
     *  Whether to rotate pages when maxSize > number of pages.
     *  Current page will be in the middle
     * @type {boolean}
     */
    NgbPagination.prototype.rotate;
    /**
     *  Number of items in collection.
     * @type {number}
     */
    NgbPagination.prototype.collectionSize;
    /**
     *  Maximum number of pages to display.
     * @type {number}
     */
    NgbPagination.prototype.maxSize;
    /**
     *  Current page.
     * @type {number}
     */
    NgbPagination.prototype.page;
    /**
     *  Number of items per page.
     * @type {number}
     */
    NgbPagination.prototype.pageSize;
    /**
     *  An event fired when the page is changed.
     *  Event's payload equals to the newly selected page.
     * @type {!EventEmitter<number>}
     */
    NgbPagination.prototype.pageChange;
    /**
     * Pagination display size: small or large
     * @type {string}
     */
    NgbPagination.prototype.size;
}
//# sourceMappingURL=pagination.js.map