import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFindComponent} from "./not-find.component";
import {routing} from "./not-find.routing";

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [NotFindComponent]
})
export class NotFindModule {
    constructor(){
        console.log('404');

    }
}
