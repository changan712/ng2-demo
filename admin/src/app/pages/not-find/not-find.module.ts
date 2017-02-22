import {NgModule} from '@angular/core';

import {NotFindComponent} from "./not-find.component";
import {routing} from "./not-find.routing";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [NotFindComponent]
})
export class NotFindModule {
    constructor(){
        console.log('404');

    }
}
