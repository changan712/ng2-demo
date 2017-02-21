import {NgModule} from '@angular/core';

import {PagesComponent} from "./pages.component";
import {routing} from "./pages.routing";
import {SharedModule} from "../shared/shared.module";



@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [PagesComponent]
})
export class PagesModule {
}
