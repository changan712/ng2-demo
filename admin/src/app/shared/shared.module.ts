import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from "@angular/material";
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    declarations: [NavbarComponent],

    exports: [CommonModule, MaterialModule, NavbarComponent],

})
export class SharedModule {
}
