import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicComponent} from './basic/basic.component';
import {routing} from "./rx.routing";
import {RxComponent} from "./rx.component";

@NgModule({
    imports: [
        CommonModule,
        routing,
    ],
    declarations: [BasicComponent,RxComponent]
})
export class RxModule {
}
