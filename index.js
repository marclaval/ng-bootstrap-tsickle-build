goog.module('_ng_bootstrap.ng_bootstrap.index'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/index.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, ModuleWithProviders } from '@angular/core';
const NgModule = NgModule; /* local alias for Closure JSDoc */
const ModuleWithProviders = ModuleWithProviders; /* local alias for Closure JSDoc */
import { NgbAccordionModule, NgbPanelChangeEvent } from './accordion/accordion.module';
const NgbAccordionModule = NgbAccordionModule; /* local alias for Closure JSDoc */
const NgbPanelChangeEvent = NgbPanelChangeEvent; /* local alias for Closure JSDoc */
import { NgbAlertModule } from './alert/alert.module';
const NgbAlertModule = NgbAlertModule; /* local alias for Closure JSDoc */
import { NgbButtonsModule } from './buttons/radio.module';
const NgbButtonsModule = NgbButtonsModule; /* local alias for Closure JSDoc */
import { NgbCarouselModule } from './carousel/carousel.module';
const NgbCarouselModule = NgbCarouselModule; /* local alias for Closure JSDoc */
import { NgbCollapseModule } from './collapse/collapse.module';
const NgbCollapseModule = NgbCollapseModule; /* local alias for Closure JSDoc */
import { NgbDatepickerModule } from './datepicker/datepicker.module';
const NgbDatepickerModule = NgbDatepickerModule; /* local alias for Closure JSDoc */
import { NgbDropdownModule } from './dropdown/dropdown.module';
const NgbDropdownModule = NgbDropdownModule; /* local alias for Closure JSDoc */
import { NgbModalModule, NgbModal, NgbModalOptions, NgbModalRef, ModalDismissReasons } from './modal/modal.module';
const NgbModalModule = NgbModalModule; /* local alias for Closure JSDoc */
const NgbModal = NgbModal; /* local alias for Closure JSDoc */
const NgbModalOptions = NgbModalOptions; /* local alias for Closure JSDoc */
const NgbModalRef = NgbModalRef; /* local alias for Closure JSDoc */
const ModalDismissReasons = ModalDismissReasons; /* local alias for Closure JSDoc */
import { NgbPaginationModule } from './pagination/pagination.module';
const NgbPaginationModule = NgbPaginationModule; /* local alias for Closure JSDoc */
import { NgbPopoverModule } from './popover/popover.module';
const NgbPopoverModule = NgbPopoverModule; /* local alias for Closure JSDoc */
import { NgbProgressbarModule } from './progressbar/progressbar.module';
const NgbProgressbarModule = NgbProgressbarModule; /* local alias for Closure JSDoc */
import { NgbRatingModule } from './rating/rating.module';
const NgbRatingModule = NgbRatingModule; /* local alias for Closure JSDoc */
import { NgbTabsetModule, NgbTabChangeEvent } from './tabset/tabset.module';
const NgbTabsetModule = NgbTabsetModule; /* local alias for Closure JSDoc */
const NgbTabChangeEvent = NgbTabChangeEvent; /* local alias for Closure JSDoc */
import { NgbTimepickerModule } from './timepicker/timepicker.module';
const NgbTimepickerModule = NgbTimepickerModule; /* local alias for Closure JSDoc */
import { NgbTooltipModule } from './tooltip/tooltip.module';
const NgbTooltipModule = NgbTooltipModule; /* local alias for Closure JSDoc */
import { NgbTypeaheadModule, NgbTypeaheadSelectItemEvent } from './typeahead/typeahead.module';
const NgbTypeaheadModule = NgbTypeaheadModule; /* local alias for Closure JSDoc */
const NgbTypeaheadSelectItemEvent = NgbTypeaheadSelectItemEvent; /* local alias for Closure JSDoc */
export { NgbAccordionModule, NgbPanelChangeEvent, NgbAccordionConfig, NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent } from './accordion/accordion.module';
export { NgbAlertModule, NgbAlertConfig, NgbAlert } from './alert/alert.module';
export { NgbButtonsModule, NgbRadioGroup } from './buttons/radio.module';
export { NgbCarouselModule, NgbCarouselConfig, NgbCarousel, NgbSlide } from './carousel/carousel.module';
export { NgbCollapseModule, NgbCollapse } from './collapse/collapse.module';
export { NgbDatepickerModule, NgbDatepickerI18n, NgbDatepickerConfig, NgbDateStruct, NgbDateParserFormatter, NgbDatepicker, NgbInputDatepicker } from './datepicker/datepicker.module';
export { NgbDropdownModule, NgbDropdownConfig, NgbDropdown } from './dropdown/dropdown.module';
export { NgbModalModule, NgbModal, NgbModalOptions, NgbActiveModal, NgbModalRef, ModalDismissReasons } from './modal/modal.module';
export { NgbPaginationModule, NgbPaginationConfig, NgbPagination } from './pagination/pagination.module';
export { NgbPopoverModule, NgbPopoverConfig, NgbPopover } from './popover/popover.module';
export { NgbProgressbarModule, NgbProgressbarConfig, NgbProgressbar } from './progressbar/progressbar.module';
export { NgbRatingModule, NgbRatingConfig, NgbRating } from './rating/rating.module';
export { NgbTabsetModule, NgbTabChangeEvent, NgbTabsetConfig, NgbTabset, NgbTab, NgbTabContent, NgbTabTitle } from './tabset/tabset.module';
export { NgbTimepickerModule, NgbTimepickerConfig, NgbTimeStruct, NgbTimepicker } from './timepicker/timepicker.module';
export { NgbTooltipModule, NgbTooltipConfig, NgbTooltip } from './tooltip/tooltip.module';
export { NgbTypeaheadModule, NgbTypeaheadConfig, NgbTypeaheadSelectItemEvent, NgbTypeahead } from './typeahead/typeahead.module';
const /** @type {!Array<?>} */ NGB_MODULES = [
    NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule,
    NgbDropdownModule, NgbModalModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule,
    NgbTabsetModule, NgbTimepickerModule, NgbTooltipModule, NgbTypeaheadModule
];
export let NgbRootModule = class NgbRootModule {
};
NgbRootModule = __decorate([
    NgModule({
        imports: [
            NgbAlertModule.forRoot(), NgbButtonsModule.forRoot(), NgbCollapseModule.forRoot(), NgbProgressbarModule.forRoot(),
            NgbTooltipModule.forRoot(), NgbTypeaheadModule.forRoot(), NgbAccordionModule.forRoot(), NgbCarouselModule.forRoot(),
            NgbDatepickerModule.forRoot(), NgbDropdownModule.forRoot(), NgbModalModule.forRoot(), NgbPaginationModule.forRoot(),
            NgbPopoverModule.forRoot(), NgbProgressbarModule.forRoot(), NgbRatingModule.forRoot(), NgbTabsetModule.forRoot(),
            NgbTimepickerModule.forRoot(), NgbTooltipModule.forRoot()
        ],
        exports: NGB_MODULES
    }), 
    __metadata('design:paramtypes', [])
], NgbRootModule);
export let NgbModule = class NgbModule {
    /**
     * @return {!ModuleWithProviders}
     */
    static forRoot() { return { ngModule: NgbRootModule }; }
};
NgbModule = __decorate([
    NgModule({ imports: NGB_MODULES, exports: NGB_MODULES }), 
    __metadata('design:paramtypes', [])
], NgbModule);
//# sourceMappingURL=index.js.map