goog.module('_ng_bootstrap.ng_bootstrap.datepicker.datepicker_day_view'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
import { NgbDateStruct } from './ngb-date-struct';
const NgbDateStruct = NgbDateStruct; /* local alias for Closure JSDoc */
export let NgbDatepickerDayView = class NgbDatepickerDayView {
    /**
     * @return {boolean}
     */
    isMuted() { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); }
};
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NgbDatepickerDayView.prototype, "currentMonth", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbDatepickerDayView.prototype, "date", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbDatepickerDayView.prototype, "disabled", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], NgbDatepickerDayView.prototype, "selected", void 0);
NgbDatepickerDayView = __decorate([
    /* local alias for Closure JSDoc */ Component({
        selector: '[ngbDatepickerDayView]',
        styles: [`
    :host {
      text-align: center;
      width: 2rem;
      height: 2rem;
      line-height: 2rem;      
      border-radius: 0.25rem;
    }
    :host.outside {
      opacity: 0.5;
    }
  `],
        host: {
            '[class.bg-primary]': 'selected',
            '[class.text-white]': 'selected',
            '[class.text-muted]': 'isMuted()',
            '[class.outside]': 'isMuted()',
            '[class.btn-secondary]': '!disabled'
        },
        template: `{{ date.day }}`
    }), 
    __metadata('design:paramtypes', [])
], NgbDatepickerDayView);
function NgbDatepickerDayView_tsickle_Closure_declarations() {
    /** @type {number} */
    NgbDatepickerDayView.prototype.currentMonth;
    /** @type {!NgbDateStruct} */
    NgbDatepickerDayView.prototype.date;
    /** @type {boolean} */
    NgbDatepickerDayView.prototype.disabled;
    /** @type {boolean} */
    NgbDatepickerDayView.prototype.selected;
}
//# sourceMappingURL=datepicker-day-view.js.map