import {NgModule} from '@angular/core';
import {ContactComponent} from './contact/contact.component';


import {ContactService} from "./contact.service";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: 'contact', component: ContactComponent}
        ])
    ],
    declarations: [ContactComponent,],
    exports: [ContactComponent],

})
export class ContactModule {
}
