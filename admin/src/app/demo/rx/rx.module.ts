import {NgModule} from '@angular/core';

import {BasicComponent} from './basic/basic.component';
import {routing} from "./rx.routing";
import {RxComponent} from "./rx.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        routing,
    ],
    entryComponents:[
        BasicComponent
    ],
    declarations: [BasicComponent,RxComponent]
})
export class RxModule {
}
