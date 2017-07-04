import {NgModule} from '@angular/core';

import {PagesComponent} from "./pages.component";
import {routing} from "./pages.routing";
import {SharedModule} from "../shared/shared.module";
import {MenuComponent} from "./menu/menu.component";





@NgModule({
    imports: [
        SharedModule,
        routing,

    ],
    declarations: [PagesComponent,MenuComponent,]
})
export class PagesModule {
}
