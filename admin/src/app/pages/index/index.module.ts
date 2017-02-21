import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from "./index.component";
import {routing} from "./index.routing";
import {MaterialModule} from "@angular/material";


@NgModule({
    imports: [
        CommonModule,

        routing
    ],
    declarations: [IndexComponent]
})
export class IndexModule {
}
