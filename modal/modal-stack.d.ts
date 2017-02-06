import { Injector, ComponentFactoryResolver } from '@angular/core/index';
import { NgbModalRef } from './modal-ref';
import { NgbModalContainer } from './modal-container';
export declare class NgbModalStack {
    private modalContainer;
    open(moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any, options?: {}): NgbModalRef;
    registerContainer(modalContainer: NgbModalContainer): void;
}
