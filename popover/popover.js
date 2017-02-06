goog.module('_ng_bootstrap.ng_bootstrap.popover.popover'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/popover/popover.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgbPopoverConfig } from './popover-config';
const NgbPopoverConfig = NgbPopoverConfig; /* local alias for Closure JSDoc */
export let NgbPopoverWindow = class NgbPopoverWindow {
    constructor() {
        this.placement = 'top';
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbPopoverWindow.prototype, "placement", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbPopoverWindow.prototype, "title", void 0);
NgbPopoverWindow = __decorate([
    /* local alias for Closure JSDoc */ Component({
        selector: 'ngb-popover-window',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { '[class]': '"popover show popover-" + placement', 'role': 'tooltip' },
        template: `
    <h3 class="popover-title">{{title}}</h3><div class="popover-content"><ng-content></ng-content></div>
    `
    }), 
    __metadata('design:paramtypes', [])
], NgbPopoverWindow);
function NgbPopoverWindow_tsickle_Closure_declarations() {
    /** @type {string} */
    NgbPopoverWindow.prototype.placement;
    /** @type {string} */
    NgbPopoverWindow.prototype.title;
}
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
export let NgbPopover = class NgbPopover {
    /**
     * @param {!ElementRef} _elementRef
     * @param {!Renderer} _renderer
     * @param {!Injector} injector
     * @param {!ComponentFactoryResolver} componentFactoryResolver
     * @param {!ViewContainerRef} viewContainerRef
     * @param {!NgbPopoverConfig} config
     * @param {!NgZone} ngZone
     */
    constructor(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Emits an event when the popover is shown
         */
        this.shown = new EventEmitter();
        /**
         * Emits an event when the popover is hidden
         */
        this.hidden = new EventEmitter();
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(() => {
            if (this._windowRef) {
                positionElements(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body');
            }
        });
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of the popover.
     * The context is an optional value to be injected into the popover template when it is created.
     * @param {?=} context
     * @return {void}
     */
    open(context) {
        if (!this._windowRef) {
            this._windowRef = this._popupService.open(this.ngbPopover, context);
            this._windowRef.instance.placement = this.placement;
            this._windowRef.instance.title = this.popoverTitle;
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered via
            // Renderer::listen() are not picked up by change detection with the OnPush strategy
            this._windowRef.changeDetectorRef.markForCheck();
            this.shown.emit();
        }
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of the popover.
     * @return {void}
     */
    close() {
        if (this._windowRef) {
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
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
     * Returns whether or not the popover is currently being shown
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
], NgbPopover.prototype, "ngbPopover", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbPopover.prototype, "popoverTitle", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbPopover.prototype, "placement", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbPopover.prototype, "triggers", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbPopover.prototype, "container", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbPopover.prototype, "shown", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbPopover.prototype, "hidden", void 0);
NgbPopover = __decorate([
    Directive({ selector: '[ngbPopover]', exportAs: 'ngbPopover' }), 
    __metadata('design:paramtypes', [Object, Object, Object, Object, Object, Object, Object])
], NgbPopover);
function NgbPopover_tsickle_Closure_declarations() {
    /**
     * Content to be displayed as popover.
     * @type {(string|!TemplateRef<?>)}
     */
    NgbPopover.prototype.ngbPopover;
    /**
     * Title of a popover.
     * @type {string}
     */
    NgbPopover.prototype.popoverTitle;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right"
     * @type {string}
     */
    NgbPopover.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of event names.
     * @type {string}
     */
    NgbPopover.prototype.triggers;
    /**
     * A selector specifying the element the popover should be appended to.
     * Currently only supports "body".
     * @type {string}
     */
    NgbPopover.prototype.container;
    /**
     * Emits an event when the popover is shown
     * @type {!EventEmitter<?>}
     */
    NgbPopover.prototype.shown;
    /**
     * Emits an event when the popover is hidden
     * @type {!EventEmitter<?>}
     */
    NgbPopover.prototype.hidden;
    /** @type {!PopupService<!NgbPopoverWindow>} */
    NgbPopover.prototype._popupService;
    /** @type {!ComponentRef<!NgbPopoverWindow>} */
    NgbPopover.prototype._windowRef;
    /** @type {?} */
    NgbPopover.prototype._unregisterListenersFn;
    /** @type {?} */
    NgbPopover.prototype._zoneSubscription;
    /** @type {!ElementRef} */
    NgbPopover.prototype._elementRef;
    /** @type {!Renderer} */
    NgbPopover.prototype._renderer;
}
//# sourceMappingURL=popover.js.map