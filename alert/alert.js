goog.module('_ng_bootstrap.ng_bootstrap.alert.alert'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/alert/alert.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
const ChangeDetectionStrategy = ChangeDetectionStrategy; /* local alias for Closure JSDoc */
import { NgbAlertConfig } from './alert-config';
const NgbAlertConfig = NgbAlertConfig; /* local alias for Closure JSDoc */
/**
 * Alerts can be used to provide feedback messages.
 */
export let NgbAlert = class NgbAlert {
    /**
     * @param {!NgbAlertConfig} config
     */
    constructor(config) {
        /**
         * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
         */
        this.close = new EventEmitter();
        this.dismissible = config.dismissible;
        this.type = config.type;
    }
    /**
     * @return {void}
     */
    closeHandler() { this.close.emit(null); }
};
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbAlert.prototype, "dismissible", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbAlert.prototype, "type", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbAlert.prototype, "close", void 0);
NgbAlert = __decorate([
    /* local alias for Closure JSDoc */ Component({
        selector: 'ngb-alert',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <div [class]="'alert alert-' + type + (dismissible ? ' alert-dismissible' : '')" role="alert">
      <button *ngIf="dismissible" type="button" class="close" aria-label="Close" (click)="closeHandler()">
            <span aria-hidden="true">&times;</span>
      </button>
      <ng-content></ng-content>
    </div>
    `
    }), 
    __metadata('design:paramtypes', [Object])
], NgbAlert);
function NgbAlert_tsickle_Closure_declarations() {
    /**
     * A flag indicating if a given alert can be dismissed (closed) by a user. If this flag is set, a close button (in a
     * form of an ×) will be displayed.
     * @type {boolean}
     */
    NgbAlert.prototype.dismissible;
    /**
     * Alert type (CSS class). Bootstrap 4 recognizes the following types: "success", "info", "warning" and "danger".
     * @type {string}
     */
    NgbAlert.prototype.type;
    /**
     * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
     * @type {!EventEmitter<?>}
     */
    NgbAlert.prototype.close;
}
//# sourceMappingURL=alert.js.map