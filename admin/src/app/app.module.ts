import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";

import {PagesModule} from "./pages/pages.module";
import {MaterialModule} from "@angular/material";


@NgModule({
    declarations: [
        AppComponent,


    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PagesModule,
        MaterialModule,
        routing


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
