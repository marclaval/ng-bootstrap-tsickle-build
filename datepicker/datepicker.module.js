import { NgModule } from '@angular/core/index';
import { CommonModule } from '@angular/common/index';
import { NgbDatepicker } from './datepicker';
import { NgbDatepickerMonthView } from './datepicker-month-view';
import { NgbDatepickerNavigation } from './datepicker-navigation';
import { NgbInputDatepicker } from './datepicker-input';
import { FormsModule } from '@angular/forms/index';
import { NgbDatepickerDayView } from './datepicker-day-view';
import { NgbDatepickerI18n, NgbDatepickerI18nDefault } from './datepicker-i18n';
import { NgbCalendar, NgbCalendarGregorian } from './ngb-calendar';
import { NgbDateParserFormatter, NgbDateISOParserFormatter } from './ngb-date-parser-formatter';
import { NgbDatepickerService } from './datepicker-service';
import { NgbDatepickerNavigationSelect } from './datepicker-navigation-select';
import { NgbDatepickerConfig } from './datepicker-config';
export { NgbDatepicker } from './datepicker';
export { NgbInputDatepicker } from './datepicker-input';
export { NgbDatepickerMonthView } from './datepicker-month-view';
export { NgbDatepickerDayView } from './datepicker-day-view';
export { NgbDatepickerNavigation } from './datepicker-navigation';
export { NgbDatepickerNavigationSelect } from './datepicker-navigation-select';
export { NgbDatepickerConfig } from './datepicker-config';
export { NgbDatepickerI18n } from './datepicker-i18n';
export { NgbDateParserFormatter } from './ngb-date-parser-formatter';
export class NgbDatepickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgbDatepickerModule,
            providers: [
                { provide: NgbCalendar, useClass: NgbCalendarGregorian },
                { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nDefault },
                { provide: NgbDateParserFormatter, useClass: NgbDateISOParserFormatter }, NgbDatepickerService,
                NgbDatepickerConfig
            ]
        };
    }
}
NgbDatepickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgbDatepicker, NgbDatepickerMonthView, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerDayView,
                    NgbInputDatepicker
                ],
                exports: [NgbDatepicker, NgbInputDatepicker],
                imports: [CommonModule, FormsModule],
                entryComponents: [NgbDatepicker]
            },] },
];
/** @nocollapse */
NgbDatepickerModule.ctorParameters = () => [];
function NgbDatepickerModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDatepickerModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbDatepickerModule.ctorParameters;
}
//# sourceMappingURL=datepicker.module.js.map