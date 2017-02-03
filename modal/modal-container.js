goog.module('tmp.ng_bootstrap.modal.modal_container'); exports = {}; var module = {id: 'tmp/ng-bootstrap/modal/modal-container.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Injector, ReflectiveInjector, Renderer, TemplateRef, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
const Directive = Directive; /* local alias for Closure JSDoc */
const Injector = Injector; /* local alias for Closure JSDoc */
const ReflectiveInjector = ReflectiveInjector; /* local alias for Closure JSDoc */
const Renderer = Renderer; /* local alias for Closure JSDoc */
const TemplateRef = TemplateRef; /* local alias for Closure JSDoc */
const ViewContainerRef = ViewContainerRef; /* local alias for Closure JSDoc */
const ComponentFactoryResolver = ComponentFactoryResolver; /* local alias for Closure JSDoc */
const ComponentFactory = ComponentFactory; /* local alias for Closure JSDoc */
const ComponentRef = ComponentRef; /* local alias for Closure JSDoc */
import { isDefined, isString } from '../util/util';
const isDefined = isDefined; /* local alias for Closure JSDoc */
const isString = isString; /* local alias for Closure JSDoc */
import { ContentRef } from '../util/popup';
const ContentRef = ContentRef; /* local alias for Closure JSDoc */
import { NgbModalBackdrop } from './modal-backdrop';
const NgbModalBackdrop = NgbModalBackdrop; /* local alias for Closure JSDoc */
import { NgbModalWindow } from './modal-window';
const NgbModalWindow = NgbModalWindow; /* local alias for Closure JSDoc */
import { NgbModalStack } from './modal-stack';
const NgbModalStack = NgbModalStack; /* local alias for Closure JSDoc */
import { NgbActiveModal, NgbModalRef } from './modal-ref';
const NgbActiveModal = NgbActiveModal; /* local alias for Closure JSDoc */
const NgbModalRef = NgbModalRef; /* local alias for Closure JSDoc */
export let NgbModalContainer = class NgbModalContainer {
    /**
     * @param {!Injector} _injector
     * @param {!Renderer} _renderer
     * @param {!ViewContainerRef} _viewContainerRef
     * @param {!ComponentFactoryResolver} _componentFactoryResolver
     * @param {!NgbModalStack} ngbModalStack
     */
    constructor(_injector, _renderer, _viewContainerRef, _componentFactoryResolver, ngbModalStack) {
        this._injector = _injector;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._backdropFactory = _componentFactoryResolver.resolveComponentFactory(NgbModalBackdrop);
        this._windowFactory = _componentFactoryResolver.resolveComponentFactory(NgbModalWindow);
        ngbModalStack.registerContainer(this);
    }
    /**
     * @param {!ComponentFactoryResolver} moduleCFR
     * @param {!Injector} contentInjector
     * @param {(string|!TemplateRef<?>)} content
     * @param {?} options
     * @return {!NgbModalRef}
     */
    open(moduleCFR, contentInjector, content, options) {
        const /** @type {!NgbActiveModal} */ activeModal = new NgbActiveModal();
        const /** @type {!ContentRef} */ contentRef = this._getContentRef(moduleCFR, contentInjector, content, activeModal);
        let /** @type {!ComponentRef<!NgbModalWindow>} */ windowCmptRef;
        let /** @type {!ComponentRef<!NgbModalBackdrop>} */ backdropCmptRef;
        let /** @type {!NgbModalRef} */ ngbModalRef;
        if (options.backdrop !== false) {
            backdropCmptRef = this._viewContainerRef.createComponent(this._backdropFactory, 0, this._injector);
        }
        windowCmptRef = this._viewContainerRef.createComponent(this._windowFactory, this._viewContainerRef.length - 1, this._injector, contentRef.nodes);
        ngbModalRef = new NgbModalRef(this._viewContainerRef, windowCmptRef, contentRef, backdropCmptRef);
        activeModal.close = (result) => { ngbModalRef.close(result); };
        activeModal.dismiss = (reason) => { ngbModalRef.dismiss(reason); };
        this._applyWindowOptions(windowCmptRef.instance, options);
        return ngbModalRef;
    }
    /**
     * @param {!NgbModalWindow} windowInstance
     * @param {!Object} options
     * @return {void}
     */
    _applyWindowOptions(windowInstance, options) {
        ['backdrop', 'keyboard', 'size', 'windowClass'].forEach((optionName) => {
            if (isDefined(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    }
    /**
     * @param {!ComponentFactoryResolver} moduleCFR
     * @param {!Injector} contentInjector
     * @param {?} content
     * @param {!NgbActiveModal} context
     * @return {!ContentRef}
     */
    _getContentRef(moduleCFR, contentInjector, content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof TemplateRef) {
            const /** @type {!EmbeddedViewRef<!NgbActiveModal>} */ viewRef = this._viewContainerRef.createEmbeddedView(/** @type {!TemplateRef<!NgbActiveModal>} */ (content), context);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else if (isString(content)) {
            return new ContentRef([[this._renderer.createText(null, `${content}`)]]);
        }
        else {
            const /** @type {!ComponentFactory<?>} */ contentCmptFactory = moduleCFR.resolveComponentFactory(content);
            const /** @type {!ReflectiveInjector} */ modalContentInjector = ReflectiveInjector.resolveAndCreate([{ provide: NgbActiveModal, useValue: context }], contentInjector);
            const /** @type {!ComponentRef<?>} */ componentRef = this._viewContainerRef.createComponent(contentCmptFactory, 0, modalContentInjector);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
    }
};
NgbModalContainer = __decorate([
    /* local alias for Closure JSDoc */ Directive({ selector: 'template[ngbModalContainer]' }), 
    __metadata('design:paramtypes', [Object, Object, Object, Object, Object])
], NgbModalContainer);
function NgbModalContainer_tsickle_Closure_declarations() {
    /** @type {!ComponentFactory<!NgbModalBackdrop>} */
    NgbModalContainer.prototype._backdropFactory;
    /** @type {!ComponentFactory<!NgbModalWindow>} */
    NgbModalContainer.prototype._windowFactory;
    /** @type {!Injector} */
    NgbModalContainer.prototype._injector;
    /** @type {!Renderer} */
    NgbModalContainer.prototype._renderer;
    /** @type {!ViewContainerRef} */
    NgbModalContainer.prototype._viewContainerRef;
    /** @type {!ComponentFactoryResolver} */
    NgbModalContainer.prototype._componentFactoryResolver;
}
//# sourceMappingURL=modal-container.js.map