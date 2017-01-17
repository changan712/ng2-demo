import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';


import {ContactModule} from "./contact/contact.module";
import {AppRoutingModule} from "./app-routing.module";

import {CoreModule} from "./core/core.module";

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,

        ContactModule,
        AppRoutingModule,
        CoreModule.forRoot({name:'yuyang'})
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
