import { NgModule } from '@angular/core/index';
import { CommonModule } from '@angular/common/index';
import { NGB_CAROUSEL_DIRECTIVES } from './carousel';
import { NgbCarouselConfig } from './carousel-config';
export { NgbCarousel, NgbSlide } from './carousel';
export { NgbCarouselConfig } from './carousel-config';
export class NgbCarouselModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: NgbCarouselModule, providers: [NgbCarouselConfig] }; }
}
NgbCarouselModule.decorators = [
    { type: NgModule, args: [{ declarations: NGB_CAROUSEL_DIRECTIVES, exports: NGB_CAROUSEL_DIRECTIVES, imports: [CommonModule] },] },
];
/** @nocollapse */
NgbCarouselModule.ctorParameters = () => [];
function NgbCarouselModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbCarouselModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbCarouselModule.ctorParameters;
}
//# sourceMappingURL=carousel.module.js.map