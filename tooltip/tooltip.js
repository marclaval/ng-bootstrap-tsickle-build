goog.module('tmp.ng_bootstrap.tooltip.tooltip'); exports = {}; var module = {id: 'tmp/ng-bootstrap/tooltip/tooltip.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Directive, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, OnDestroy, Injector, Renderer, ComponentRef, ElementRef, TemplateRef, ViewContainerRef, ComponentFactoryResolver, NgZone } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Directive = Directive; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
const ChangeDetectionStrategy = ChangeDetectionStrategy; /* local alias for Closure JSDoc */
const OnInit = OnInit; /* local alias for Closure JSDoc */
const OnDestroy = OnDestroy; /* local alias for Closure JSDoc */
const Injector = Injector; /* local alias for Closure JSDoc */
const Renderer = Renderer; /* local alias for Closure JSDoc */
const ComponentRef = ComponentRef; /* local alias for Closure JSDoc */
const ElementRef = ElementRef; /* local alias for Closure JSDoc */
const TemplateRef = TemplateRef; /* local alias for Closure JSDoc */
const ViewContainerRef = ViewContainerRef; /* local alias for Closure JSDoc */
const ComponentFactoryResolver = ComponentFactoryResolver; /* local alias for Closure JSDoc */
const NgZone = NgZone; /* local alias for Closure JSDoc */
import { listenToTriggers } from '../util/triggers';
const listenToTriggers = listenToTriggers; /* local alias for Closure JSDoc */
import { positionElements } from '../util/positioning';
const positionElements = positionElements; /* local alias for Closure JSDoc */
import { PopupService } from '../util/popup';
const PopupService = PopupService; /* local alias for Closure JSDoc */
import { NgbTooltipConfig } from './tooltip-config';
const NgbTooltipConfig = NgbTooltipConfig; /* local alias for Closure JSDoc */
export let NgbTooltipWindow = class NgbTooltipWindow {
    constructor() {
        this.placement = 'top';
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbTooltipWindow.prototype, "placement", void 0);
NgbTooltipWindow = __decorate([
    /* local alias for Closure JSDoc */ Component({
        selector: 'ngb-tooltip-window',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { '[class]': '"tooltip show tooltip-" + placement', 'role': 'tooltip' },
        template: `
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `
    }), 
    __metadata('design:paramtypes', [])
], NgbTooltipWindow);
function NgbTooltipWindow_tsickle_Closure_declarations() {
    /** @type {string} */
    NgbTooltipWindow.prototype.placement;
}
/**
 * A lightweight, extensible directive for fancy tooltip creation.
 */
export let NgbTooltip = class NgbTooltip {
    /**
     * @param {!ElementRef} _elementRef
     * @param {!Renderer} _renderer
     * @param {!Injector} injector
     * @param {!ComponentFactoryResolver} componentFactoryResolver
     * @param {!ViewContainerRef} viewContainerRef
     * @param {!NgbTooltipConfig} config
     * @param {!NgZone} ngZone
     */
    constructor(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
       * Emits an event when the tooltip is shown
       */
        this.shown = new EventEmitter();
        /**
         * Emits an event when the tooltip is hidden
         */
        this.hidden = new EventEmitter();
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(() => {
            if (this._windowRef) {
                positionElements(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body');
            }
        });
    }
    /**
     * Content to be displayed as tooltip. If falsy, the tooltip won't open.
     * @param {(string|!TemplateRef<?>)} value
     * @return {void}
     */
    set ngbTooltip(value) {
        this._ngbTooltip = value;
        if (!value && this._windowRef) {
            this.close();
        }
    }
    /**
     * @return {(string|!TemplateRef<?>)}
     */
    get ngbTooltip() { return this._ngbTooltip; }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * The context is an optional value to be injected into the tooltip template when it is created.
     * @param {?=} context
     * @return {void}
     */
    open(context) {
        if (!this._windowRef && this._ngbTooltip) {
            this._windowRef = this._popupService.open(this._ngbTooltip, context);
            this._windowRef.instance.placement = this.placement;
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered via
            // Renderer::listen() - to be determined if this is a bug in the Angular itself
            this._windowRef.changeDetectorRef.markForCheck();
            this.shown.emit();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * @return {void}
     */
    close() {
        if (this._windowRef != null) {
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * @return {void}
     */
    toggle() {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * Returns whether or not the tooltip is currently being shown
     * @return {boolean}
     */
    isOpen() { return this._windowRef != null; }
    /**
     * @return {void}
     */
    ngOnInit() {
        this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    }
    /**
     * @return {void}
     */
    ngOnDestroy() {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbTooltip.prototype, "placement", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbTooltip.prototype, "triggers", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbTooltip.prototype, "container", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbTooltip.prototype, "shown", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbTooltip.prototype, "hidden", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object), 
    __metadata('design:paramtypes', [Object])
], NgbTooltip.prototype, "ngbTooltip", null);
NgbTooltip = __decorate([
    Directive({ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' }), 
    __metadata('design:paramtypes', [Object, Object, Object, Object, Object, Object, Object])
], NgbTooltip);
function NgbTooltip_tsickle_Closure_declarations() {
    /**
     * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
     * @type {string}
     */
    NgbTooltip.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of event names.
     * @type {string}
     */
    NgbTooltip.prototype.triggers;
    /**
     * A selector specifying the element the tooltip should be appended to.
     * Currently only supports "body".
     * @type {string}
     */
    NgbTooltip.prototype.container;
    /**
     * Emits an event when the tooltip is shown
     * @type {!EventEmitter<?>}
     */
    NgbTooltip.prototype.shown;
    /**
     * Emits an event when the tooltip is hidden
     * @type {!EventEmitter<?>}
     */
    NgbTooltip.prototype.hidden;
    /** @type {(string|!TemplateRef<?>)} */
    NgbTooltip.prototype._ngbTooltip;
    /** @type {!PopupService<!NgbTooltipWindow>} */
    NgbTooltip.prototype._popupService;
    /** @type {!ComponentRef<!NgbTooltipWindow>} */
    NgbTooltip.prototype._windowRef;
    /** @type {?} */
    NgbTooltip.prototype._unregisterListenersFn;
    /** @type {?} */
    NgbTooltip.prototype._zoneSubscription;
    /** @type {!ElementRef} */
    NgbTooltip.prototype._elementRef;
    /** @type {!Renderer} */
    NgbTooltip.prototype._renderer;
}
//# sourceMappingURL=tooltip.js.map