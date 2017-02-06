goog.module('_ng_bootstrap.ng_bootstrap.accordion.accordion'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/accordion/accordion.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AfterContentChecked, Component, ContentChild, ContentChildren, Directive, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';
const AfterContentChecked = AfterContentChecked; /* local alias for Closure JSDoc */
const Component = Component; /* local alias for Closure JSDoc */
const ContentChild = ContentChild; /* local alias for Closure JSDoc */
const ContentChildren = ContentChildren; /* local alias for Closure JSDoc */
const Directive = Directive; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
const QueryList = QueryList; /* local alias for Closure JSDoc */
const TemplateRef = TemplateRef; /* local alias for Closure JSDoc */
import { isString } from '../util/util';
const isString = isString; /* local alias for Closure JSDoc */
import { NgbAccordionConfig } from './accordion-config';
const NgbAccordionConfig = NgbAccordionConfig; /* local alias for Closure JSDoc */
let /** @type {number} */ nextId = 0;
/**
 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
 */
export let NgbPanelTitle = class NgbPanelTitle {
    /**
     * @param {!TemplateRef<?>} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgbPanelTitle = __decorate([
    Directive({ selector: 'template[ngbPanelTitle]' }), 
    __metadata('design:paramtypes', [Object])
], NgbPanelTitle);
function NgbPanelTitle_tsickle_Closure_declarations() {
    /** @type {!TemplateRef<?>} */
    NgbPanelTitle.prototype.templateRef;
}
/**
 * This directive must be used to wrap accordion panel content.
 */
export let NgbPanelContent = class NgbPanelContent {
    /**
     * @param {!TemplateRef<?>} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgbPanelContent = __decorate([
    Directive({ selector: 'template[ngbPanelContent]' }), 
    __metadata('design:paramtypes', [Object])
], NgbPanelContent);
function NgbPanelContent_tsickle_Closure_declarations() {
    /** @type {!TemplateRef<?>} */
    NgbPanelContent.prototype.templateRef;
}
/**
 * The NgbPanel directive represents an individual panel with the title and collapsible
 * content
 */
export let NgbPanel = class NgbPanel {
    constructor() {
        /**
         * Defines if the tab control is focused
         */
        this.focused = false;
        /**
         *  A flag determining whether the panel is disabled or not.
         *  When disabled, the panel cannot be toggled.
         */
        this.disabled = false;
        /**
         *  An optional id for the panel. The id should be unique.
         *  If not provided, it will be auto-generated.
         */
        this.id = `ngb-panel-${nextId++}`;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbPanel.prototype, "disabled", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbPanel.prototype, "id", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbPanel.prototype, "title", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbPanel.prototype, "type", void 0);
__decorate([
    ContentChild(NgbPanelContent), 
    __metadata('design:type', NgbPanelContent)
], NgbPanel.prototype, "contentTpl", void 0);
__decorate([
    ContentChild(NgbPanelTitle), 
    __metadata('design:type', NgbPanelTitle)
], NgbPanel.prototype, "titleTpl", void 0);
NgbPanel = __decorate([
    Directive({ selector: 'ngb-panel' }), 
    __metadata('design:paramtypes', [])
], NgbPanel);
function NgbPanel_tsickle_Closure_declarations() {
    /**
     * Defines if the tab control is focused
     * @type {boolean}
     */
    NgbPanel.prototype.focused;
    /**
     *  A flag determining whether the panel is disabled or not.
     *  When disabled, the panel cannot be toggled.
     * @type {boolean}
     */
    NgbPanel.prototype.disabled;
    /**
     *  An optional id for the panel. The id should be unique.
     *  If not provided, it will be auto-generated.
     * @type {string}
     */
    NgbPanel.prototype.id;
    /**
     *  The title for the panel.
     * @type {string}
     */
    NgbPanel.prototype.title;
    /**
     *  Accordion's types of panels to be applied per panel basis.
     *  Bootstrap 4 recognizes the following types: "success", "info", "warning" and "danger".
     * @type {string}
     */
    NgbPanel.prototype.type;
    /** @type {!NgbPanelContent} */
    NgbPanel.prototype.contentTpl;
    /** @type {!NgbPanelTitle} */
    NgbPanel.prototype.titleTpl;
}
/** @record */
export function NgbPanelChangeEvent() { }
/**
 * Id of the accordion panel that is toggled
 * @type {string}
 */
NgbPanelChangeEvent.prototype.panelId;
/**
 * Whether the panel will be opened (true) or closed (false)
 * @type {boolean}
 */
NgbPanelChangeEvent.prototype.nextState;
/**
 * Function that will prevent panel toggling if called
 * @type {function(): void}
 */
NgbPanelChangeEvent.prototype.preventDefault;
/**
 * The NgbAccordion directive is a collection of panels.
 * It can assure that only panel can be opened at a time.
 */
export let NgbAccordion = class NgbAccordion {
    /**
     * @param {!NgbAccordionConfig} config
     */
    constructor(config) {
        this._states = new Map();
        this._panelRefs = new Map();
        /**
         * An array or comma separated strings of panel identifiers that should be opened
         */
        this.activeIds = [];
        /**
         * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
         */
        this.panelChange = new EventEmitter();
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Programmatically toggle a panel with a given id.
     * @param {string} panelId
     * @return {void}
     */
    toggle(panelId) {
        const /** @type {!NgbPanel} */ panel = this._panelRefs.get(panelId);
        if (panel && !panel.disabled) {
            const /** @type {boolean} */ nextState = !this._states.get(panelId);
            let /** @type {boolean} */ defaultPrevented = false;
            this.panelChange.emit({ panelId: panelId, nextState: nextState, preventDefault: () => { defaultPrevented = true; } });
            if (!defaultPrevented) {
                this._states.set(panelId, nextState);
                if (this.closeOtherPanels) {
                    this._closeOthers(panelId);
                }
                this._updateActiveIds();
            }
        }
    }
    /**
     * @return {void}
     */
    ngAfterContentChecked() {
        // active id updates
        if (isString(this.activeIds)) {
            this.activeIds = ((this.activeIds)).split(/\s*,\s*/);
        }
        this._updateStates();
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    }
    /**
     * \@internal
     * @param {string} panelId
     * @return {boolean}
     */
    isOpen(panelId) { return this._states.get(panelId); }
    /**
     * @param {string} panelId
     * @return {void}
     */
    _closeOthers(panelId) {
        this._states.forEach((state, id) => {
            if (id !== panelId) {
                this._states.set(id, false);
            }
        });
    }
    /**
     * @return {void}
     */
    _updateActiveIds() {
        this.activeIds =
            this.panels.toArray().filter(panel => this.isOpen(panel.id) && !panel.disabled).map(panel => panel.id);
    }
    /**
     * @return {void}
     */
    _updateStates() {
        this._states.clear();
        this._panelRefs.clear();
        this.panels.toArray().forEach((panel) => {
            this._states.set(panel.id, this.activeIds.indexOf(panel.id) > -1 && !panel.disabled);
            this._panelRefs.set(panel.id, panel);
        });
    }
};
__decorate([
    ContentChildren(NgbPanel), 
    __metadata('design:type', Object)
], NgbAccordion.prototype, "panels", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbAccordion.prototype, "activeIds", void 0);
__decorate([
    Input('closeOthers'), 
    __metadata('design:type', Boolean)
], NgbAccordion.prototype, "closeOtherPanels", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbAccordion.prototype, "type", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbAccordion.prototype, "panelChange", void 0);
NgbAccordion = __decorate([
    Component({
        selector: 'ngb-accordion',
        exportAs: 'ngbAccordion',
        host: { 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
        template: `
  <div class="card">
    <template ngFor let-panel [ngForOf]="panels">
      <div role="tab" id="{{panel.id}}-header" [attr.aria-selected]="panel.focused"
        [class]="'card-header ' + (panel.type ? 'card-'+panel.type: type ? 'card-'+type : '')" [class.active]="isOpen(panel.id)">
        <a href (click)="!!toggle(panel.id)" (focus)="panel.focused = true" 
          (blur)="panel.focused = false" [class.text-muted]="panel.disabled" 
          [attr.aria-expanded]="isOpen(panel.id)" [attr.aria-controls]="panel.id">
          {{panel.title}}<template [ngTemplateOutlet]="panel.titleTpl?.templateRef"></template>
        </a>
      </div>
      <div id="{{panel.id}}" role="tabpanel" [attr.aria-labelledby]="panel.id + '-header'" class="card-block" *ngIf="isOpen(panel.id)">
        <template [ngTemplateOutlet]="panel.contentTpl.templateRef"></template>
      </div>
    </template>
  </div>
`
    }), 
    __metadata('design:paramtypes', [Object])
], NgbAccordion);
function NgbAccordion_tsickle_Closure_declarations() {
    /**
     * A map that stores each panel state
     * @type {!Map<string, boolean>}
     */
    NgbAccordion.prototype._states;
    /**
     * A map that stores references to all panels
     * @type {!Map<string, !NgbPanel>}
     */
    NgbAccordion.prototype._panelRefs;
    /** @type {!QueryList<!NgbPanel>} */
    NgbAccordion.prototype.panels;
    /**
     * An array or comma separated strings of panel identifiers that should be opened
     * @type {(string|!Array<string>)}
     */
    NgbAccordion.prototype.activeIds;
    /**
     *  Whether the other panels should be closed when a panel is opened
     * @type {boolean}
     */
    NgbAccordion.prototype.closeOtherPanels;
    /**
     *  Accordion's types of panels to be applied globally.
     *  Bootstrap 4 recognizes the following types: "success", "info", "warning" and "danger".
     * @type {string}
     */
    NgbAccordion.prototype.type;
    /**
     * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
     * @type {!EventEmitter<!NgbPanelChangeEvent>}
     */
    NgbAccordion.prototype.panelChange;
}
//# sourceMappingURL=accordion.js.map