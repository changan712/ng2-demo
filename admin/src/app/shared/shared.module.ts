import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from "@angular/material";
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {ConfirmComponent} from "./comfirm/confirm.component";
import {Ng2PaginationModule} from "ng2-pagination";
import {VHostDirective} from './v-host/v-host.directive';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        Ng2PaginationModule,

    ],

    declarations: [NavbarComponent, ConfirmComponent, VHostDirective],

    exports: [CommonModule, MaterialModule, NavbarComponent,VHostDirective, Ng2PaginationModule],
    entryComponents: [ConfirmComponent]

})
export class SharedModule {
}
