import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appVHost]'
})
export class VHostDirective {

    constructor(public viewContainerRef: ViewContainerRef) {
    }

}
