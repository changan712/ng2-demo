import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from "@angular/material";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [CommonModule, MaterialModule,NavbarComponent],
    declarations: [NavbarComponent]
})
export class SharedModule {
}
