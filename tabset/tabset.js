goog.module('_ng_bootstrap.ng_bootstrap.tabset.tabset'); exports = {}; var module = {id: '@ng-bootstrap/ng-bootstrap/tabset/tabset.js'};var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ContentChildren, QueryList, Directive, TemplateRef, ContentChild, AfterContentChecked, Output, EventEmitter } from '@angular/core';
const Component = Component; /* local alias for Closure JSDoc */
const Input = Input; /* local alias for Closure JSDoc */
const ContentChildren = ContentChildren; /* local alias for Closure JSDoc */
const QueryList = QueryList; /* local alias for Closure JSDoc */
const Directive = Directive; /* local alias for Closure JSDoc */
const TemplateRef = TemplateRef; /* local alias for Closure JSDoc */
const ContentChild = ContentChild; /* local alias for Closure JSDoc */
const AfterContentChecked = AfterContentChecked; /* local alias for Closure JSDoc */
const Output = Output; /* local alias for Closure JSDoc */
const EventEmitter = EventEmitter; /* local alias for Closure JSDoc */
import { NgbTabsetConfig } from './tabset-config';
const NgbTabsetConfig = NgbTabsetConfig; /* local alias for Closure JSDoc */
let /** @type {number} */ nextId = 0;
/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
export let NgbTabTitle = class NgbTabTitle {
    /**
     * @param {!TemplateRef<?>} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgbTabTitle = __decorate([
    Directive({ selector: 'template[ngbTabTitle]' }), 
    __metadata('design:paramtypes', [Object])
], NgbTabTitle);
function NgbTabTitle_tsickle_Closure_declarations() {
    /** @type {!TemplateRef<?>} */
    NgbTabTitle.prototype.templateRef;
}
/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
export let NgbTabContent = class NgbTabContent {
    /**
     * @param {!TemplateRef<?>} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgbTabContent = __decorate([
    Directive({ selector: 'template[ngbTabContent]' }), 
    __metadata('design:paramtypes', [Object])
], NgbTabContent);
function NgbTabContent_tsickle_Closure_declarations() {
    /** @type {!TemplateRef<?>} */
    NgbTabContent.prototype.templateRef;
}
/**
 * A directive representing an individual tab.
 */
export let NgbTab = class NgbTab {
    constructor() {
        /**
         * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
         */
        this.id = `ngb-tab-${nextId++}`;
        /**
         * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
         */
        this.disabled = false;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbTab.prototype, "id", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbTab.prototype, "title", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbTab.prototype, "disabled", void 0);
__decorate([
    ContentChild(NgbTabContent), 
    __metadata('design:type', NgbTabContent)
], NgbTab.prototype, "contentTpl", void 0);
__decorate([
    ContentChild(NgbTabTitle), 
    __metadata('design:type', NgbTabTitle)
], NgbTab.prototype, "titleTpl", void 0);
NgbTab = __decorate([
    Directive({ selector: 'ngb-tab' }), 
    __metadata('design:paramtypes', [])
], NgbTab);
function NgbTab_tsickle_Closure_declarations() {
    /**
     * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
     * @type {string}
     */
    NgbTab.prototype.id;
    /**
     * Simple (string only) title. Use the "NgbTabTitle" directive for more complex use-cases.
     * @type {string}
     */
    NgbTab.prototype.title;
    /**
     * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
     * @type {boolean}
     */
    NgbTab.prototype.disabled;
    /** @type {!NgbTabContent} */
    NgbTab.prototype.contentTpl;
    /** @type {!NgbTabTitle} */
    NgbTab.prototype.titleTpl;
}
/** @record */
export function NgbTabChangeEvent() { }
/**
 * Id of the currently active tab
 * @type {string}
 */
NgbTabChangeEvent.prototype.activeId;
/**
 * Id of the newly selected tab
 * @type {string}
 */
NgbTabChangeEvent.prototype.nextId;
/**
 * Function that will prevent tab switch if called
 * @type {function(): void}
 */
NgbTabChangeEvent.prototype.preventDefault;
/**
 * A component that makes it easy to create tabbed interface.
 */
export let NgbTabset = class NgbTabset {
    /**
     * @param {!NgbTabsetConfig} config
     */
    constructor(config) {
        /**
         * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
         */
        this.tabChange = new EventEmitter();
        this.type = config.type;
        this.justify = config.justify;
    }
    /**
     * Selects the tab with the given id and shows its associated pane.
     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     * @param {string} tabId
     * @return {void}
     */
    select(tabId) {
        let /** @type {!NgbTab} */ selectedTab = this._getTabById(tabId);
        if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
            let /** @type {boolean} */ defaultPrevented = false;
            this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: () => { defaultPrevented = true; } });
            if (!defaultPrevented) {
                this.activeId = selectedTab.id;
            }
        }
    }
    /**
     * @return {void}
     */
    ngAfterContentChecked() {
        // auto-correct activeId that might have been set incorrectly as input
        let /** @type {!NgbTab} */ activeTab = this._getTabById(this.activeId);
        this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
    }
    /**
     * @param {string} id
     * @return {!NgbTab}
     */
    _getTabById(id) {
        let /** @type {!Array<!NgbTab>} */ tabsWithId = this.tabs.filter(tab => tab.id === id);
        return tabsWithId.length ? tabsWithId[0] : null;
    }
};
__decorate([
    ContentChildren(NgbTab), 
    __metadata('design:type', Object)
], NgbTabset.prototype, "tabs", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], NgbTabset.prototype, "activeId", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbTabset.prototype, "justify", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NgbTabset.prototype, "type", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NgbTabset.prototype, "tabChange", void 0);
NgbTabset = __decorate([
    Component({
        selector: 'ngb-tabset',
        exportAs: 'ngbTabset',
        template: `
    <ul [class]="'nav nav-' + type + ' justify-content-' + justify" role="tablist">
      <li class="nav-item" *ngFor="let tab of tabs">
        <a [id]="tab.id" class="nav-link" [class.active]="tab.id === activeId" [class.disabled]="tab.disabled"
          href (click)="!!select(tab.id)" role="tab" [attr.aria-controls]="tab.id + '-panel'" [attr.aria-expanded]="tab.id === activeId">
          {{tab.title}}<template [ngTemplateOutlet]="tab.titleTpl?.templateRef"></template>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <template ngFor let-tab [ngForOf]="tabs">
        <div class="tab-pane active" *ngIf="tab.id === activeId" role="tabpanel" [attr.aria-labelledby]="tab.id" id="{{tab.id}}-panel">
          <template [ngTemplateOutlet]="tab.contentTpl.templateRef"></template>
        </div>
      </template>
    </div>
  `
    }), 
    __metadata('design:paramtypes', [Object])
], NgbTabset);
function NgbTabset_tsickle_Closure_declarations() {
    /** @type {!QueryList<!NgbTab>} */
    NgbTabset.prototype.tabs;
    /**
     * An identifier of an initially selected (active) tab. Use the "select" method to switch a tab programmatically.
     * @type {string}
     */
    NgbTabset.prototype.activeId;
    /**
     * The horizontal alignment of the nav with flexbox utilities. Can be one of 'start', 'center' or 'end'
     * @type {string}
     */
    NgbTabset.prototype.justify;
    /**
     * Type of navigation to be used for tabs. Can be one of 'tabs' or 'pills'.
     * @type {string}
     */
    NgbTabset.prototype.type;
    /**
     * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
     * @type {!EventEmitter<!NgbTabChangeEvent>}
     */
    NgbTabset.prototype.tabChange;
}
//# sourceMappingURL=tabset.js.map