goog.module('_ng_bootstrap.ng_bootstrap.util.popup'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/util/popup.js'};import { Injector, TemplateRef, ViewRef, ViewContainerRef, Renderer, ComponentRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
const Injector = Injector; /* local alias for Closure JSDoc */
const TemplateRef = TemplateRef; /* local alias for Closure JSDoc */
const ViewRef = ViewRef; /* local alias for Closure JSDoc */
const ViewContainerRef = ViewContainerRef; /* local alias for Closure JSDoc */
const Renderer = Renderer; /* local alias for Closure JSDoc */
const ComponentRef = ComponentRef; /* local alias for Closure JSDoc */
const ComponentFactory = ComponentFactory; /* local alias for Closure JSDoc */
const ComponentFactoryResolver = ComponentFactoryResolver; /* local alias for Closure JSDoc */
export class ContentRef {
    /**
     * @param {!Array<?>} nodes
     * @param {!ViewRef=} viewRef
     * @param {!ComponentRef<?>=} componentRef
     */
    constructor(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
}
function ContentRef_tsickle_Closure_declarations() {
    /** @type {!Array<?>} */
    ContentRef.prototype.nodes;
    /** @type {!ViewRef} */
    ContentRef.prototype.viewRef;
    /** @type {!ComponentRef<?>} */
    ContentRef.prototype.componentRef;
}
export class PopupService {
    /**
     * @param {?} type
     * @param {!Injector} _injector
     * @param {!ViewContainerRef} _viewContainerRef
     * @param {!Renderer} _renderer
     * @param {!ComponentFactoryResolver} componentFactoryResolver
     */
    constructor(type, _injector, _viewContainerRef, _renderer, componentFactoryResolver) {
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._windowFactory = componentFactoryResolver.resolveComponentFactory(type);
    }
    /**
     * @param {(string|!TemplateRef<?>)=} content
     * @param {?=} context
     * @return {!ComponentRef<?>}
     */
    open(content, context) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef =
                this._viewContainerRef.createComponent(this._windowFactory, 0, this._injector, this._contentRef.nodes);
        }
        return this._windowRef;
    }
    /**
     * @return {void}
     */
    close() {
        if (this._windowRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
            this._windowRef = null;
            if (this._contentRef.viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                this._contentRef = null;
            }
        }
    }
    /**
     * @param {(string|!TemplateRef<?>)} content
     * @param {?=} context
     * @return {!ContentRef}
     */
    _getContentRef(content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof TemplateRef) {
            const /** @type {!EmbeddedViewRef<?>} */ viewRef = this._viewContainerRef.createEmbeddedView(/** @type {!TemplateRef<?>} */ (content), context);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText(null, `${content}`)]]);
        }
    }
}
function PopupService_tsickle_Closure_declarations() {
    /** @type {!ComponentFactory<?>} */
    PopupService.prototype._windowFactory;
    /** @type {!ComponentRef<?>} */
    PopupService.prototype._windowRef;
    /** @type {!ContentRef} */
    PopupService.prototype._contentRef;
    /** @type {!Injector} */
    PopupService.prototype._injector;
    /** @type {!ViewContainerRef} */
    PopupService.prototype._viewContainerRef;
    /** @type {!Renderer} */
    PopupService.prototype._renderer;
}
//# sourceMappingURL=popup.js.map