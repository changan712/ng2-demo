import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ImoocComponent} from "./imooc.component";

import {routing} from "./imooc.routing";
import {SharedModule} from "../../shared/shared.module";


import {ViewChildrenComponent, Pane} from './view-children/view-children.component';

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [ImoocComponent,  ViewChildrenComponent,Pane]
})
export class ImoocModule {
}
