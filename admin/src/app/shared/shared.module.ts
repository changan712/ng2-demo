import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from "@angular/material";
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {ConfirmComponent} from "./comfirm/confirm.component";
import {Ng2PaginationModule} from "ng2-pagination";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        Ng2PaginationModule,
    ],

    declarations: [NavbarComponent, ConfirmComponent],

    exports: [CommonModule, MaterialModule, NavbarComponent, Ng2PaginationModule],
    entryComponents: [ConfirmComponent]

})
export class SharedModule {
}
