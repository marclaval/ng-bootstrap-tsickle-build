goog.module('tmp.ng_bootstrap.carousel.carousel'); exports = {}; var module = {id: 'tmp/ng-bootstrap/carousel/carousel.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Directive, TemplateRef, ContentChildren, QueryList, Input, OnDestroy, AfterContentChecked, OnInit } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Directive = Directive; /* local alias for Closure JSDoc */
const TemplateRef = TemplateRef; /* local alias for Closure JSDoc */
const ContentChildren = ContentChildren; /* local alias for Closure JSDoc */
const QueryList = QueryList; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const OnDestroy = OnDestroy; /* local alias for Closure JSDoc */
const AfterContentChecked = AfterContentChecked; /* local alias for Closure JSDoc */
const OnInit = OnInit; /* local alias for Closure JSDoc */
import { NgbCarouselConfig } from './carousel-config';
const NgbCarouselConfig = NgbCarouselConfig; /* local alias for Closure JSDoc */
let /** @type {number} */ nextId = 0;
/**
 * Represents an individual slide to be used within a carousel.
 */
export let NgbSlide = class NgbSlide {
    /**
     * @param {!TemplateRef<?>} tplRef
     */
    constructor(tplRef) {
        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */
        this.id = `ngb-slide-${nextId++}`;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbSlide.prototype, "id", void 0);
NgbSlide = __decorate([
    Directive({ selector: 'template[ngbSlide]' }), 
    __metadata('design:paramtypes', [Object])
], NgbSlide);
function NgbSlide_tsickle_Closure_declarations() {
    /**
     * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
     * Will be auto-generated if not provided.
     * @type {string}
     */
    NgbSlide.prototype.id;
    /** @type {!TemplateRef<?>} */
    NgbSlide.prototype.tplRef;
}
/**
 * Directive to easily create carousels based on Bootstrap's markup.
 */
export let NgbCarousel = class NgbCarousel {
    /**
     * @param {!NgbCarouselConfig} config
     */
    constructor(config) {
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
    }
    /**
     * @return {void}
     */
    ngAfterContentChecked() {
        let /** @type {!NgbSlide} */ activeSlide = this._getSlideById(this.activeId);
        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
    }
    /**
     * @return {void}
     */
    ngOnInit() { this._startTimer(); }
    /**
     * @return {void}
     */
    ngOnDestroy() { clearInterval(this._slideChangeInterval); }
    /**
     * Navigate to a slide with the specified identifier.
     * @param {string} slideId
     * @return {void}
     */
    select(slideId) {
        this.cycleToSelected(slideId);
        this._restartTimer();
    }
    /**
     * Navigate to the next slide.
     * @return {void}
     */
    prev() {
        this.cycleToPrev();
        this._restartTimer();
    }
    /**
     * Navigate to the next slide.
     * @return {void}
     */
    next() {
        this.cycleToNext();
        this._restartTimer();
    }
    /**
     * Stops the carousel from cycling through items.
     * @return {void}
     */
    pause() { this._stopTimer(); }
    /**
     * Restarts cycling through the carousel slides from left to right.
     * @return {void}
     */
    cycle() { this._startTimer(); }
    /**
     * @return {void}
     */
    cycleToNext() { this.cycleToSelected(this._getNextSlide(this.activeId)); }
    /**
     * @return {void}
     */
    cycleToPrev() { this.cycleToSelected(this._getPrevSlide(this.activeId)); }
    /**
     * @param {string} slideIdx
     * @return {void}
     */
    cycleToSelected(slideIdx) {
        let /** @type {!NgbSlide} */ selectedSlide = this._getSlideById(slideIdx);
        if (selectedSlide) {
            this.activeId = selectedSlide.id;
        }
    }
    /**
     * @return {void}
     */
    keyPrev() {
        if (this.keyboard) {
            this.prev();
        }
    }
    /**
     * @return {void}
     */
    keyNext() {
        if (this.keyboard) {
            this.next();
        }
    }
    /**
     * @return {void}
     */
    _restartTimer() {
        this._stopTimer();
        this._startTimer();
    }
    /**
     * @return {void}
     */
    _startTimer() {
        if (this.interval > 0) {
            this._slideChangeInterval = setInterval(() => { this.cycleToNext(); }, this.interval);
        }
    }
    /**
     * @return {void}
     */
    _stopTimer() { clearInterval(this._slideChangeInterval); }
    /**
     * @param {string} slideId
     * @return {!NgbSlide}
     */
    _getSlideById(slideId) {
        let /** @type {!Array<!NgbSlide>} */ slideWithId = this.slides.filter(slide => slide.id === slideId);
        return slideWithId.length ? slideWithId[0] : null;
    }
    /**
     * @param {string} slideId
     * @return {number}
     */
    _getSlideIdxById(slideId) {
        return this.slides.toArray().indexOf(this._getSlideById(slideId));
    }
    /**
     * @param {string} currentSlideId
     * @return {string}
     */
    _getNextSlide(currentSlideId) {
        const /** @type {!Array<!NgbSlide>} */ slideArr = this.slides.toArray();
        const /** @type {number} */ currentSlideIdx = this._getSlideIdxById(currentSlideId);
        const /** @type {boolean} */ isLastSlide = currentSlideIdx === slideArr.length - 1;
        return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
            slideArr[currentSlideIdx + 1].id;
    }
    /**
     * @param {string} currentSlideId
     * @return {string}
     */
    _getPrevSlide(currentSlideId) {
        const /** @type {!Array<!NgbSlide>} */ slideArr = this.slides.toArray();
        const /** @type {number} */ currentSlideIdx = this._getSlideIdxById(currentSlideId);
        const /** @type {boolean} */ isFirstSlide = currentSlideIdx === 0;
        return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
            slideArr[currentSlideIdx - 1].id;
    }
};
__decorate([
    ContentChildren(NgbSlide), 
    __metadata('design:type', Object)
], NgbCarousel.prototype, "slides", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbCarousel.prototype, "interval", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbCarousel.prototype, "wrap", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbCarousel.prototype, "keyboard", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbCarousel.prototype, "activeId", void 0);
NgbCarousel = __decorate([
    Component({
        selector: 'ngb-carousel',
        exportAs: 'ngbCarousel',
        host: {
            'class': 'carousel slide',
            '[style.display]': '"block"',
            'tabIndex': '0',
            '(mouseenter)': 'pause()',
            '(mouseleave)': 'cycle()',
            '(keydown.arrowLeft)': 'keyPrev()',
            '(keydown.arrowRight)': 'keyNext()'
        },
        template: `
    <ol class="carousel-indicators">
      <li *ngFor="let slide of slides" [id]="slide.id" [class.active]="slide.id === activeId" (click)="cycleToSelected(slide.id)"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div *ngFor="let slide of slides" class="carousel-item" [class.active]="slide.id === activeId">
        <template [ngTemplateOutlet]="slide.tplRef"></template>
      </div>
    </div>
    <a class="left carousel-control-prev" role="button" (click)="cycleToPrev()">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control-next" role="button" (click)="cycleToNext()">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    `
    }), 
    __metadata('design:paramtypes', [Object])
], NgbCarousel);
function NgbCarousel_tsickle_Closure_declarations() {
    /** @type {!QueryList<!NgbSlide>} */
    NgbCarousel.prototype.slides;
    /** @type {?} */
    NgbCarousel.prototype._slideChangeInterval;
    /**
     * Amount of time in milliseconds before next slide is shown.
     * @type {number}
     */
    NgbCarousel.prototype.interval;
    /**
     * Whether can wrap from the last to the first slide.
     * @type {boolean}
     */
    NgbCarousel.prototype.wrap;
    /**
     * A flag for allowing navigation via keyboard
     * @type {boolean}
     */
    NgbCarousel.prototype.keyboard;
    /**
     * The active slide id.
     * @type {string}
     */
    NgbCarousel.prototype.activeId;
}
export const /** @type {!Array<?>} */ NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];
//# sourceMappingURL=carousel.js.map