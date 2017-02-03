goog.module('tmp.ng_bootstrap.util.triggers'); exports = {}; var module = {id: 'tmp/ng-bootstrap/util/triggers.js'};export class Trigger {
    /**
     * @param {string} open
     * @param {string=} close
     */
    constructor(open, close) {
        this.open = open;
        this.close = close;
        if (!close) {
            this.close = open;
        }
    }
    /**
     * @return {boolean}
     */
    isManual() { return this.open === 'manual' || this.close === 'manual'; }
}
function Trigger_tsickle_Closure_declarations() {
    /** @type {string} */
    Trigger.prototype.open;
    /** @type {string} */
    Trigger.prototype.close;
}
const /** @type {?} */ DEFAULT_ALIASES = {
    hover: ['mouseenter', 'mouseleave']
};
/**
 * @param {string} triggers
 * @param {?=} aliases
 * @return {!Array<!Trigger>}
 */
export function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
    const /** @type {string} */ trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    const /** @type {!Array<!Trigger>} */ parsedTriggers = trimmedTriggers.split(/\s+/).map(trigger => trigger.split(':')).map((triggerPair) => {
        let /** @type {?} */ alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    const /** @type {!Array<!Trigger>} */ manualTriggers = parsedTriggers.filter(triggerPair => triggerPair.isManual());
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
const /** @type {function(): void} */ noopFn = () => { };
/**
 * @param {?} renderer
 * @param {?} nativeElement
 * @param {string} triggers
 * @param {?} openFn
 * @param {?} closeFn
 * @param {?} toggleFn
 * @return {function(): void}
 */
export function listenToTriggers(renderer, nativeElement, triggers, openFn, closeFn, toggleFn) {
    const /** @type {!Array<!Trigger>} */ parsedTriggers = parseTriggers(triggers);
    const /** @type {!Array<?>} */ listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return noopFn;
    }
    parsedTriggers.forEach((trigger) => {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
        }
        else {
            listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
        }
    });
    return () => { listeners.forEach(unsubscribeFn => unsubscribeFn()); };
}
//# sourceMappingURL=triggers.js.map