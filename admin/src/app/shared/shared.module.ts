import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from "@angular/material";
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {ConfirmComponent} from "./comfirm/confirm.component";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],

    declarations: [NavbarComponent,ConfirmComponent],

    exports: [CommonModule, MaterialModule, NavbarComponent],
    entryComponents:[ConfirmComponent]

})
export class SharedModule {
}
