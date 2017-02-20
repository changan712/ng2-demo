import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [CommonModule, MaterialModule],
    declarations: [SidebarComponent]
})
export class SharedModule {
}
