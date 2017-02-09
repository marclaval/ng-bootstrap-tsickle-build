import { NgModule } from '@angular/core/index';
import { CommonModule } from '@angular/common/index';
import { NgbHighlight } from './highlight';
import { NgbTypeaheadWindow } from './typeahead-window';
import { NgbTypeahead } from './typeahead';
import { NgbTypeaheadConfig } from './typeahead-config';
export { NgbHighlight } from './highlight';
export { NgbTypeaheadWindow } from './typeahead-window';
export { NgbTypeaheadConfig } from './typeahead-config';
export { NgbTypeahead } from './typeahead';
export class NgbTypeaheadModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbTypeaheadModule, providers: [NgbTypeaheadConfig] }; }
}
NgbTypeaheadModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow],
                exports: [NgbTypeahead],
                imports: [CommonModule],
                entryComponents: [NgbTypeaheadWindow]
            },] },
];
/** @nocollapse */
NgbTypeaheadModule.ctorParameters = () => [];
function NgbTypeaheadModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTypeaheadModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTypeaheadModule.ctorParameters;
}
//# sourceMappingURL=typeahead.module.js.map