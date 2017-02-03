goog.module('tmp.ng_bootstrap.collapse.collapse'); exports = {}; var module = {id: 'tmp/ng-bootstrap/collapse/collapse.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input } from '@angular/core';
const Directive = Directive; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
/**
 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
 */
export let NgbCollapse = class NgbCollapse {
    constructor() {
        /**
         * A flag indicating collapsed (true) or open (false) state.
         */
        this.collapsed = false;
    }
};
__decorate([
    Input('ngbCollapse'), 
    __metadata('design:type', Object)
], NgbCollapse.prototype, "collapsed", void 0);
NgbCollapse = __decorate([
    /* local alias for Closure JSDoc */ Directive({
        selector: '[ngbCollapse]',
        exportAs: 'ngbCollapse',
        host: { '[class.collapse]': 'true', '[class.show]': '!collapsed', '[attr.aria-expanded]': '!collapsed' }
    }), 
    __metadata('design:paramtypes', [])
], NgbCollapse);
function NgbCollapse_tsickle_Closure_declarations() {
    /**
     * A flag indicating collapsed (true) or open (false) state.
     * @type {boolean}
     */
    NgbCollapse.prototype.collapsed;
}
//# sourceMappingURL=collapse.js.map